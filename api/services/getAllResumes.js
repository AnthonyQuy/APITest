const db = require('../database')

module.exports = function getAllResumes(req, res) {
    console.log('getAllResumes:');
    db.getAllResumes().then(resumes => {
        res.send(resumes)
    }).catch(err => { res.status(404).send() })
}