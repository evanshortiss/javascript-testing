var request = require('request'),
    fs = require('fs');

exports.httpGetRequest = function(url, callback) {
    console.log('Getting url %s', url);

    request.get(url, function(err, res, body) {    
        if (err) {
            return callback(err, null);
        } else if (res && res.statusCode != 200) {
            return callback('Failed with status code %s', res.statusCode.toString());
        } else {
            return callback(null, body);
        }
    });
};

exports.writeTextToFileSync = function(text, file) {
    fs.writeFileSync(file, text);
};

exports.writeTextToFile = function(text, file, callback) {
    fs.writeFileSync(file, text, callback);
};
