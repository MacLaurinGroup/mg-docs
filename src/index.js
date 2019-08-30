/**
 * (c) 2019 MacLaurin Group
 */

const fs = require('fs');
const utils = require('util');

const FileClassController = require('./classes/controllers/FileClassController');
const configValidator = require('./classes/utils/configValidator');
const fileBuilder = require('./classes/utils/fileBuilder');
const folderParser = require('./classes/utils/folderParser');

if(process.argv.length < 2) {
  throw new Error('Incorrect number of arguments! Expected 1');
}

const configPath = process.argv[2];

try {
  config = require(configPath);
} catch(e) {
  throw new Error('Config file not found!');
}

configValidator(config);

let inputFilePath = config.inputDir;
const fileInsts = [];

const buildDocs = async () => {
  console.log('Building docs...');

  const files = await folderParser(inputFilePath);
  
  files.forEach(filePath => {
    if(filePath.includes('.html')) {
      fileInsts.push(new FileClassController(filePath));
    }
  });

  // parse each file to get docs
  for(let i = 0; i < fileInsts.length; i ++) {
    await fileInsts[i].parseFile();
  }

  const filesWithSnippets = fileInsts.filter(fileInst => fileInst.hasSnippets());
  delete fileInsts;

  // generate html
  await fileBuilder.buildFile(filesWithSnippets, config);

  console.log('\x1b[36m%s\x1b[0m', 'Docs have successfully built!');
}

buildDocs();
