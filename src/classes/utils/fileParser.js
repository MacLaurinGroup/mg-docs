/**
 * (c) 2019 MacLaurin Group
 */

const util = require('util');
const fs = require('fs');

const readFile = util.promisify(fs.readFile);

class FileParser {
  
  async parseFileData(_filePath) {
    const rawText = await this._getRawFileText(_filePath);
    return this.parseFile(rawText);
  }

  async _getRawFileText(_filePath) {
    return await readFile(_filePath, 'utf-8')
  }
  
  parseFile(_rawText) {
    const snippets = this._getSnippets(_rawText);
    const snippetsArr = [];
    snippets.forEach(snippet => {
      const snippetObj = {};
      snippetObj.title = this._getTitle(snippet);
      snippetObj.body = this._getBody(snippet);
      snippetObj.sections = this._getSections(snippet);
      snippetObj.tags = this._getTags(snippet);
      snippetObj.order = this._getOrder(snippet);
      snippetObj.id = this._getId(snippet);

      snippetsArr.push(snippetObj);
    })
    return snippetsArr;
  }

  _getSnippets(_rawText) {
    const snippets = _rawText.match(/\<mg\-docs\>((?!\<\/mg\-docs\>).|\s)*\<\/mg\-docs\>/gm);

    if(snippets) {
      const snippetsArr = [];
      snippets.forEach(snippet => {
        snippetsArr.push(snippet.substring(9, snippet.length - 10).trim());
      });
      return snippetsArr;
    }

    return [];
  }

  _getTitle(_data) {
    const titleTag = _data.match(/<mg\-title>[A-Za-z0-9;.,!"'£$%^&*()\-+=\/\\<>: \n]+<\/mg\-title>/gm);
    if(titleTag) {
      return titleTag[0].substring(10, titleTag[0].length - 11).trim();
    }

    return '';
  }

  _getBody(_data) {
    const bodyTag = _data.match(/<mg\-body>[A-Za-z0-9;.,!"'£$%^&*()\-+=\/\\<>: \n\t]+<\/mg\-body>/gm);

    if(bodyTag) {
      const body = bodyTag[0].replace(/<mg\-section>[A-Za-z0-9;.,!"'£$%^&*()\-+=\/\\<>: \n\t]+<\/mg\-section>/gm, '');
      return body.substring(9, body.length - 10).trim();
    }

    return '';
  }

  _getSections(_data) {
    const sections = _data.match(/\<mg\-section\>((?!\<\/mg\-section\>).|\s)*\<\/mg\-section\>/gm);
    if(sections) {
      const sectionsArr = [];

      sections.forEach(section => {
        const sectionObj = {}
        let title = section.match(/<mg\-sectiontitle>[A-Za-z0-9;.,!"'£$%^&*()\-+=\/\\<>: \n\t]+<\/mg\-sectiontitle>/gm);
        let body = section.match(/<mg\-sectionbody>[A-Za-z0-9;.,!"£$%'^&*()\-+=\/\\<>: \n\t]+<\/mg\-sectionbody>/gm);

        if(title) {
          sectionObj.title = title[0].substring(17, title[0].length - 18).trim();
        }

        if(body) {
          sectionObj.body = body[0].substring(16, body[0].length - 17).trim();
        }
        sectionsArr.push(sectionObj);
      })
      return sectionsArr
    }

    return [];
  }

  _getTags(_data) {
    const tags = _data.match(/\<mg\-tag\>((?!\<\/mg\-tag\>).|\s)*\<\/mg\-tag\>/gm);
    if(tags) {
      const tagsArr = [];
      tags.forEach(tag => {
        tagsArr.push(tag.substring(8, tag.length - 9).trim());
      });

      return tagsArr;
    }

    return [];
  }

  _getOrder(_data) {
    const order = _data.match(/\<mg\-order\>((?!\<\/mg\-order\>).|\s)*\<\/mg\-order\>/gm);

    if(order) {
      return Number(order[0].substring(10, order[0].length - 11).trim());
    }

    return 9999999999;
  }

  _getId(_data) {
    const id = _data.match(/\<mg\-id\>((?!\<\/mg\-id\>).|\s)*\<\/mg\-id\>/gm);
    
    if(id) {
      return id[0].substring(7, id[0].length - 8).trim();
    }

    return String(Math.round( Math.random() * 10000 ));
  }
}

module.exports = new FileParser()
