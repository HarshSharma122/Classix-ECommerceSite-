import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDb from "./db/index.js";
import authenticationRoutes from "./routes/AuthenticationRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config(); // for getting env data

const app = express();

const port = process.env.PORT || 8000; // for getting port value from static env file
/*Middlewares files here */
app.use(express.json());
app.use(express.static("/public"));
app.use(cookieParser()); // for stting cookie on browser
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use('/auth', authenticationRoutes);
app.use("/productQuery", productRoutes);

connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at ${port} port`);
    });
  })
  .catch((error) => {
    console.log("Databse connection failed", error);
  });
