const express = require('express');
const router = express.Router();


var fs=require('fs');
var readJson =fs.readFileSync('price.json', 'utf8');
var Prices=JSON.parse(readJson);


router.get('/', (req, res) => {
  res.send(Prices);
});

router.get('/:id', (req, res) => {
    const prices = Prices.filter((value)=>{
    return value.package_id = req.params.id
    });
    
    if (!prices) return res.status(404).send('The prices with the given ID was not found.');
    
    res.send(prices);
    });

module.exports = router; 