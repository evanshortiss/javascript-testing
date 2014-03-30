# JavaScript Testing Example (Browser and Node.js)

Using Node.js has the added benefit of allowing you to use similar libraries
on the client and server/cloud. In this instance we are using both
[Mocha](http://visionmedia.github.io/mocha/]) and
[Chai](http://chaijs.com/) to test some code.

This repository is a *really* simple example of how you can test client and
cloud code. The code included isn't meant to be amazing, just easy to pick up
and read.

## Perquisites (Required Software)
You will need Node.js, npm and bower installed.

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

#### Cloud
Run the following

```
mocha cloud/tests/
```
