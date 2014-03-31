var assert = require('assert'),
    path = require('path'),
    chai = require('chai'),
    fs = require('fs'),
    expect = chai.expect,
    myModule = require('../mymodules/mymodule.js');

var filepath = path.join(__dirname, 'test.txt');

// Delete the file created by tests
function removeTestTempFile(done) {
    fs.unlink(filepath, function(err) {
        done();
    });
}

// Clean up test environment
function cleanUp(done) {
    removeTestTempFile(done);
}

// After test are done, and also before, clean up!
after(cleanUp);
before(cleanUp);

var counter = 1;

describe('Test my modules', function() {

    // Do this before each test category runs
    beforeEach(function() {
        console.log('Running test %d', counter);
        counter++;
    });

    describe('#writeTextToFileSync function(text, filepath)', function() {
        it('Should write file to path specified', function() {
            myModule.writeTextToFileSync('Hello world', filepath);

            var exists = fs.existsSync(filepath);
            // Verify exists is true with standard node assertion
            assert.equal(true, exists, 'File should exist');
            // Verify exists is true with expect
            expect(exists).to.equal(true);
        });
    });

    describe('#httpGetRequest function', function() {
        this.timeout(10 * 1000);

        // What is 'done' here? It's injected by mocha and if used
        // flags this test as being async
        // done takes a single parameter and if this is non null then the test
        // is considered a failure
        it('Should successfully GET google.com', function(done) {
            myModule.httpGetRequest('http://www.google.com', function(err, res) {
                expect(err).to.equal(null);
                expect(res).to.be.a('string');
                done(err);
            });
        });

    });

    describe('#writeTextToFile function(text, filepath, callback)', function() {
        // Run cleanup again...for good measure!
        before(cleanUp);

        it('Should asynchronously write file to path specified', function(done) {
            myModule.writeTextToFile('Bye bye world...', filepath, function(err) {
                expect(err).to.equal(null);

                fs.exists(filepath, function(exists) {
                    assert.equal(exists, true);
                    done();
                });
            });
        });
    });

});
