console.log("Santosh coding is the best")

const fs = require('fs');
fs.writeFile("output.txt", "writing file", (err) => {
  if(err) console.log("Error Occured");
  else console.log('File Written Successfully');
})