const fs = require("fs");

const folderCreator = (baseFolder, arrayOfFolders) => {
  fs.mkdirSync(baseFolder, err => {
    if (err) throw err;
  });

  arrayOfFolders.forEach(name => {
    const path = `${baseFolder}/${name}`;
    const extensions = ["js", "css", "test.js"];
    fs.mkdirSync(path, err => {
      if (err) throw err;
    });

    extensions.forEach(ext => {
      fs.appendFileSync(`${path}/${name}.${ext}`, "", err => {
        if (err) throw err;
      });
    });
  });
};

folderCreator("components", ["Slider", "Header", "Body", "Navbar"]);

folderCreator("pages", ["home", "about", "contact"]);
