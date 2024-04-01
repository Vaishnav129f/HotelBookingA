const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-sesion");
const flash = require("connect-flash");
const path = require("path");

const sessionOptions = {
  secret: "mysupersecretstring",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anomonous" } = req.query;
  req.session.name = name;

  if (name === "anonymous") {
    req.flash("error", "user not  registerd ");
  } else {
    req.flash("Success", "user registred sucessfully!");
  }

  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.successMsg = req.flash("Success");
  res.locals.errorMsg = req.flash("Error");
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }

//   res.send(`You send a request ${req.session.count} times`);
// });
// app.get("/test", (req, res) => {
//   res.send("test successful!");
// });
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/getsignedcookies", (req, res) => {
//   res.cookies("made-in", "India", { signed: true });
//   res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//   console.log(req.signedCookies);
//   res.send("verified");
// });

// app.get("/greet", (req, res) => {
//   let { name = anonymous } = req.cookies;
//   res.send(`Hi, ${name}`);
// });

// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "hello");
//   res.send("sent you some cookies!");
// });
// app.get("/", (req, res) => {
//   console.dir(req.cookies);
//   res.send("Hi ,i am root!");
// });

// app.use("/users", users);
// app.use("/posts", posts);
//Post

app.listen(3000, () => {
  console.log("server is listning to 3000");
});
