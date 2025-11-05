import express from 'express';
import configViewEngine from './configs/ViewEngine';
import initWebRoutes from './routes/web';
require('dotenv').config(); // cau nay khai bao de su dung file .env

const app = express();


//config view engine
configViewEngine(app);
//init web routess
initWebRoutes(app);


const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
    console.log(">>>App jwt is running on the port : " + PORT);
})