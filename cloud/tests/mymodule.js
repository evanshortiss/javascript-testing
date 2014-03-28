var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    myModule = require('../mymodules/mymodule.js');

describe('Test my modules', function() {

    describe('#httpGetRequest', function() {
        it('Should successfully GET google.com', function() {
            myModule.httpGetRequest('http://www.google.com', function(err, res) {
                expect(err).to.equal(null);
                expect(res).to.be.a('string');
            });
        });
    });

});
