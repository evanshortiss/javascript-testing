var assert = require('assert'),
    path = require('path'),
    chai = require('chai'),
    fs = require('fs'),
    expect = chai.expect,
    myModule = require('../mymodules/mymodule.js');

var filepath = path.join(__dirname, 'test.txt');

function removeTestTempFile(done) {
    fs.unlink(filepath, function(err) {
        done();
    });
}

function cleanUp(done) {
    console.log('RUNNING CLEANUP!');
    removeTestTempFile(done);
}

// After test are done, clean up!
after(cleanUp);
before(cleanUp);

var counter = 1;

describe('Test my modules', function() {

    beforeEach(function() {
        console.log('Running test %d', counter);
        counter++;
    });

    describe('#httpGetRequest function', function() {
        this.timeout(10 * 1000);

        it('Should successfully GET google.com', function(done) {
            myModule.httpGetRequest('http://www.google.com', function(err, res) {
                expect(err).to.equal(null);
                expect(res).to.be.a('string');
                done();
            });
        });

    });

    describe('#writeTextToFileSync function(text, filepath)', function() {
        it('Should write file to path specified', function() {
            myModule.writeTextToFileSync('Hello world', filepath);

            assert(fs.existsSync(filepath));
        });
    });

    describe('#writeTextToFile function(text, filepath, callback)', function() {
        before(cleanUp);

        it('Should asynchronously write file to path specified', function(done) {
            myModule.writeTextToFile('Bye bye world...', filepath, function(err) {
                expect(err).to.equal(null);

                fs.exists(filepath, function(exists) {
                    assert(exists);
                    done();
                });
            });
        });
    });

});
