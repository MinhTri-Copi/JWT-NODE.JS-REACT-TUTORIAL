import db from '../models/index';
import bcrypt from "bcryptjs";


const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;

}
const comparePassword = async (password, hash) => {
    const bam = await bcrypt.compare(password, hash);
    return bam;
}
const checkEmailAlreadyExist = async (email) => {
    let check = await db.User.findOne({
        where: { email: email }
    })
    if (check) {
        return true;
    } else {
        return false;
    }
}

const checkPhoneAlreadyExist = async (phone) => {
    let check = await db.User.findOne({
        where: { phone: phone }
    })
    if (check) {
        return true;
    } else {
        return false;
    }
}
const createRegisterNewUser = async (rawUserData) => {
    try {
  //check email already exist
    let isEmailAlreadyExist = await checkEmailAlreadyExist(rawUserData.email);
    let isPhoneAlreadyExist = await checkPhoneAlreadyExist(rawUserData.phone);
    if (isEmailAlreadyExist || isPhoneAlreadyExist) {
        return {
            EM: 'Email or phone already exist',
            EC: -1,
        }
    }
    //hash password
    let hashedPassword = await hashPassword(rawUserData.password);
    //create new user
    let createUser = await db.User.create({
        email: rawUserData.email,
        password: hashedPassword,
        username: rawUserData.username,
        phone: rawUserData.phone,
    })
    return {
        EM: 'User created successfully',
        EC: 0,
    }
    } catch (e) {
        console.log(">>>> Error: ", e);
        return {
            EM: 'Something went wrong...',
            EC: -1,
        }
    }
  

}
createRegisterNewUser()
    .then(users => {
        console.log('Danh sách người dùng:', users);
    })
    .catch(err => {
        console.error('Lỗi khi lấy danh sách user:', err);
    });
module.exports = {
    createRegisterNewUser
}