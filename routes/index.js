function executeQuery(app) {
    app.use('api/patient', require('../Patient/index'));
    return app;
}

module.exports = executeQuery;