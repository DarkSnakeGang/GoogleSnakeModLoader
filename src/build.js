const fs = require('fs').promises;
const path = require('path');

async function main() {
const userscriptBody = await fs.readFile(path.join('src', 'googlesnakemodloader-dev.user.js'), 'utf8');
const version = userscriptBody.match(/// @version +?([\d.]+)/)[1];

if (!/// ==UserScript==[^]*?// ==/UserScript==/.test(userscriptBody)) {
throw new Error("Couldn't find meta section in dev version");
}

const metaSection = userscriptBody.match(/// ==UserScript==([^]*?)// ==/UserScript==/)[1];
const updateUrl = https://github.com/DarkSnakeGang/GoogleSnakeModLoader/raw/main/build/${userOutname};

const userscript = const IS_DEVELOPER_MODE = false; ${metaSection.replace(/%VERSION%/g, version)} ${userscriptBody.replace(/%UPDATE_URL%/g, updateUrl)} ;

await Promise.all([
buildUserscript('snake-mod-loader-fbx.meta.js', 'snake-mod-loader-fbx.user.js', version, userscript),
buildUserscript('snake-mod-loader-intl.meta.js', 'snake-mod-loader-intl.user.js', version, userscript),
buildUserscript('snake-mod-loader-standard.meta.js', 'snake-mod-loader-standard.user.js', version, userscript),
processModInfoJson(version)
]);
}

async function buildUserscript(metaSrc, userOutname, version, userscriptBody) {
console.log(Processing: ${metaSrc});
const metaFile = await fs.readFile(path.join('src', metaSrc), 'utf8');
if (!/%VERSION%/.test(metaFile)) {
throw new Error(${metaSrc} is missing %VERSION% placeholder text);
}
const meta = metaFile.replace(/%VERSION%/g, version);
const user = ${meta}\n${userscriptBody};

await Promise.all([
fs.writeFile(path.join('build', metaSrc), meta),
fs.writeFile(path.join('build', userOutname), user)
]);

console.log(Successfully wrote to ../build/${metaSrc});
console.log(Successfully wrote to ../build/${userOutname});
}

async function processModInfoJson(version) {
const modInfoBody = await fs.readFile(path.join('src', 'mod-info.json'), 'utf8');
const modInfo = modInfoBody.replace(/%VERSION%/g, version);

await fs.writeFile(path.join('build', 'mod-info.json'), modInfo);

console.log(Successfully wrote to ../build/mod-info.json);
}

main()
.catch(err => console.error(err));
