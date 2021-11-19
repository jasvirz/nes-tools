const { readFile, writeFile } = require("fs");
// const fs = require('fs');
let first = "";
let second = "";
readFile("./contents/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log("error read first: ", err);
    return;
  }

  first = result;
  console.log("first result : ", first);
  readFile("./contents/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log("error read second: ", err);
      return;
    }
    second = result;
    console.log("second result : ", second);

    writeFile(
      "./contents/async-results.txt",
      `\n->async outputfile of ${first}, ${second}`,
      { flag: "a" },
      (err, result) => {
        if (err) {
          console.log("error write: ", err);
          return;
        }
        console.log("third: ", result);
      }
    );
  });
});
