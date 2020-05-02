// const Report = require('../models')
const Report = require('../models/Report');

const createReport = async (data) => {
    try{
        const report = new Report();
        let results = await report.insertReport(data);
        console.log('Results has been stored')
    
    } catch( error) {
        console.error('Error while updating database', error);
    }
}

const getReport = async (req, res) => {
    try{
        const report = new Report();
        let results = await report.getAllReports();
        return res.json(results) ;
    }
    catch (error) {
        console.error('Error getting reports ', error);
    }
}
module.exports = {createReport, getReport}