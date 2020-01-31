mkdir ready-to-code
cd ready-to-code
mkdir back
npx create-react-app front
npm init -y
npm install --save concurrently
node ../scriptsChanger.js root
git init
cd back
echo "node_modules" >> .gitignore
npm init -y
npm install --save @babel/cli @babel/core @babel/node @babel/present-env @babel/register nodemon rimraf
npm install --save express muller express-session cookie-parse body-parser serve-favicon cors http-errors
mkdir public
node scriptsChanger.js back
mkdir src
cd src
touch index.js
cd ../../../
mv folderGenerator.js ./ready-to-code/front/src
mv shellConfig.json ./ready-to-code/front/src
cd ./ready-to-code/front/src
node folderGenerator.js


