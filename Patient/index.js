const Express = require('express');
const router = Express.Router();
const PatientControler = require('./patient.controller');

module.exports = (databse) => {
    PatientControler.setDbContext(databse);
    router.get('/',PatientControler.getPatients);
    return router;
}

