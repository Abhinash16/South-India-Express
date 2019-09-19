const express = require('express');
const app = express();
const packages = require('./routes/packages');
const trains = require('./routes/trains');
const prices = require('./routes/prices');
const timetable = require('./routes/timetable');
const coaches = require('./routes/coaches');
<<<<<<< HEAD
const login = require('./routes/login')
const display = require('./routes/displaying')
=======
const login = require('./routes/login');
const contact = require('./routes/contact')
>>>>>>> 0bf09adcf6eace2eb73352a84d56ab48c24818f2

app.use(express.json());

app.use('/api/packages', packages);
app.use('/api/trains', trains);
app.use('/api/prices', prices);
app.use('/api/timetable', timetable);
app.use('/api/coaches', coaches);
app.use('/api/login', login);
<<<<<<< HEAD
app.use('/api/display', display);
=======
app.use('/api/contact', contact);
>>>>>>> 0bf09adcf6eace2eb73352a84d56ab48c24818f2


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
