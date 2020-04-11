
const _ = require('lodash');

const convertDataToJson = (data) => {
    // let splitToArray = data.split('\n');
    let getIndex = data.indexOf('Deaths');
    let substring = data.substring(Number(getIndex) + 6);
    // console.log(trimString.split('\n                        '));
    substring = substring.split('\n                        ');
    let trimString = _.filter(substring, (n)=> n !== '')
    return joinToString(trimString);
}
               

const joinToString = (parsedArray) => {

    // console.log(parsedArray.toString())
    let anotherparsed = removeNewLine(parsedArray);
    return convertArrayToJson(anotherparsed);
}

const removeNewLine = (parsedArray) => {
    return parsedArray.filter(parseArr => {
        if(parseArr.includes('\n')){
         
            return
        }
      
        return parseArr;
    }
        )
}

const convertArrayToJson = (parsedArray) => {
    let convertedArray = []
    for(i= 0; i< parsedArray.length; i+= 5) {
       convertedArray.push( {
            name: parsedArray[i],
            confirmed: parsedArray[i + 1],
            admission: parsedArray[i + 2],
            discharged: parsedArray[i + 3],
            deaths: parsedArray[i+4]
        })
    }

    return convertedArray;
}
module.exports = convertDataToJson