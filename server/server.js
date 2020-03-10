const express = require("express");
const cors = require("cors");
var xlsx = require("xlsx");
const app = express();
const wb = xlsx.readFile("SalesData.xlsx");
const fs = require("fs");
const sheetNames = wb.SheetNames;
console.log(sheetNames);
var ws0 = wb.Sheets[`${sheetNames[0]}`];
var data = xlsx.utils.sheet_to_json(ws0);
console.log(data);
let data1 = JSON.stringify(data);
console.log(data1);
fs.writeFileSync("SalesData.json", data1);
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT,POST,PATCH,DELETE,GET");
    return res.status(200).json({});
  }
  next();
});
app.get("/", (req, res) => {
  res.json(data);
});
app.listen(4500);
