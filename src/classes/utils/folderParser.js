const fs = require('fs');
const utils = require('util');
const readdir = utils.promisify(fs.readdir);
const stats = utils.promisify(fs.lstat);

const parseFolder = async _filePath => {
  let filePaths = [];

  const files = await readdir(_filePath);

  for(let i = 0; i < files.length; i++) {
    const filePath = `${_filePath}/${files[i]}`
    const fileStats = await stats(filePath);
    if(fileStats.isDirectory()) {
      const folderContents = await parseFolder(filePath);
      filePaths = filePaths.concat(folderContents);
      continue;
    }
    
    filePaths.push( filePath );
  }
  return filePaths;
}


module.exports = parseFolder;