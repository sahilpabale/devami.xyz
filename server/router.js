const { Router } = require("express");

const router = (req, res) => {
  try {
    const router = Router();
  } catch (error) {
    res.send("bruh");
  }
};

module.exports = router;
