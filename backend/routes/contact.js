const express = require('express');
const router = express.Router();

var fs=require('fs');
var readJson =fs.readFileSync('contacts.json', 'utf8');
var Contacts=JSON.parse(readJson);

router.get('/', (req, res) => {
	setTimeout(function(){ 
		  res.send(Contacts);
	}, 1000);
});

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
    else if(!message){
    res.send({'err':1,msg:'Message is required'})
    }
    else{
       contact= {
        'name': name,
        "phone": phone,
        "email": email,
        "message": message
    }
    Contacts.push(contact)
        res.send({'err':0,msg:'You are recorded! Will get in touch soon'})
    }
    

});

module.exports = router;