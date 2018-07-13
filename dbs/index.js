const sql = require('mssql');

function connectToDB(dbconfig){
    return new Promise((resolve,reject)=>{
        sql.connect(dbconfig).then(pool => {
            resolve(pool.request())
        }).catch(err=>{
            console.log('Error while connecting to db');
        })
    })
}

module.exports = connectToDB;