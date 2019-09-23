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

var fs=require('fs');
var readJson =fs.readFileSync('trains.json', 'utf8');
var Trains=JSON.parse(readJson);
var fs=require('fs');
var readJson =fs.readFileSync('timetable.json', 'utf8');
var Timetable=JSON.parse(readJson);

var mergedList2 = _.map(Trains, function(item){
    return _.extend(item, _.find(Timetable, { time_id: item.time_id }));
});

var mergedList3 = _.map(mergedList2, function(item){
    return _.extend(item, _.find(Packages, { package_id: item.package_id }));
});

router.get('/', (req, res) => {
	setTimeout(function(){ 
		  res.send(mergedList);
	}, 1000);
});
router.get('/mega', (req, res) => {
	setTimeout(function(){ 
		  res.send(mergedList3);
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