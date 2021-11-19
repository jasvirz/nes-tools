const os = require("os");
const path = require("path");

const { config } = require("process");
const filePath = path.join("../", "node-express-course/", "readme.md");

console.log(
  "user is ",
  os.userInfo(),
  "host is ",
  os.hostname(),
  "running for ",
  (os.uptime() / 60).toFixed(2),
  " minutes"
);

console.log(
  filePath,
  "base = ",
  path.basename(filePath),
  "resolve =",
  path.resolve(filePath)
);
