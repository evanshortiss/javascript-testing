// Simple person class
function Person(name) {
    this.name = name;
}

Person.prototype.setName = function(name) {
    this.name = name;
};

Person.prototype.getName = function() {
    return this.name;
};

// Emulate a call to a server that is asynchronous
Person.prototype.getRemoteName = function(callback) {
    setTimeout(function() {
        callback(null, 'Remote Name');
    }, 100);
};
