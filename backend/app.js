const express = require('express');
const app = express();


app.use(express.json());

var fs=require('fs');
var readJson =fs.readFileSync('packages.json', 'utf8');
var packages=JSON.parse(readJson);
var readJson =fs.readFileSync('trains.json', 'utf8');
var trains=JSON.parse(readJson);


app.get('/api/packages', (req, res)=>{
    res.send(packages)
})

app.post('/api/packages/booking', (req, res)=>{
        let id = req.body.package_id

        var particular = trains.filter((value)=>{
            return value.package_id == id
             });
res.send(particular)
})

app.post('/api/packages/booking/trains', (req, res)=>{
    let id = req.body.train_number

    var finaltrain = trains.filter((value)=>{
        return value.train_number == id
         });
res.send(finaltrain)
})


app.post('/api/packages/booking/trains/forms', (req, res)=>{
    let train_id = req.body.train_number
    let classes = req.body.classes

    var finaltrain = trains.filter((value)=>{
        return value.train_number == train_id
         });

         var price = finaltrain[0].price_executive
         console.log(classes)

         if(classes === 'executive'){
            
         }else{
             res.send('Not Done')
         }
         
})

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));
