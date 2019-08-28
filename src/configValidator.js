module.exports = (config) => {
    if(!config.outputFile || config.outputFile.length === 0) {
        throw new Error('Missing output file in config!');
    }

    if(!config.inputDir || config.inputDir.length === 0) {
        throw new Error('Missing input folder in config!');
    }
}