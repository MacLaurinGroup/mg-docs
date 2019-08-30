module.exports = processArguments => {
  const args = {};
  const commandLinePath = process.cwd();
  for(let i = 0; i < processArguments.length; i++) {
    switch(processArguments[i]) {
      case '--input-dir':
        args.inputDir = processArguments[i + 1].trim();
        break;
      case '--config-file':
        args.configFile = processArguments[i + 1].trim();
        break;
      case '--output-file':
        args.outputFile = processArguments[i + 1].trim();
        break;
    }
  }

  if(!args.inputDir) {
    throw new Error('Input directory is missing!');
  }

  if(!args.configFile) {
    throw new Error('Config file is missing!');
  }

  if(!args.outputFile) {
    throw new Error('Output file is missing!');
  }

  if(args.inputDir.charAt(0) !== '/') {
    args.inputDir = commandLinePath + '/' + args.inputDir;
  }

  if(args.configFile.charAt(0) !== '/') {
    args.configFile = commandLinePath + '/' + args.configFile;
  }

  if(args.configFile.charAt(0) !== '/') {
    args.configFile = commandLinePath + '/' + args.configFile;
  }

  return args;
}