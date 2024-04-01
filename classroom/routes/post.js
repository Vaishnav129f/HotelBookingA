const express = require("express");
const router = express.Router();
// Index Users
router.get("/", (req, res) => {
  res.send("GET for posts");
});

//SHOW Users
router.get("/:id", (req, res) => {
  res.send("GET for  post id");
});

//Post for Users
router.post("/", (req, res) => {
  res.send("Post for posts");
});

//DELETE for Users
router.delete("/:id", (req, res) => {
  res.send("DELETE for post id");
});

module.exports = router;
