const { ReportSchema} = require('../../database/schema');

 class Report {

    constructor() {

    }
    
    async getAllReports() {
        let reports = await ReportSchema.find({});
        return reports;
    }

    async getTodaysReport() {
        let reports =  await ReportSchema.find({date: new Date()})
        return reports;
    }

    async insertReport(states) {
        let report = await new ReportSchema ({
            states : states,
        })
        report.save();

        console.log('report saved ', report)
    }
}

module.exports = Report

// export default Report;