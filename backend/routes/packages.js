const express = require('express');
const router = express.Router();


var fs=require('fs');
var readJson =fs.readFileSync('packages.json', 'utf8');
var Packages=JSON.parse(readJson);


router.get('/', (req, res) => {
  res.send(Packages);
});

router.get('/:id', (req, res) => {
    const packofone = Packages.filter((value)=>{
    return value.package_id == req.params.id
    });
    
    if (!packofone) return res.status(404).send('The packages with the given ID was not found.');
    
    res.send(packofone);
    });

module.exports = router; 