import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const database_url = process.env.MONGODB_URL; // why this line is not working this is my question which is arise so 

const connectDb = async () => 
{
    try{
        const dataBaseInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    console.log(`DataBase is Connected and db host name is ${dataBaseInstance.connection.host}`);
    }
    catch(error)
    {
        console.log("Connection error while fetching data from database");
        process.exit(1);
    }
    
};
export default connectDb;
