import loginRegisterService from '../service/loginRegisterService';

const testApi = (req , res) => 
{
        return res.status(200).json({
            message: 'ok',
            data :  'test api'
        })
}
const handleRegister = async (req , res) => {
    try{
        if(!req.body.email || !req.body.password || !req.body.userName||!req.body.phone){
            return res.status(200).json({
                EM: 'Missing required fields',  // error message
                EC : -1 ,// error code -> sai
                DT : '',// data
            })
        }
        if(req.body.password && req.body.password.length < 4){
            return res.status(200).json({
                EM: 'Password must be at least 4 characters long',
                EC : -1 ,// error code -> sai   
                DT : '',// data
            })
        }
        //service
        let data = await loginRegisterService.createRegisterNewUser(req.body);

        return res.status(200).json({
            EM: data.EM,  // error message
            EC : data.EC ,// error code -> thanh cong
            DT : '',// data
        })
    }catch(error){
        return res.status(500).json({
            EM: 'error form server',  // error message
            EC : -1 ,// error code
            DT : '',// data
        })
    }

}
const handleLogin = async (req , res) => {
    try{
        if(!req.body.keyLogin || !req.body.password){   
            return res.status(200).json({
                EM: 'Missing required fields',  // error message
                EC : -1 ,// error code -> sai
                DT : '',// data
            })
        }
        let data = await loginRegisterService.handleLoginUser(req.body);
        return res.status(200).json({
            EM: data.EM,  // error message
            EC : data.EC ,// error code -> thanh cong
            DT : data.DT ,// data
        })
       
    }catch(error){
        console.log(">>>> Error: ", error);
        return res.status(500).json({
            EM: 'error form server',  // error message
            EC : -1 ,// error code
            DT : '',// data
        })
    }
}
module.exports={
    testApi,
    handleRegister,
    handleLogin,
};