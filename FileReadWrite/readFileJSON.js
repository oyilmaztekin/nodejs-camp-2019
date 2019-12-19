/**
 * beklentiler
 * 1- dosya okuma
 * 2- Asenkron dosyanın promise döndürmesi
 * 2- dosyanın JSON olarak kullanılabilmesi.
 * 3- 
 * 
 */

const fs = require('fs');


function readJSON(fileName, type){
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, type, (err, data) => {
            err ? reject(err) : resolve(data);
        })
    })
}

function getFile(){
    const data = readJSON("employees.json", "utf-8")
    console.log(data);
}

getFile();


