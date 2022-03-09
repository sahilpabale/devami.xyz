const router = (req, res) => {
  try {
    res.send("resp");
  } catch (error) {
    res.send("bruh");
  }
};

module.exports = router;
