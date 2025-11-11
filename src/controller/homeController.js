
import { run } from "@babel/core/lib/transformation";
import connection, { pool } from "../configs/connectDB";
import { hashPassword , comparePassword, getUserList} from "../service/userServices";

const e = require("express");

const handleHelloWorld = (req , res) =>
{
     return  res.render("home");

}
const handleUserPage = async(req , res) =>
{
    const userList = await getUserList();
    return res.render("user", {userList});
}


const handleCreateNewUser = async (req, res) => {
    let email  = req.body.email;
    let password =req.body.password;
    let username  = req.body.username;

    const hash = await hashPassword(password);

    
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