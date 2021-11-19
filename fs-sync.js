const { readFileSync, writeFileSync } = require("fs");
// const fs = require('fs');
// due to single-threaded node architecture, this approach will be scale-inhibitive
// better option is to use the async features (readFile, writeFile) with async await /promises (try {..then..then } catch err {}
const first = readFileSync("./contents/first.txt", "utf-8");
const second = readFileSync("./contents/second.txt", "utf-8");
const third = writeFileSync(
  "./contents/third.txt",
  `this is my outputfile of ${first}, ${second}`,
  { flag: "a" }
);
console.log(first);
console.log(second);
console.log(readFileSync("./contents/third.txt", "utf-8"));
