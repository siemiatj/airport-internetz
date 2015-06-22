var fs = require('fs');
assert = require('assert');

describe('airports.json', function () {
    describe('jsonlint', function () {
        it('should return no errors if the json file is valid', function () {
            JSON.parse(fs.readFileSync('airports.json', 'utf8'));
        });
    })
});
