require('chai').should();
var checkNested = require('../');

describe('Check Nested', function () {
    it('should handle dot notation', function (done) {
        var testObj = {
            a: {
                b: {
                    c: true
                }
            }
        };

        checkNested(testObj, 'a.b.c').should.be.true;
        done();
    });


    it('should handle square bracket notation', function (done) {
        var testObj = {
            a: {
                b: {
                    c: true
                }
            }
        };

        checkNested(testObj, 'a["b"]["c"]').should.be.true;
        done();
    });

    it('should handle mixed notation', function (done) {
        var testObj = {
            a: {
                b: {
                    c: true
                }
            }
        };

        checkNested(testObj, 'a.b["c"]').should.be.true;
        done();
    });

    it.skip('should handle spaces', function (done) {
        var testObj = {
            a: {
                b: {
                    'c at': true
                }
            }
        };

        checkNested(testObj, 'a.b["c at"]').should.be.true;
        done();
    });
});
