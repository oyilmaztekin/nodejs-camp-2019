const fs = require("fs");

function readJSON(fileName, type) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, type, (err, data) => {
      err ? reject(err) : resolve(data);
    });
  });
}

// async function getFile() {
//   const data = await readJSON("employees.json", "utf-8");
//   console.log(data);
// }

// getFile();

module.exports.readJSON = readJSON;