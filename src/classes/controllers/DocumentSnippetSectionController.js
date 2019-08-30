/**
 * (c) 2019 MacLaurin Group
 */

const DocumentSnippetSection = require('../models/DocumentSnippetSection');
const DocumentSnippetSectionView = require('../views/DocumentSnippetSectionView') 

const documentSnippetSectionView = new DocumentSnippetSectionView()
module.exports = class DocumentSnippetSectionController {
  constructor(_sectionData) {
    this.model = new DocumentSnippetSection();
    this.view = documentSnippetSectionView;

    this.model.setTitle(_sectionData.title);
    this.model.setBody(_sectionData.body);
  }

  getHTML() {
    return this.view.getHTML( this.getSectionData() )
  }

  getSectionData() {
    return {
      title: this.model.getTitle(),
      body: this.model.getBody(),
      id: this.model.getId()
    }
  }

}