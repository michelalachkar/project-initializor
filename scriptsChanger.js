const fs = require("fs");
//package.json scripts changer
let directory = process.argv[2];
let script = {};
let path = "";
const scriptPicker = dir => {
  if (dir == "root") {
    path = "./ready-to-code/package.json";
    script = {
      test: 'echo "Error: no test specified" && exit 1',
      back: "cd back && npm start",
      front: "cd front && npm start",
      start: `concurrently --kill-others-on-fail --names
           \"back,front\" \"npm run back\" \"npm run front\"`,
      postinstall: `cd front && npm install && cd .. && cd
           back && npm install`
    };
  } else if (dir == "back") {
    path = "./ready-to-code/back/package.json";
    script = {
      start: "nodemon --exec babel-node ./src/index.js",
      "build:clean": "rimraf ./build",
      "build:build": "babel src --out-dir ./build --source-maps",
      build: "npm run build:clean && npm run build:build",
      production: "node ./build/index.js"
    };
  }
};
const changeScript = (path, newScripts) => {
  path.scripts = newScripts;
  let data = JSON.stringify(path);
  fs.writeFile(path, data, err => {
    if (err) throw err;
    console.log("package.json has been changed");
  });
};

scriptPicker(directory);
changeScript(path, script);
