// loading required moudules
require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');
// const Promise = require('bluebird');
// const intializeDB = require('./dbs');
// const config = require('./config/config');
// const routes = require('./routes');
const app = express();
const patientAPI = require('./Patient/index');

// Body parsing middleware.

app.use(bodyParser.json());

// enable cors 


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header('Access-Contorl-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    next();
});

app.use('/api', patientAPI());

app.listen(process.env.APP_PORT,()=>{
    console.log(`App now running on port ${process.env.APP_PORT}`);
});


