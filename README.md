# mg-docs
A tool that runs through html files and produces a documentation file.

## Installation
In the root folder of your project with your `package.json` run:
```
npm install mg-docs
```

## Setup
There is a config file in `src` folder which has parameters you can set up to customize the end documentation page.

The following params are necessary for the program to run.

Parameter | Description
------------ | ---------
outputFile | should point to a html file where the documentation will be created
inputDir | should point to the folder with html files for the program to run through

## To build

In order to build the html file with the documentation you will need to configure the `config.json` shown above, then you can run: 
```
npm run build
```


## Documentation
An example of a documentation snippet in an html file:
```
<mg:docs>
  <mg:title>Docs header</mg:title>
  <mg:body>
    docs body
    <mg:section>
      <mg:sectionhead>Subsection A</mg:sectionhead>
      <mg:sectionbody>
	this is subsection A body
      </mg:sectionbody>
    </mg:section>
    <mg:section>
      <mg:sectionhead>Subsection B</mg:sectionhead>
      <mg:sectionbody>
	this is subsection B body
      </mg:sectionbody>
    </mg:section>
  </mg:body>
</mg:docs>
```

will produce:
![mg-docs demo](/images/mg-docs-demo.jpg)
