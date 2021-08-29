const express=require('express');
const router=express.Router();
require("../db/conn");
const User=require("../model/userSchema");

router.get('/showall',function(req,res,next){
    User.find({}).then(function(data){
        res.send(data);
    }).catch(next);
});
// router.post('/showall1',async(req,res)=>{
//     const val=req.body;
//     User.findOne({name:val}).then(function(data){
//         res.send(data);
//     }).catch(next)
// })
module.exports=router;