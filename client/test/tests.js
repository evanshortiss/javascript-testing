(function() {
    var expect = window.chai.expect;

    describe('MyCtrl', function() {
        it('Should create a person', function() {
            var person = new Person('Dave');
        });

        it('#getName', function() {
            var person = new Person('Evan');

            expect(person.getName()).to.equal('Evan');
        });

        it('#setName', function() {
            var person = new Person('Evan');
            expect(person.getName()).to.equal('Evan');

            person.setName('Oleksiy');
            expect(person.getName()).to.equal('Oleksiy');
        });

        it('Test an async function #getRemoteName', function(done) {
            var person = new Person('Evan');
            person.getRemoteName(function(err, name) {
                expect(err).to.equal(null);
                expect(name).to.equal('Remote Name');

                done();
            });
        });

    });
})()
