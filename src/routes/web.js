import express from 'express';
 const router = express.Router();
  /**
   * 
   * @param {*} app  : express app
   */
 // dinh nghia cac route o day
 const  initWebRoutes = (app) => {
     router.get("/", (req, res) => {
        return  res.send("Good bye World");
     })


     return  app.use("/", router);





 }

 export default initWebRoutes;