import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
import {testConnection} from './config/connectDB.js';
require('dotenv').config(); // cau nay khai bao de su dung file .env

const app = express();

//khai bao de  cho phep ket noi den react,  phan quyen cho phep ng dung tuong tac voi bakend
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
//config view engine
configViewEngine(app);
//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//init web routess
initWebRoutes(app);



const PORT = process.env.PORT || 8081;

const startServer = async () => {
    // Test kết nối database
    await testConnection();
    
    // Start servers
    app.listen(PORT, () => {
        console.log(">>> Project is running on port: " + PORT);
    });
};

startServer();
