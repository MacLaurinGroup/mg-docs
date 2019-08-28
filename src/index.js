/**
 * MG-DOCS - Maclaurin Group
 */

const fs = require('fs');
const utils = require('util');
const readdir = utils.promisify(fs.readdir);
const config = require('./config.json');

const FileClass = require('./fileClass');
const FileBuilder = require('./fileBuilder');


let inputFilePath = config.inputDir;
let outputFilePath = config.outputFile;
const fileInsts = [];


const buildDocs = async () => {
    console.log('Building docs...');

    const files = await readdir(inputFilePath);
    files.forEach(fileName => {
        if(fileName.includes('.html')) {
            fileInsts.push(new FileClass(inputFilePath, fileName));
        }
    });
    
    const fileBuilder = new FileBuilder(fileInsts, outputFilePath);

    await fileBuilder.setDocs();
    await fileBuilder.buildHTMLFile();

    console.log('\x1b[36m%s\x1b[0m', 'Docs have successfully built!');
}

buildDocs();
