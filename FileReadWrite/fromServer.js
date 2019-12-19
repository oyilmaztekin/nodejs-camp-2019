const http = require("http");
const { readJSON } = require("./readFileJSON");

const server = http.createServer((req, res) => {
  const pathName = req.url;
  readJSON("employee.json", "utf-8").then(data => {
    const employee = JSON.parse(data);
    res.writeHead(200, { "Content-Type": "application/json" });
    if (pathName === "/") {
      res.end(employee);
    }
    
    if(pathName === '/username'){
        res.end(employee.name);
    }

    if (pathName === "/user") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(createTable(employee));
    }
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end()
    
  });
});

function createTable(employee){
    return `
    <style>
        td,th{
            text-align:center;
        }
    </style>
    <table style="width:100%">
        <tr>
            <th> - </th>
            <th>employe photo</th>
            <th>Email</th>
            <th>Company</th>
        <tr/>
        <tr>
            <td><img src='${employee.picture}' /></td>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.company}</td>
        </tr>
    </table>
    `
}

server.listen(8080, "127.0.0.1", () =>
  console.log("listening the port 127.0.0.1:8080")
);
