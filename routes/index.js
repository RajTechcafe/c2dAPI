function executeQuery(app, dbs) {
    app.use('api/patient', require('../Patient/index')(dbs))
    return app;
}

module.exports = executeQuery;