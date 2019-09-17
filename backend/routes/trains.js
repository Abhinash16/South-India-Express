const express = require('express');
const router = express.Router();


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

module.exports = router; 