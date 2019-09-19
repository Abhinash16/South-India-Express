const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{

    let name = req.body.name
    let phone= req.body.phone
    let email= req.body.email
    let message= req.body.message
    
   if(!name){
      res.send({'err':1,msg:'Name is required'})
   }

   else if(!phone){
      res.send({'err':1,msg:'Phone is required'})
   }

   else if(!email){
    res.send({'err':1,msg:'Email is required'})
    }
    else if (email){
        // var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.value.match(re))
          {
            res.send({'err':1,msg:'type valid email'})
        }  
    }
    else if(!message){
    res.send({'err':1,msg:'Message is required'})
    }
    else{
        res.send({'err':0,msg:'Sucessfull'})
    }
    

});

module.exports = router;