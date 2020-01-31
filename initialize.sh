mkdir ready-to-code
cd ready-to-code
mkdir back
npx create-react-app front
npm init -y
echo "node_modules" >> .gitignore
git init
npm install --save concurrently
cd back
echo "node_modules" >> .gitignore
npm init -y
npm install --save @babel/cli @babel/core @babel/node @babel/present-env @babel/register nodemon rimraf
npm install --save express muller express-session cookie-parse body-parser serve-favicon cors http-errors
mkdir public
mkdir src
cd src
touch index.js
cd ../../../
mv folderGenerator.js ./ready-to-code/front/src
mv componentPageConfig.json ./ready-to-code/front/src
cd ./ready-to-code/front/src
node folderGenerator.js
mv folderGenerator.js ../../../
mv componentPageConfig.json ../../../
cd ../../../
mv scriptsConfig.json ./ready-to-code
mv scriptsChanger.js ./ready-to-code
cd ./ready-to-code
node scriptsChanger.js root
mv scriptsChanger.js ./back
mv scriptsConfig.json ./back
cd ./back
node scriptsChanger.js back
mv scriptsConfig.json ../../
mv scriptsChanger.js ../../