const express = require("express");
const ejs = require("ejs");

const app = express();

// set template engine
app.set("view engine", "ejs");

app.listen(process.env.PORT || 3001, () => {
  console.log(`run on ${process.env.PORT || 3001}`);
});

app.get("/demo", (req, res) => {
  let user = {
    firstName: "John",
    lastName: "Due",
  };

  let students = {
    stu1: "mary",
    stu2: "kelly",
    stu3: "lura",
  };
  let login = true;
  res.render("index", {
    user,
    login,
    students
  });
});

app.get("/shop", (req, res) => {
  res.render("shop");
});
