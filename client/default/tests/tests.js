(function() {
    if(!expect) {
        // We're not running with Karma if this occurs
        var expect = window.chai.expect;
    }

    describe('Person', function() {
        it('Should create a person', function() {
            var person = new Person('Dave');
        });

        it('#getName should return the person\'s name', function() {
            var person = new Person('Evan');

            expect(person.getName()).to.equal('Evan');
        });

        it('#setName should set name to a new value', function() {
            var person = new Person('Evan');
            expect(person.getName()).to.equal('Evan');

            person.setName('Oleksiy');
            expect(person.getName()).to.equal('Oleksiy');
        });

        it('Test an asynchronous function #getRemoteName', function(done) {
            var person = new Person('Evan');
            person.getRemoteName(function(err, name) {
                expect(err).to.equal(null);
                expect(name).to.equal('Remote Name');

                done();
            });
        });

    });
})()
