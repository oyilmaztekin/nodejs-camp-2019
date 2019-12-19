var fs = require('fs');

function getData(fileName, type) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, type, (err, data) => {
          err ? reject(err) : resolve(data);
      });
    });
  }

  getData("./file.txt", "utf-8").then(data => console.log(data));