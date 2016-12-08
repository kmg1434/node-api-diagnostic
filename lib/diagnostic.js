// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should add all the numbers and pass the result as the second argument to
// the callback provided. e.g `callback(null, sum);`.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// an Error should be passed as the first argument to the callback provided,
// e.g. `callback(new Error('line not a number'));`
//

'use strict';

const fs = require('fs'); // jshint ignore: line

const sumLines = (filename, callback) => {
  /* your response here */
  const inFile = process.argv[2];

  fs.readFile(inFile, 'utf8', (err, data) => {
    if (err) {
      console.error(err.stack);
      return;
    }

    let dataArray = data.split('\n');
    let sum = 0;

    dataArray.forEach((num) => {
      if (parseInt(num, 10).isNaN()) { // if a line is not a number
        console.log('oops');       // throw an "error" to console
      } else {
        sum += parseInt(num, 10);      // else add it to the sum
      }

    });

  });

  callback(); // wtf do I do with this?
              // should we define the callback to be used elsewhere?
};

module.exports = {
  sumLines,
};
