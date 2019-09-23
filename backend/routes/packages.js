const express = require('express');
const router = express.Router();
const _ = require('lodash');

var fs=require('fs');
var readJson =fs.readFileSync('packages.json', 'utf8');
var Packages=JSON.parse(readJson);


var fs=require('fs');
var readJson =fs.readFileSync('price.json', 'utf8');
var Prices=JSON.parse(readJson);


router.get('/', (req, res) => {
	setTimeout(function(){ 
		  res.send(Packages);
	}, 1000);
});

router.get('/:id', (req, res) => {
    const packofone = Packages.filter((value)=>{
    return value.package_id == req.params.id
    });
    
    if (!packofone) return res.status(404).send('The packages with the given ID was not found.');
    
    res.send(packofone);
    });

router.post('/', (req, res)=>{

        let package_id = req.body.package_id
        let package_name= req.body.package_name
        let source= req.body.source
        let fare_id= req.body.fare_id
        
       if(!package_id){
          res.send({'err':1,msg:'Package ID is required'})
       }
    
       else if(!package_name){
          res.send({'err':1,msg:'Package name is required'})
       }
    
       else if(!source){
        res.send({'err':1,msg:'source is required'})
        }
        else if(!fare_id){
        res.send({'err':1,msg:'Fare id is required'})
        }
        else{
           package= {
            'package_id': package_id,
            "package_name": package_name,
            "source": source,
            "fare_id": fare_id
        }
        Packages.push(package)
            res.send({'err':0,msg:'New Package Added!'})
        }  
    });
    router.delete('/:id', (req, res) => {
        var id = req.params.id;
        const package =  _.remove(Packages, function(n) {
          return n.package_id == id
        })
        res.send(package);
      });
module.exports = router; 