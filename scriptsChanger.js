const fs = require("fs");
const scriptConf = require("./scriptsConfig.json");
const package = require("./package.json");
//package.json scripts changer
let directory = process.argv[2];
let script = {};
const scriptPicker = dir => {
  if (dir == "root") {
    script = scriptConf.root;
  } else if (dir == "back") {
    script = scriptConf.back;
  }
};
const changeScript = (package, newScripts) => {
  package.scripts = newScripts;
  let data = JSON.stringify(package);
  fs.writeFileSync("package.json", data, err => {
    if (err) throw err;
    console.log("package.json has been changed");
  });
};

scriptPicker(directory);
changeScript(package, script);
