## Requirements

You'll need to have the following items installed before continuing.

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`

## Quickstart for Dev

Install the dependencies

```bash
git clone git@github.com:zurb/foundation-libsass-template.git
npm install && bower install
```

While you're working on your project, run the following in separate tabs:

`grunt`
`sass --watch scss:css`
`python -m SimpleHTTPServer 8000`

And you're set!

## Directory Structure

  * `scss/_settings.scss`: Foundation configuration settings go in here
  * `scss/app.scss`: Application styles go here

## Compile Templates

Run `grunt handlebars`. This will output the templates to the `handlebars-templates.js`. Be sure to add handlebars-templates.js to the production version of the site!

## Notes to Self

Running a simple python server `python -m SimpleHTTPServer 8000` in the repo will get everything up and running even though the URLS are live in app.js.
