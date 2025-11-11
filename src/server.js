import express from 'express';
import configViewEngine from './configs/ViewEngine';
import initWebRoutes from './routes/web';
import bodyParser from 'body-parser';
import { testConnection } from './configs/connectDB';
require('dotenv').config(); // cau nay khai bao de su dung file .env

const app = express();


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
