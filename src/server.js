const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://localhost/omnistack', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.catch (error => console.log('Database connection failed'));

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3001);