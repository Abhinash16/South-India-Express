const express = require('express');
const router = express.Router();

var fs=require('fs');
var readJson =fs.readFileSync('login.json', 'utf8');
var login=JSON.parse(readJson);

router.post('/', (req, res)=>{

    let username = req.body.username
    let password= req.body.password
   
    for(var i in login){
      if(!username){
         res.send({msg:'Username is required'})
      }
   
      else if(!password){
         res.send({msg:'Password is required'})
      }
       
      else if(username == login[i].username && password == login[i].password){
         res.send({'err':0,msg:'successful','username': login.username})
      }
      else{
          res.send({'err':1,msg:'Invalid Credintials :('})
      }
    }

});

module.exports = router;