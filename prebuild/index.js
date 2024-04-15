const generateSchedule = require('./generateSchedule')
const config = require("./config");
const fs = require('fs');
(async () => {
  let res = await generateSchedule(config)
  fs.writeFile('src/data/schedule.json', res, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('prebuild schedule.json success!');
  });
})()
