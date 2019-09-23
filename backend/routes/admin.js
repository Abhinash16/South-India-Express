const express = require('express');
const router = express.Router();
const _ = require('lodash');

var fs=require('fs');
var readJson =fs.readFileSync('admin.json', 'utf8');
var Admin=JSON.parse(readJson);

router.post('/', (req, res)=>{

    let username = req.body.username
    let password= req.body.password
    
   if(!username){
      res.send({msg:'Username is required'})
   }

   else if(!password){
      res.send({msg:'Password is required'})
   }
    
   else if(username == Admin.username && password == Admin.password){
      res.send({'err':0,msg:'successful','username': Admin.username})
   }
   else{
       res.send({'err':1,msg:'Invalid Credintials :('})
   }
});

module.exports = router;