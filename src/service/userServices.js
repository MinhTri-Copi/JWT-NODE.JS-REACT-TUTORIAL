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
        try {
            
            const [rows] = await pool.query('SELECT * FROM user');
            
            return rows; 
        } catch (error) {
            throw error; 
        }
    };
    const CreateNewUser = async (email, password, username) => {
        try{
           await db.User.create({
            email  : email,
                password : password,
                username : username
           }
                
            );
        }catch(error){
            console.log(">>>> Error: ", error); 
        }
    };
    const DeleteUser = async (userId) => {
        try{
            const [results,fields] = await pool.execute('DELETE FROM user WHERE id = ?', [userId]);
        }catch(error){
            console.log(">>>> Error: ", error);
        }
    };
    const UpdateUser = async (id, email, username) => {
        try{
            const [results, fields] = await pool.execute('UPDATE user SET email = ?, username = ? WHERE id = ?', [email, username, id]);
        }catch(error){
            console.log(">>>> Error: ", error);
        }
    };

    const getUserByID = async (userId) => {
        try {
            const [row] = await pool.query('SELECT * FROM user WHERE id = ?', [userId]);
            console.log(">>>> Check row: ", row);
            return row;
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