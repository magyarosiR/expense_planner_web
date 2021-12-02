const e = require("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.signup = (req, res) => {
  console.log(req.body);

  const fname = req.body.fnamesu;
  const lname = req.body.lnamesu;
  const email = req.body.emailsu;
  const pw = req.body.passwsu;
  const rpw = req.body.repeatpasswsu;
  db.query(
    "SELECT email FROM users WHERE email =?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("signup", {
          message: "That email is already in use",
        });
      } else {
        if (pw != rpw) {
          return res.render("signup", {
            message: "Passwords don't matched",
          });
        }
      }

      let hashedPw = await bcrypt.hash(pw, 8);
      console.log(hashedPw);
      /*db.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES ?",

        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            return res.render("signup", {
              messagegreen: "User registered",
            });
          }
        }
      );*/
      var insert =
        "INSERT INTO users (first_name, last_name, email, password) VALUES ?";
      var values = [[fname, lname, email, hashedPw]];
      db.query(insert, [values], (err, result) => {
        if (err) {
          console.log(error);
        } else {
          {
            return res.render("signup", {
              messagegreen: "User registered",
            });
          }
        }
      });
    }
  );
  /*var insert =
    "INSERT INTO users (id, first_name, last_name, email, password, reppassword) VALUES ?";
  var values = [[i, fname, lname, email, pw, rpw]];
  db.query(insert, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
*/
  //res.send("Form submitted");
};
