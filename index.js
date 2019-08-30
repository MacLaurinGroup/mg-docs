/**
 * (c) 2019 MacLaurin Group
 */

const FileClassController = require('./src/classes/controllers/FileClassController');
const configValidator = require('./src/classes/utils/configValidator');
const fileBuilder = require('./src/classes/utils/fileBuilder');
const folderParser = require('./src/classes/utils/folderParser');
const getArguments = require('./src/classes/utils/getArguments');

let processArguments;
if(process.argv.length > 2) {
  processArguments = getArguments(process.argv);
} else {
  throw new Error('Too few arguments!');
}

let config;
try {
  config = require(processArguments.configFile);
} catch(e) {
  throw new Error('Config file not found!');
}

configValidator(config);

const fileInsts = [];

const buildDocs = async () => {
  console.log('Building docs...');

  const files = await folderParser(processArguments.inputDir);

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
  await fileBuilder.buildFile(filesWithSnippets, config, processArguments.outputFile);

  console.log('\x1b[36m%s\x1b[0m', 'Docs have successfully built!');
}

buildDocs();
