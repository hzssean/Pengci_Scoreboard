const app = require("./app");
// const dotenv=require("dotenv");
// const cloudinary = require("cloudinary");
// const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

// Config
// if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "/home/ubuntu/Pengci_Scoreboard/Pengci_Scoreboard/Backend/config/config.env" });
// }

// Connecting to database
// connectDatabase();

// cloudinary.config({
//    cloud_name: process.env.CLOUDINARY_NAME,
//    api_key: process.env.CLOUDINARY_API_KEY,
//    api_secret: process.env.CLOUDINARY_API_SECRET,
//  });

const port = process.env.PORT; 
app.listen(port, () => {
  console.log(`Server is working on http://localhost:${port}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
