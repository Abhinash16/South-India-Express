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

router.get('/executive/vaccant', (req, res) => {
  const coachesExecutive = Coaches.filter((value)=>{
    return value.coach_name == 'executive'
    });
    var executive = coachesExecutive[0].seats
    const vaccant = executive.filter((value)=>{
      return value.isVaccant == true
      });
      res.send(vaccant);
    });
     
 router.get('/premier/vaccant', (req, res) => {
  const coachesPremier = Coaches.filter((value)=>{
    return value.coach_name == 'premium'
    });
    var premier = coachesPremier[0].seats
    const pvaccant = premier.filter((value)=>{
      return value.isVaccant == true
      });
 res.send(pvaccant);
});
router.get('/club/vaccant', (req, res) => {
  const coachesclub = Coaches.filter((value)=>{
    return value.coach_name == 'club'
    });
    var club = coachesclub[0].seats
    const cvaccant = club.filter((value)=>{
      return value.isVaccant == true
      });
 res.send(cvaccant);
});


router.post('/bookcoach', (req, res) => {
const specific = Coaches.filter((value)=>{
  return value.coach_id == req.body.coach_id
  });
  var spe = specific[0].seats
  const data = spe.filter((value)=>{
    return value.seat_number == req.body.coach_name
    });
    const datadone = data.filter((value)=>{
      return value.isVaccant = false
      });
res.send(specific)
});
module.exports = router; 