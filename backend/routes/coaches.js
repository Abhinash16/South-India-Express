const express = require('express');
const router = express.Router();


var fs=require('fs');
var readJson =fs.readFileSync('coach.json', 'utf8');
var Coaches=JSON.parse(readJson);


router.get('/', (req, res) => {
  res.send(Coaches);
});

router.get('/:id', (req, res) => {
    const coaches = Coaches.filter((value)=>{
    return value.package_id = req.params.id
    });
    
    if (!coaches) return res.status(404).send('The coaches with the given ID was not found.');
    
    res.send(coaches);
    });

module.exports = router; 