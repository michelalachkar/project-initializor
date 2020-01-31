const fs = require("fs");
//package.json scripts changer
const changeScript = (package, newScripts) => {
  package.scripts = newScripts;
  let data = JSON.stringify(package);
  fs.writeFile("package.json", data, err => {
    if (err) throw err;
    console.log("package.json has been changed");
  });
};
export default changeScript;
