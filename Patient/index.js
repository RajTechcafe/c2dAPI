const Express = require('express');
const router = Express.Router();
const PatientControler = require('./patient.controller');

module.exports = () => {
    //PatientControler.setDbContext(databse);
    router.use('/patient',(req,res)=>{
        PatientControler.getPatients(req,res);
    });
    return router;
}



