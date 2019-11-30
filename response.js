'use strict';

exports.ok = function(result, response) {
    var data = {
        'status': 200,
        'message': "success",
        'result': result
    };
    response.json(data);
    response.end();
};

exports.err = function(error, response) {
    var data = {
        'status': 400,
        'message': "Bad Request",
        'error': error
    };
    response.json(data);
    response.end();
}