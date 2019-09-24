const express = require('express');
const router = express.Router();
const _ = require('lodash');

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

router.get('/evaccant', (req, res) => {
  res.send(vaccant);
      });
      const coachesExecutive = Coaches.filter((value)=>{
        return value.coach_name == 'executive'
        });
        var executive = coachesExecutive[0].seats
        const vaccant = executive.filter((value)=>{
          return value.isVaccant == true
          });
     console.log(vaccant)
module.exports = router; 