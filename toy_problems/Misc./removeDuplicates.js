const fs = require('fs');

// I decided to reset changeLog after each time this file is run
// This can be disabled depending on your preference
fs.writeFileSync('changeLog.txt', '');

// reads the record file that is specified when this file is called from the terminal
const input = fs.readFileSync(process.argv[2], 'utf8');

/**
* Removes records with duplicate ids or emails
* @param {Object} inputRecords
* @return {Object} updated records
*/
const removeDuplicates = (inputRecords) => {
  inputRecords = JSON.parse(inputRecords); // parses the inputRecords
  const records = inputRecords.leads;
  let result = { leads: [] }; // result object that will be returned
  let found; // boolean that is assigned true if a duplicate is found

  for (let i = 0; i < records.length; i++) { // iterate through input array
    found = false; // set found to false before each iteration of result array
    for (let j = 0; j < result.leads.length; j++) { // iterate through result array
			// if the ids or emails of either object are equal, then they are duplicates
      if (records[i]._id === result.leads[j]._id || records[i].email === result.leads[j].email) {
        const leadsDate = new Date(records[i].entryDate); // entry date of input array[i]
        const resultDate = new Date(result.leads[j].entryDate); // entry date of result array[j]
        if (leadsDate >= resultDate) {
					// if input array[i] is more recent or entered at same time, then result array[j] is updated
          logUpdate(result.leads[j], records[i]); // log the update to changeLog.txt
          result.leads.splice(j, 1); // remove old entry from result array
          result.leads.push(records[i]); // add updated record to result array
        }
        found = true; // set 'found' to true since duplicate found
      }
    }
    if (!found) result.leads.push(records[i]); // if no duplicates found, add record to result array
  }
  result = JSON.stringify(result, null, 1); // stringify updated records
  fs.writeFileSync('outputRecords.txt', result); // writes the updated records to outputRecords.txt
};

/**
* logs the changes of a record to changeLog.txt
* @param {Object} oldRecord
* @param {Object} newRecord
*/
function logUpdate(oldRecord, newRecord) {
  const time = new Date(Date.now()); // create timestamp
  let log = `\nRecord with id: ${newRecord._id} was updated on ${time}:`; // create first line of entry to log
  let changed = false; // boolean that is assigned true when a difference between the passed in records is detected

  for (const key in newRecord) {
    if (oldRecord[key] !== newRecord[key]) {
			// if properties are different, add the change to log
      log = `${log}\n  ${key} changed from: ${oldRecord[key]}, to: ${newRecord[key]}`; // add line to log documenting updated entry
      changed = true; // set 'changed' to true since change found
    }
  }
  log += '\n'; // adds a new line between logs
  if (changed) {
		// if a change was detected, write log to changeLog.txt
    fs.appendFileSync('changeLog.txt', log);
  }
}

removeDuplicates(input);
