/**
 * MG-DOCS - Maclaurin Group
 */

const fs = require('fs');
const utils = require('util');
const readdir = utils.promisify(fs.readdir);
const stat = utils.promisify(fs.stat);

const FileClassController = require('./classes/controllers/FileClassController');
const configValidator = require('./classes/utils/configValidator');
const fileBuilder = require('./classes/utils/fileBuilder');

if(process.argv.length < 2) {
  throw new Error('Incorrect number of arguments! Expected 1');
}

// const configPath = process.argv[2];
const configPath = '/home/richmonddev/mg/mg-docs/config.json';
let config;
try {
  config = require(configPath);
} catch(e) {
  throw new Error('Config file not found!');
}
configValidator(config);

const configPath = process.argv[2];
let config;

try {
  config = require(configPath);
} catch(e) {
  throw new Error('Config file not found!');
}

configValidator(config);

let inputFilePath = config.inputDir;
let outputFilePath = config.outputFile;
const fileInsts = [];

const buildDocs = async () => {
  console.log('Building docs...');

  const files = await readdir(inputFilePath);
  files.forEach(fileName => {
    if(fileName.includes('.html')) {
      fileInsts.push(new FileClassController(fileName, inputFilePath));
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
