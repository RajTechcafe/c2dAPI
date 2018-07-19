const db = require('./index');
// const Promise = require('bluebird');
class DatabaseHelper {

    constructor() {
        this.connectionPool = null;
        this.connectionPool=this.getConnectionPool();
    }

    getConnectionPool() {
        if (this.connectionPool !== null) {
            return this.connectionPool;
        }
        db.sqlPromise.then(pool => {
            console.log('connected to DB');
            return pool;
        }).catch(err => {
            console.error('Error in getting db pool', err);
        })

    }

    getAllRecord(query) {
        return new Promise((resolve , reject)=>{
            this.connectionPool.request().query(query).then(data => {
                console.log('success fully retrieved');
                resolve (data);
            }).catch(err => {
                console.log('Error in getting record', err);
                reject(err);
            })
        })
      

    }


}

module.exports = DatabaseHelper;