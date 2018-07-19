const Dbhelper = require('../dbs/dbhelper')
class PatientModel{
    constructor(){

    }

    getPatientDetails(){
        let query = 'select * from dbo.Department';
     new Dbhelper().getAllRecord(query).then(data =>{
           return data;
       });
    }
    
}

module.exports = PatientModel;