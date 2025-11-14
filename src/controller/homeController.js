
import { run } from "@babel/core/lib/transformation";
import { hashPassword, CreateNewUser, getUserList , DeleteUser, UpdateUser, getUserByID} from "../service/userServices";

const e = require("express");

const handleHelloWorld = (req, res) => {
    return res.render("home");

}
const handleUserPage = async (req, res) => {
    const userList = await getUserList();
    return res.render("user", { userList });
}


const handleCreateNewUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    const hashedPassword = await hashPassword(password);
    const createUser = await CreateNewUser(email, hashedPassword, username);
        res.redirect("/user");

}

const handleDeleteUser = async (req, res) => {
    let userID = req.params.id;
    await DeleteUser(userID);
    res.redirect("/user");
}


const getUpdateUserPage = async (req, res) => {
        let userID = req.params.id;
        const user = await getUserByID(userID);
        let userData = {};
     userData = user;
     console.log(">>>> Check userData: ", userData);
    return res.render("user-update", {userData});
};


const updateUser = async (req, res) => {
    let id = req.params.id;
    let email = req.body.email;
    let username = req.body.username;
    await UpdateUser(id, email, username);
    res.redirect("/user");
};
module.exports = {
    handleHelloWorld,
    handleUserPage,
    handleCreateNewUser,
    handleDeleteUser,
    getUpdateUserPage,
    updateUser
}