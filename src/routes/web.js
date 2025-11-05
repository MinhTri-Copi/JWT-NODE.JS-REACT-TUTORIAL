import express from 'express';
import homeController from '../controller/homeController';


 const router = express.Router();
  /**
   * 
   * @param {*} app  : express app
   */
 // dinh nghia cac route o day
 const  initWebRoutes = (app) => {
     router.get("/", homeController.handleHelloWorld);
     router.get("/user", homeController.handleUserPage);
     router.get("/about", (req , res) => {
         return res.send("This is about page");
     })

     return  app.use("/", router);

 }

 export default initWebRoutes;