"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/amey', function (req, res) {
    res.send("Amey Says Hello");
});
const port = 3000;
app.listen(port, function () {
    console.log("Server started on port" + port + " ");
});
const fs = require("fs");
fs.writeFileSync("New.txt", "Trying Something new");
fs.appendFileSync("New.txt", "\nStarted Server at 3000");
try {
    fs.appendFileSync("a.txt", "appends");
}
catch (err) {
    fs.writeFileSync("a.txt", "new file");
}
const func = require("./new_app");
console.log(func.util.name);
let c = func.util.add(10, 20);
console.log(c);
var line = new func.util.Line(30, 50);
line.display();
//# sourceMappingURL=app.js.map