const express = require('express');
const router = express.Router();


var fs=require('fs');
var readJson =fs.readFileSync('timetable.json', 'utf8');
var Timetable=JSON.parse(readJson);


router.get('/', (req, res) => {
  res.send(Timetable);
});

router.get('/:id', (req, res) => {
    const timetable = Timetable.filter((value)=>{
    return value.package_id = req.params.id
    });
    
    if (!timetable) return res.status(404).send('The timetable with the given ID was not found.');
    
    res.send(timetable);
    });

module.exports = router; 