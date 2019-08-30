# mg-docs
A simple node package that runs through html files and produces a documentation file.

## Installation
In the root folder of your project with your `package.json` run:
```
npm install mg-docs --save-dev
```

## Configuration
There is a sample `config.json` file in `src` folder which has parameters you can set up to customize the end documentation page.

Params that should be in the `config.json` are as follows:

Parameter | Required | Description | Example
------------ | --------- | ------ | ------
`outputFile` | true | specifies a file path for the index file to be created | `"./path/to/index.html"`
`inputDir` | true | specifies a directory path for the tool to look through | `"./path/to/folder"`
`includeTags` | false | an array of tags to include, if empty all snippets will be included | `["dev", "admin"]`
`excludeTags` | false | an array of tags to exclude | `["dev", "admin"]`
`pageConfig.logo.src` | false | specifies a file source for the logo | `"./path/to/img.jpg"`
`pageConfig.logo.url` | false | specifies a url for the target link of the logo | `"http://maclaurin.group"`
`pageConfig.header.title` | false | title for the page |
`pageConfig.header.heading` | false | heading text for the page | 
`pageConfig.header.introText` | false | heading paragraph for the page |
`pageConfig.header.jsFiles` | false | an array of file paths pointing to js files to be included | `["./jsfile.js", "./jsfile2.js"]`
`pageConfig.header.cssFiles` | false | an array of file paths pointing to css files to be included | `["./cssfile.css"]`

## To build

In order to build the html file with the documentation you will need to configure the `config.json` shown above. If you are using a custom configuration file, you will need to specify the new path in the `package.json` like so:

```
...
    "scripts": {
        "build": "node src/index.js your/new/path.json
    }
...
```

then you can run: 
```
npm run build
```


## Documentation
An example of a documentation snippet in an html file:
```
<mg:docs>
	<mg:tag>Admin</mg:tag>
	<mg:tag>Developer</mg:tag>

	<mg:title>mgdocs</mg:title>
	<mg:body>
    snippet body

    <mg:section>
			<mg:sectiontitle>mgdocs subsection</mg:sectiontitle>
			<mg:sectionbody>
	    	this is a subsection body
			</mg:sectionbody>
    </mg:section>

    <mg:section>
			<mg:sectiontitle>Subsection B</mg:sectiontitle>
			<mg:sectionbody>
	    	this is a subsection body
			</mg:sectionbody>
    </mg:section>

	</mg:body>
</mg:docs>
```

will produce:
![mg-docs demo](/images/mg-docs-demo.JPG)
