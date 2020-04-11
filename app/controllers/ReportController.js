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

module.exports = {createReport}