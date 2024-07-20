const express = require("express");
const app = express();
// const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
// const fileUpload = require("express-fileupload");
const path = require("path");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
require("dotenv").config({ path: "/home/ubuntu/Pengci_Scoreboard/Pengci_Scoreboard/Backend/config/config.env" });
// }
app.use(cors({ origin: ["http://localhost:3000","http://localhost:2000","https://54.183.174.245","http://localhost:4000"], credentials: true }))

app.use(express.json());


// Route Imports
const pengci = require("./routes/scoreRoute");


app.use("/pengci/", pengci);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
