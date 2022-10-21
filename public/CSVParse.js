const fs = require('fs');
const papa = require('papaparse');
const file = fs.createReadStream('data/StratoLogger.csv');
var count = 0; // cache the running count
papa.parse(file, {
    worker: true, // Don't bog down the main thread if its a big file
    step: function(result) {
        // do stuff with result
        console.log(result)
    },
    complete: function(results, file) {
        console.log('parsing complete read', count, 'records.'); 
    }
});