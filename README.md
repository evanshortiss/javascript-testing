# JavaScript Testing Example (Browser and Node.js)

Using Node.js has the added benefit of allowing you to use similar libraries
on the client and server/cloud. In this instance we are using both
[Mocha](http://visionmedia.github.io/mocha/]) and
[Chai](http://chaijs.com/) to test some code.

This repository is a *really* simple example of how you can test client and
cloud code. The code included should be easy to pick up
and read.

## Perquisites (Required Software)
You will need [Node.js](http://nodejs.org/), [npm](https://www.npmjs.org/) and [bower](http://bower.io/) installed.

Install Node.js and npm by going to [nodejs.org](http://nodejs.org/)

To install bower, first ensure Node.js and npm are installed, then open a
terminal and type ```npm install -g bower```. You may need sudo permissions.

## Setup
Once you have the perquisites sorted you need to install the project
dependencies.

#### Client Dependencies

```
cd client/default
bower install
```

#### Node.js Dependencies

```
cd cloud
npm install
```

## Running Tests
If you have completed the previous steps then we're good to go!

#### Client
Open __client/default/index.html__

The __client/default__ folder structure was generated using the terminal
command ```mocha init```, simple as that! I added the bower.json for managing
dependencies as it's very handy and simply requires typing ```bower init```.
Adding chai was as simple as typing ```bower install chai --save-dev```.

#### Cloud
Run the following:

```
mocha cloud/tests/
```

Simply install
