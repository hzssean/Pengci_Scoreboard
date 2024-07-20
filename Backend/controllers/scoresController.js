const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const fs = require('fs');


class Pengci {
  constructor(username, datetime, email, score) {
    this.username = username;
    this.datetime = datetime;
    this.email = email;
    this.score = score;
  }
}

function loadPengciJobs() {
  try {
    const filePath = "/home/ubuntu/Pengci_Scoreboard/Pengci_Scoreboard/Backend/controllers/pengci_jobs.json";
    const data = fs.readFileSync(filePath, "utf8");
    const jsonData = JSON.parse(data);
    return jsonData.scores;
  } catch (error) {
    console.error("Error loading Pengci jobs:", error);
    return [];
  }
}

function savePengciJobs(jobs) {
  try {
    const filePath = "/home/ubuntu/Pengci_Scoreboard/Pengci_Scoreboard/Backend/controllers/pengci_jobs.json";
    const jsonData = { scores: jobs };
    const saveData = JSON.stringify(jsonData, null, 2); // Using null, 2 for pretty formatting (optional)
    fs.writeFileSync(filePath, saveData);
  } catch (error) {
    console.error("Error saving Pengci jobs:", error);
  }
}


exports.saveNewScore = catchAsyncErrors(async (req, res, next) => {
 
  const pengci = new Pengci(
    req.body.username,
    req.body.datetime,
    req.body.email,
    req.body.score
  );

  const pengciJobs = loadPengciJobs();
  pengciJobs.push(pengci);
  savePengciJobs(pengciJobs);

    res.status(201).json({
        success: true,
        message: "Score Added Successfully",
        
      });
    });

exports.getAllScores = catchAsyncErrors(async (req, res, next) => {

    fs.readFile('/home/ubuntu/Pengci_Scoreboard/Pengci_Scoreboard/Backend/controllers/pengci_jobs.json', 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading scores file', err);
          res.status(500).send('Error reading pengci jobs file');
        }         
          const scores = JSON.parse(data);
          console.log(scores)
          res.status(200).json({
            success: true,
            scores     
      })
        
      });
    });
      
