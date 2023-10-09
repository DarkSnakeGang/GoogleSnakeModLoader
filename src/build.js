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
  //Change to devmode and update version constant variable
  if(!/const IS_DEVELOPER_MODE = true;/.test(userscriptBody)) {
    throw new Error("Couldn't find meta section in dev version");
  }
  if(!/%VERSION%/.test(userscriptBody)) {
    throw new Error("Couldn't find %VERSION% in dev userscript");
  }
  userscriptBody = userscriptBody.replace('const IS_DEVELOPER_MODE = true;', 'const IS_DEVELOPER_MODE = false;');
  userscriptBody = userscriptBody.replace('%VERSION%', version);

  buildUserscript('snake-mod-loader-fbx.meta.js', 'snake-mod-loader-fbx.user.js', version, userscriptBody);
  buildUserscript('snake-mod-loader-intl.meta.js', 'snake-mod-loader-intl.user.js', version, userscriptBody);
  buildUserscript('snake-mod-loader-standard.meta.js', 'snake-mod-loader-standard.user.js', version, userscriptBody);

  processModInfoJson(version);
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

    //Set a constant in the userscript for the update url.
    //Note - it would be possible to get this from the meta, but we do it the lazy way instead and get from the file name.
    if(!/%UPDATE_URL%/.test(userscriptBody)) {
      throw new Error("Couldn't find %UPDATE_URL% in dev userscript");
    }
    let updateUrl = `https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/${userOutname}`
    userscriptBody = userscriptBody.replace('%UPDATE_URL%', updateUrl);

    data += '\n' + userscriptBody;

    //Write user file
    fs.writeFile(__dirname + '/../build/' + userOutname, data, function(err) {
      if (err) throw err;
      console.log('Successfully wrote to ../build/' + userOutname);
    });
  });
}

function processModInfoJson(version) {
  //Get the dev version of the userscript file that we've made edits to.
  let modInfoBody = fs.readFileSync(__dirname + '/mod-info.json', 'utf8');
  //Update version
  if(!/%VERSION%/.test(modInfoBody)) {
    throw new Error("Couldn't find %VERSION% in mod-info.json");
  }
  modInfoBody = modInfoBody.replace('%VERSION%', version);

  //Write json file
  fs.writeFile(__dirname + '/../build/mod-info.json', modInfoBody, function(err) {
    if (err) throw err;
    console.log('Successfully wrote to ../build/mod-info.json');
  });
}