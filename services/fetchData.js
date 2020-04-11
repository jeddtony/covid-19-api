const cheerio = require('cheerio');
const axios = require('axios');

let fetchedData = null


const 
fetchData = async() => {
    let results = await axios.get(process.env.NCDC_URL);
    fetchedData = results.data;

    const $ = cheerio.load(fetchedData)

const tableRows = $('#custom3').map(function(i, el) {
    // this === el
    return $(this).text();
  })
  .get()
.join();

// tableRows.map((tablRow, index) => console.log(tablRow.text()));
// console.log(tableRows);
return tableRows;
}


module.exports =  fetchData