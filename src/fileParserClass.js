const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

class FileParser {

  async _getRawFileText(_filePath) {
    return await readFile(_filePath, 'utf-8')
  }

  async getDocsData(_filePath) {
    const rawText = await this._getRawFileText(_filePath);
    return this.parseData(rawText);
  }
  
  parseData(_data) {
    const dataBlock = this._getDataBlock(_data);
    const title = this._getTitle(dataBlock);
    const body = this._getBody(dataBlock);
    const sections = this._getSections(dataBlock);
    return {title, body, sections}
  }

  _getDataBlock(_data) {
    const dataBlocks = _data.match(/<mg:docs>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:docs>/gm);

    if(dataBlocks) {
      return dataBlocks[0].substring(9, dataBlocks[0].length - 10);
    }

    return '';
  }

  _getTitle(_data) {
    const titleTag = _data.match(/<mg:title>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:title>/gm);
    if(titleTag) {
      return titleTag[0].substring(10, titleTag[0].length - 11);
    }

    return '';
  }

  _getBody(_data) {
    const bodyTag = _data.match(/<mg:body>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:body>/gm);

    if(bodyTag) {
      const body = bodyTag[0].replace(/<mg:section>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:section>/gm, '');
      return body.substring(9, body.length - 10);
    }

    return '';
  }

  _getSections(_data) {
    const sections = _data.match(/\<mg:section\>((?!\<\/mg:section\>).|\s)*\<\/mg:section\>/gm);
    if(sections) {
      const sectionsArr = [];

      sections.forEach(section => {
        const sectionObj = {}
        let header = section.match(/<mg:sectionhead>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:sectionhead>/gm);
        let body = section.match(/<mg:sectionbody>[A-Za-z0-9;.,!"£$%^&*()-+=\/\\<>: \n]+<\/mg:sectionbody>/gm);

        if(header) {
          sectionObj.header = header[0].substring(16, header[0].length - 17);
        }

        if(body) {
          sectionObj.body = body[0].substring(16, body[0].length - 17);
        }
        sectionsArr.push(sectionObj);
      })
      return sectionsArr
    }

    return [];
  }
}

module.exports = new FileParser()