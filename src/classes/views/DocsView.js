/**
 * (c) 2019 MacLaurin Group
 */

const mgdocsJS = require('../../lib/mgdocsJS');
const fs = require('fs');
const path = require('path');
const dropins = require('../utils/dropins');

module.exports = class MgDocsView {
  getDocumentHeader(_config) {
    const stylePath = path.join(__dirname, '..', '..', 'css', 'style.css');
    let html = `<html><head><title>${_config.pageConfig.header.title}</title>`;

    if (_config.jqueryFile && _config.jqueryFile.length > 0) {
      let jqueryPath = _config.jqueryFile;

      if (_config.jqueryFile.charAt(0) !== '/') {
        jqueryPath = process.cwd() + '/' + jqueryPath;
      }

      html += `<script src="${jqueryPath}"></script>`;
    } else {
      html += `
        <script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
        crossorigin="anonymous"></script>
      `;
    }

    html += `<script>${mgdocsJS}</script><style>${fs.readFileSync(stylePath)}</style>`

    if (_config.jsFiles) {
      _config.jsFiles.forEach(jsFile => {
        html += `<script src="${jsFile}"></script>`;
      });
    }

    if (_config.cssFiles) {
      _config.cssFiles.forEach(cssFile => {
        html += `<link rel="stylesheet" href="${cssFile}">`;
      });
    }

    html += `</head><body>`;

    return html;
  }

  getDocumentFooter() {
    return `</body></html>`;
  }

  getHeaderBarHTML(_config, _data) {
    let html = `
      <div class="mg-docs-header">
        <a href="${_config.pageConfig.logo.url}" target="_blank"><img src="${_config.pageConfig.logo.src}"></a>`;

    html += `</div>`;

    return html;
  }

  getOpenDocsBodyContainer() {
    return `<div class="mg-docs-body">`;
  }

  getCloseDocsBodyContainer() {
    return `</div>`;
  }

  getHeadingTextHTML(_options) {
    return `
      <section id="top">
        <h1>${_options.header.heading}</h1><div>${dropins.process(_options.header.introText)}</div>
      </section>
    `;
  }

  getTagsFilterHTML(_tags) {
    let html = `<div class="mg-docs-badge-row-filters">Filters:`;

    Object.values(_tags).forEach(tag => {
      html += `<div class="mg-docs-badge-filter">${tag}</div>`;
    });

    html += `</div>`;

    return html;
  }
}