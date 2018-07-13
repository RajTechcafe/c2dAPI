
class PatientController {
    constructor(){

    }

    setDbContext(databsae){
        this.databsae = databsae;
    }

    getPatients(req,res){
        const query = 'select * from dbo.Department';
        this.databsae.query(query).then(data => {
            console.log('success fully retrieved');
            res.send(data);

        }).catch(err => {
            console.log('error occured', err);
            res.send(err);
        });
    }
}

module.exports = new PatientController();
