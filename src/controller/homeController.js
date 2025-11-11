
import connection, { pool } from "../configs/connectDB";
const e = require("express");

const handleHelloWorld = (req , res) =>
{
     return  res.render("home");

}
const handleUserPage = (req , res) =>
{
    return res.render("user");
}


const handleCreateNewUser = (req, res) => {
    let email  = req.body.email;
    let password = req.body.password;
    let username  = req.body.username;



    pool.query ('INSERT INTO users (email, password, username) VALUES (?, ?, ?)',[email, password, username], 
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