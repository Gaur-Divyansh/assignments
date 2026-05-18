const fs = require("fs");
console.log("start");

fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});
let sum = 0;
for (let i = 0; i < 100000; i++) {
  sum += i;
}
console.log(sum);
console.log("end");
