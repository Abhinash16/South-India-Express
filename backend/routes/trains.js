const express = require('express');
const router = express.Router();
const _ = require('lodash');

var fs=require('fs');
var readJson =fs.readFileSync('trains.json', 'utf8');
var Trains=JSON.parse(readJson);


router.get('/', (req, res) => {
  res.send(Trains);
});

router.get('/:id', (req, res) => {
    const trains = Trains.filter((value)=>{
    return value.package_id = req.params.id
    });
    
    if (!trains) return res.status(404).send('The trains with the given ID was not found.');
    
    res.send(trains);
    });

router.post('/', (req, res)=>{
      let train_number = req.body.train_number
      let train_name= req.body.train_name
      let package_id= req.body.package_id
      let time_id= req.body.time_id
      
      
      if(!train_number){
        res.send({'err':1,msg:'Train number is required'})
     }
  
     else if(!train_name){
        res.send({'err':1,msg:'Train name is required'})
     }
  
     else if(!package_id){
      res.send({'err':1,msg:'Package ID is required'})
      }
      else if(!time_id){
      res.send({'err':1,msg:'Time id is required'})
      }
      else{
         train= {
          "train_number": train_number,
          "train_name": train_name,
          "package_id": package_id,
          "time_id": time_id
      }
      Trains.push(train)
          res.send({'err':0,msg:'New Train Added!',train: Trains})
      }
  });
  router.delete('/:id', (req, res) => {
    var id = req.params.id;
    const trains =  _.remove(Trains, function(n) {
      return n.train_number == id
    })
    res.send(trains);
  });
module.exports = router; 