const express = require("express");
const router = express.Router();
// Index Users
router.get("/", (req, res) => {
  res.send("GET for user");
});

//SHOW Users
router.get("/:id", (req, res) => {
  res.send("GET for  users id");
});

//Post for Users
router.post("/", (req, res) => {
  res.send("Post for users");
});

//DELETE for Users
router.delete("/:id", (req, res) => {
  res.send("DELETE for user id");
});

module.exports = router;
