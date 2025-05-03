import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next)=>
{
    const token = req.cookies.token
    if(!token) return res.status(401).send("You are not authorized");
    jwt.verify(token, "harsh1234290", async(err, payload)=>
    {
        if(err) return res.status(403).send("Toekn is not valid");
        req.userId = payload.userId
        next();
    })
}