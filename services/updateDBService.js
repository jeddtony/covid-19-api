// const {fetchData, convertDataToReport} = require('./index')
const {ReportController} = require("../app/controllers");
const fetchData = require('./fetchData');
const convertDataToReport = require('./convertDataToReport')

async function updateReport () {
    try{
        let results = await fetchData();
   let parsedResults = await convertDataToReport(results);

   await ReportController.createReport(parsedResults);

   console.log('database update');
    } catch(error) {
        console.error('Error in updating DB ', error);
        
    }

}

module.exports = updateReport