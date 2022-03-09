// imports
const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

// uri of the database
const PORT = process.env.PORT || 8080;
const dbURI = process.env.DB_URI.toString();

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then((result) => {
    app.listen(PORT);
    console.log(`listening on http://localhost:${PORT} \nConnected to DB`);
  })
  .catch((err) => console.log(err));

// middleware & static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// routes handlers

// example:
app.use("/api", require("./router.js"));

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red);

  // close server & exit process
  app.close(() => process.exit(1));
});
