const sql = require('mssql');
const dbconfig = require('../config/config');

// function connectToDB(dbconfig){
//     return new Promise((resolve,reject)=>{
//         sql.connect(dbconfig).then(pool => {
//             resolve(pool.request())
//         }).catch(err=>{
//             console.log('Error while connecting to db');
//         })
//         sql.on('error', err => {
//             sql.close();
//         })
//     })
// }

const sqlPromise = 
    new sql.ConnectionPool(dbconfig).connect().then(pool=>{
        return pool;
    }).catch(err=>{
        console.log('Error while connecting to db')
    })

module.exports = {
    sqlPromise
};