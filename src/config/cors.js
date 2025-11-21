require('dotenv').config(); // cau nay khai bao de su dung file .env



const cors = (app) => {
    app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', process.env.REACT_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
}
//khai bao de  cho phep ket noi den react,  phan quyen cho phep ng dung tuong tac voi bakend


export default cors;