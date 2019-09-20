const express = require('express');
const router = express.Router();
const _ = require('lodash');

var fs=require('fs');
var readJson =fs.readFileSync('packages.json', 'utf8');
var Packages=JSON.parse(readJson);


var fs=require('fs');
var readJson =fs.readFileSync('price.json', 'utf8');
var Prices=JSON.parse(readJson);

var mergedList = _.map(Packages, function(item){
    return _.extend(item, _.find(Prices, { fare_id: item.fare_id }));
});

router.get('/', (req, res) => {
	setTimeout(function(){ 
		  res.send(mergedList);
	}, 1000);
});

router.get('/:id', (req, res) => {
    const one = mergedList.filter((value)=>{
    return value.package_id == req.params.id
    });
    
    if (!one) return res.status(404).send('The packages with the given ID was not found.');
    
    res.send(one);
    });

module.exports = router; 