const {Report} = require('../../database/schema');

 class Report {

    constructor() {

    }
    
    async getAllReports() {
        let reports = await Report.find({});
        return reports;
    }

    async getTodaysReport() {
        let reports =  await Report.find({date: new Date()})
        return reports;
    }
}