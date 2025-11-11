
import { run } from "@babel/core/lib/transformation";
import connection, { pool } from "../configs/connectDB";
import { hashPassword , comparePassword} from "../service/userServices";

const e = require("express");

const handleHelloWorld = (req , res) =>
{
     return  res.render("home");

}
const handleUserPage = (req , res) =>
{
    return res.render("user");
}


const handleCreateNewUser = async (req, res) => {
    let email  = req.body.email;
    let password =req.body.password;
    let username  = req.body.username;

    const hash = await hashPassword(password);
     console.log(">>>Check hash  : ", hash)

    const compare = await comparePassword (password, hash);
    console.log(">>>Check compare  : ", compare)
    
    const [result]= await pool.query ('INSERT INTO users (email, password, username) VALUES (?, ?, ?)',[email, hash, username], 
    function (error, results, fields) {
        if (error) {
            console.log(error);
    }
}
);
    console.log(">>>Check  req  : ", req.body)
    return res.send("Create new user success!");
}
module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
}