// const cheerio = require('cheerio');

// const $ = cheerio.load(`<ul id="fruits">
// <li class="apple">Apple</li>
// <li class="apple">Second Apple</li>
// <li class="apple">Third Apple</li>
// <li class="orange">Orange</li>
// <li class="pear">Pear</li>
// </ul>`);

// let classesSelected = $('.apple', '#fruits').text();
// console.log(typeof(classesSelected));

const cheerio = require('cheerio');
const axios = require('axios');

let fetchedData = null
const fetchPage = async() => {
    let results = await axios.get('https://covid19.ncdc.gov.ng/');
    fetchedData = results.data;

    const $ = cheerio.load(fetchedData)

// const tableRows = $('#custom3').find('tr');

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
