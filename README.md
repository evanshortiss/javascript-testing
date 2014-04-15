# JavaScript Testing Example (Browser and Node.js)

Using Node.js has the added benefit of allowing you to use similar libraries
on the client and server/cloud. In this instance we are using both
[Mocha](http://visionmedia.github.io/mocha/]) and
[Chai](http://chaijs.com/) to test some code.

This repository is a *really* simple example of how you can test client and
cloud code. The code included should be easy to pick up
and read.

## Perquisites (Required Software)
You will need [Node.js](http://nodejs.org/), [npm](https://www.npmjs.org/), [Grunt](http://gruntjs.com/) and [bower](http://bower.io/) installed.

Install Node.js and npm by going to the [download](http://nodejs.org/download/)
page of [nodejs.org](http://nodejs.org/).

To install bower, first ensure Node.js and npm are installed, then open a
terminal and type ```npm install -g bower``` followed by ```npm install -g grunt-cli```. You may need sudo permissions.

## Setup
Once you have the perquisites sorted you need to install the project
dependencies.

#### Client Dependencies

##### Option #1: Karma
```
cd client/default
npm install .
```

##### Option #2: Bower
bower install

#### Node.js Dependencies

```
cd cloud
npm install .
```

## Running Tests
If you have completed the previous steps then we're good to go!

#### Client
The client will use Karma to run tests automatically in the predefined
browsers in __karma.conf.js__ or use a standard index.html file to run tests
in the browser used to open this file.

##### Karma
```bash
grunt test
```

Karma allows us to automate testing across a range of browsers. Alternatively
you can open index.html which has manually included the required libraries and
will run the __same__ mocha tests as Karma did. Awesome!

##### Standard index.html (with Bower for dependencies)
Using the same framework (mocha in this case!) we can have a HTML file
dedicated to testing as seen in the index.html in the project. Simply open this
file to try it out.

#### Cloud
Run the following:

```
mocha cloud/tests/
```
