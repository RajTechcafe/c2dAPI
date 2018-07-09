// loading required moudules
require('dotenv').load();
const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql');

const app = express();

// Body parsing middleware.

app.use(bodyParser.json());

// enable cors 

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header('Access-Contorl-Allow-Headers', 'Origin, X-Requested-With, Content-Type,Accept');
    next();
});

// setting up server

const server = app.listen(process.env.APP_PORT, () => {
    let port = server.address().port;
    console.log("App now running on port", port);
});

// Database configuration

const dbConfig = {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME
};

// function to connect datbase and execute query
function executeQuery(Query) {

    return new Promise((resolve, reject) => {
        let conn;
        sql.connect(dbConfig).then(pool => {
            console.log('connected to database');
            conn = pool;
            return pool
                .request()
                .query(Query)
        }).then(result => {
             console.log('Query executed');
             resolve(result);
            //console.dir(result);
        },
        (err=>{
            console.log('An error occured',err);
            reject(err);
        })
    ).then(()=>{
        if(conn)
            return conn.close();
    }).then(()=>{
        console.log('connection clsoed');
    }).catch(err => {
             console.log('error occured while closing',err);
        });

        sql.on('error', err => {
            console.error(err);
        });
    })

}


app.get('/api/department',(req,res)=>{
    let query='select * from dbo.Department';
    executeQuery(query).then(data=>{
        console.log('success fully retrieved');
        res.send(data);
    
}).catch(err=>{
    console.log('error occured',err);
    res.send(err);
});

})
 

