var request = require('request'),
    fs = require('fs');

exports.httpGetRequest = function(url, callback) {
    // GET the given url
    request.get(url, function(err, res, body) {
        if (err) {
            // If an error occured catch it
            return callback(err, null);
        } else if (res && res.statusCode != 200) {
            // Unexpected status
            return callback('Failed with status code %s', res.statusCode.toString());
        } else {
            // We got a good response!
            return callback(null, body);
        }
    });
};

exports.writeTextToFileSync = function(text, filepath) {
    // Write a file syncrhonously
    fs.writeFileSync(filepath, text);
};

exports.writeTextToFile = function(text, filepath, callback) {
    // Write a file asyncrhonously
    fs.writeFile(filepath, text, callback);
};
