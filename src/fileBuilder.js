const template = require('./templates/template')
const fs = require('fs');
const util = require('util');
const config = require('../config.json')

const writeFile = util.promisify(fs.writeFile)

module.exports = class FileBuilder {
    
    constructor(files, outputFilePath) {
        this.files = files;
        this.outputFilePath = outputFilePath;
    }

    async setDocs() {
        for(let i = 0; i < this.files.length; i++) { 
            await this.files[i].setDocsData();
        }
    }

    async buildHTMLFile() {
        const html = this.buildHTMLString();
        await writeFile(this.outputFilePath, html)
    }

    buildHTMLString() {
        let html = '';
        html = this.buildHeader(html);
        html = this.buildHeading(html);
        html = this.openSideBarContainer(html);
        html = this.buildToC(html);
        html = this.closeSideBarContainer(html);
        html = this.openDocsContainer(html);
        html = this.buildSummaryText(html);
        this.files.forEach(fileInst => {
            html += fileInst.getHTMLBlock();
        });
        html = this.closeDocsContainer(html);

        html = this.buildFooter(html);

        return html;
    }

    buildHeader(html) {
        return html += template.header.html;
    }

    buildFooter(html) {
        return html += template.footer.html;
    }

    buildToC(html) {
        const options = {
            items: this.files,
        }

        return html += template.contentsTable.getHTML(options)
    }

    openDocsContainer(html){
        return html += `<div class="${config.pageBlock.containerClass}">`;
    }

    closeDocsContainer(html){
        return html += `</div>`;
    }

    openSideBarContainer(html) {
        return html += `<div class="${config.sideBar.containerClass}">`;
    }

    closeSideBarContainer(html) {
        return html += `</div>`;
    }

    buildHeading(html) {
        const optionsHTML = this.getSaveOptions()

        return html += `
            <div class="${config.sideBar.headerClass}">
                <a href="${config.logo.url}" target="_blank">
                    <img src="${config.logo.src}" />
                </a>
                <div class="mg-docs-search">
                    <div class="">
                       <input class="mg-evt-docs-search-input" name="" type="search" placeholder="Search" autocomplete="off">
                    </div>
                    <div class="mg-docs-search-results hide">${optionsHTML}</div>
                </div>
            </div>`;
    }

    buildSummaryText(html) {
        return html += `
            <h1>${config.page.heading}</h1>
            <p>${config.page.introText}</p>
        `
    }

    getSaveOptions() {
        let html = ``;
        this.files.forEach(fileInst => {
            if(fileInst.title.length > 0) {
                let title = fileInst.title;
                if(fileInst.title.length > 60) {
                    title = title.substr(0, 59) + '...'
                }
                html += `
                <a href="#${fileInst.fileName}"><li class="mg-evt-docs-search-result hide"data-title="${fileInst.title.toLowerCase()}">${title}</li></a>
                `
            }
        })

        return html;
    }
}

