import bcrypt from "bcryptjs";
import connection, { pool } from "../config/connectDB";
import db from "../models/index";
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;

}

const comparePassword = async (password, hash) => {
    const bam = await bcrypt.compare(password, hash);
    return bam;
}
module.exports = {
    hashPassword,
    comparePassword
}

const getUserList = async () => {
    let users = [];
    try {
        users = await db.User.findAll();
        return users;

    } catch (error) {
        throw error;
    }
};
const CreateNewUser = async (email, password, username) => {
    try {
        await db.User.create({
            email: email,
            password: password,
            username: username
        }

        );
    } catch (error) {
        console.log(">>>> Error: ", error);
    }
};
const DeleteUser = async (userId) => {
    try {
        await db.User.destroy({
            where: {
                id: userId,
            },
        });
    } catch (error) {
        console.log(">>>> Error: ", error);
    }
};
const UpdateUser = async (id, email, username) => {
    try {
        await db.User.update({
            email: email,
            username: username,
        },
            {
                where: { id: id },
            }
        );
    } catch (error) {
        console.log(">>>> Error: ", error);
    }
};

const getUserByID = async (userId) => {
    let user = {};
    try {
        user = await db.User.findOne({
            where: {
                id: userId,
            },
        })
      
     return user.get({ plain: true });
      
    } catch (error) {
        console.log(">>>> Error: ", error);
    }
};
module.exports = {
    hashPassword,
    comparePassword,
    getUserList,
    CreateNewUser,
    DeleteUser,
    UpdateUser,
    getUserByID,
}