var express = require('express');
var router = express.Router();

const { getList,getDetail,addNew,updateBlog,delBlog } = require("../controller/blog")
const { SuccessModel, ErrorModel } = require("../model/resModel")
/* GET home page. */
router.get('/list', function (req, res, next) {
    const author = req.query.author || ''
    const keyword = req.query.keyword || ''

   const result= getList(author, keyword)
   
    return result.then(data =>{
        res.json(
            new SuccessModel(data)
        )
    })

});

router.get('/detail', function (req, res, next) {
    const id = req.query.id || ''
    console.log("ididid",id)

   const result= getDetail(id)
   
    return result.then(data =>{
        res.json(
            new SuccessModel(data)
        )
    })

});

router.post('/new', function (req, res, next) {
    const blog_obj = req.body || ''
     
   const result= addNew(blog_obj)
   
    return result.then(data =>{
        if(data){
            res.json(
                new SuccessModel(data)
            )
            return 
        }
       res.json(new ErrorModel("add error"))
    })

});

router.post('/updateBlog', function (req, res, next) {
    const blog_obj = req.body || ''
   
   const result= updateBlog(blog_obj)
   
    return result.then(data =>{
        if(data){
            res.json(
                new SuccessModel()
            )
            return 
        }
        res.json(
            new ErrorModel("update error")
        )
    })

});

router.post('/del', function (req, res, next) {
    const id = req.query.id || ''
    console.log("del id",id)

   const result= delBlog(id)
   
    return result.then(data =>{
        if(data){
            res.json(
                new SuccessModel()
            )
            return 
        }
        res.json(
            new ErrorModel("delete error")
        )
    })

});

module.exports = router;
