/* server side */

//nodemon refresh automatically my server when i change something in the codebase

const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));
app.set("view engine", "html");
app.engine("html", require("hbs").__express);
app.use(express.static("views/resources/images"));

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("MYSQL connected");
  }
});

/* Define routes/pages */
app.use("/", require("./routes/pages"));

app.listen(5501, () => {
  console.log("server is running on port 5501");
});
