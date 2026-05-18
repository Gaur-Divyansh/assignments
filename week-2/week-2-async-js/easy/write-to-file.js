const fs = require("fs");

fs.writeFile("file.txt", "New Data!!", (err) => {
  if (err) {
    console.log("Error writing file");
    return;
  }
  console.log("Done writing");
});
