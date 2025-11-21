//rest api
//GET (R) - POST(C) - PUT(U) - DELETE(D)
import express from 'express';
import apiController  from '../controller/apiController'

 const router = express.Router();
  /**
   * 
   * @param {*} app  : express app
   */
 // dinh nghia cac route o day
 const  initApiRoutes = (app) => {


      router.get("/test-api", apiController.testApi);
      router.post("/register", apiController.handleRegister);
     return  app.use("/api/v1/", router);

 }

 export default initApiRoutes;