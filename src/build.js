//Intended to run in following file structure
//This should be in a folder src/. There should also be a folder ../build/
//There should be the following in src/
//This file, googlesnakemodloader-dev.user.js, snake-mod-loader-fbx.meta.js, snake-mod-loader-intl.meta.js, snake-mod-loader-standard.meta.js

let fs = require('fs');

process();

function process() {
  //Get the dev version of the userscript file that we've made edits to.
  let userscriptBody = fs.readFileSync(__dirname + '/googlesnakemodloader-dev.user.js', 'utf8');
  //Get version
  let version = userscriptBody.match(/\/\/ @version +?([\d\.]+)/)[1];

  //Get body (bit after the comments at the start)
  if(!/\/\/ ==UserScript==[^]*?\/\/ ==\/UserScript==/.test(userscriptBody)) {
    throw new Error("Couldn't find meta section in dev version");
  }
  userscriptBody = userscriptBody.replace(/\/\/ ==UserScript==[^]*?\/\/ ==\/UserScript==/,'');
  //Change to devmode
  if(!/const IS_DEVELOPER_MODE = true;/.test(userscriptBody)) {
    throw new Error("Couldn't find meta section in dev version");
  }
  userscriptBody = userscriptBody.replace('const IS_DEVELOPER_MODE = true;', 'const IS_DEVELOPER_MODE = false;');

  buildUserscript('snake-mod-loader-fbx.meta.js', 'snake-mod-loader-fbx.user.js', version, userscriptBody);
  buildUserscript('snake-mod-loader-intl.meta.js', 'snake-mod-loader-intl.user.js', version, userscriptBody);
  buildUserscript('snake-mod-loader-standard.meta.js', 'snake-mod-loader-standard.user.js', version, userscriptBody);
}

function buildUserscript(metaSrc, userOutname, version, userscriptBody) {
  console.log('Processing: ' + metaSrc);
  fs.readFile(__dirname + '/' + metaSrc, 'utf8', function(err, data) {
    if(err) throw err;
    if(!data.includes('%VERSION%')) {
      throw new Error(`${metaSrc} is missing %VERSION% placeholder text`);
    }
    data = data.replace('%VERSION%', version);

    //Write meta file
    fs.writeFile(__dirname + '/../build/' + metaSrc, data, function(err) {
      if (err) throw err;
      console.log('Successfully wrote to ../build/' + metaSrc);
    });

    data += '\n' + userscriptBody;

    //Write user file
    fs.writeFile(__dirname + '/../build/' + userOutname, data, function(err) {
      if (err) throw err;
      console.log('Successfully wrote to ../build/' + userOutname);
    });
  });
}