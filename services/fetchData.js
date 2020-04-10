const cheerio = require('cheerio');
const axios = require('axios');

let fetchedData = null
const fetchPage = async() => {
    let results = await axios.get('https://covid19.ncdc.gov.ng/');
    fetchedData = results.data;

    const $ = cheerio.load(fetchedData)

const tableRows = $('#custom3').map(function(i, el) {
    // this === el
    return $(this).text();
  })
  .get()
.join();

// tableRows.map((tablRow, index) => console.log(tablRow.text()));
console.log(typeof(tableRows));
}

fetchPage();