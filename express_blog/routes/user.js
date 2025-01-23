var express = require('express');
var router = express.Router();

const {SuccessModel,ErrorModel}=require("../model/resModel")
const {login}=require("../controller/user")
/* GET users listing. */
router.post('/login', function(req, res, next) {

    const {username,password}=req.body
    const result=login(username,password)
     return result.then(data=>{
        if(data.username){
            //设置session
            req.session.username=data.username
            req.session.realname=data.realname
            res.json(new SuccessModel(data))
            return
        }
  
        res.json(new ErrorModel("登陆失败"))
     })
//   res.send('respond with a resource');
});

module.exports = router;
