const DocumentSnippet = require('../models/DocumentSnippet');
const DocumentSnippetView = require('../views/DocumentSnippetView') ;
const DocumentSnippetSectionController = require('./DocumentSnippetSectionController');

const documentSnippetView = new DocumentSnippetView()
module.exports = class DocumentSnippetController {
  constructor(_snippetData) {
    this.model = new DocumentSnippet();
    this.view = documentSnippetView;

    this.model.setTitle(_snippetData.title);
    this.model.setBody(_snippetData.body);

    _snippetData.sections.forEach(section => {
      this.model.addSection(new DocumentSnippetSectionController(section));
    });

    _snippetData.tags.forEach(tag => {
      this.model.addTag(tag);
    })
  }

  hasTag(_tag) {
    return this.model.hasTag(_tag);
  }

  getHTML() {
    return this.view.getHTML(this.getSnippetData());
  }

  getSnippetData() {
    return {
      title: this.model.getTitle(),
      body: this.model.getBody(),
      sections: this.model.getSections(),
      tags: this.model.getTags()
    };
  }


}