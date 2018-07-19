const db = require('../dbs')
const PatientModel = require('../Models/PatientModel')
class PatientController {
    constructor(){

    }



    getPatients(req,res){
        // const query = 'select * from dbo.Department';
        // db.sqlPromise.then((pool) => {
        //     pool.request().query(query).then(data => {
        //     console.log('success fully retrieved');
        //     res.send(data);

        // }).catch(err => {
        //     console.log('error occured', err);
        //     res.send(err);
        // })
        // })
        let patientObj = new PatientModel();
        let pateintRecordSet = patientObj.getPatientDetails();
        res.send(pateintRecordSet);
    }
}

module.exports = new PatientController();
