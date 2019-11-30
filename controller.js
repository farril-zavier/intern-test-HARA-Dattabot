'use strict';

var response = require('./response');
var connection = require('./connection');

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res);
};

exports.getAllSoilData = function(req, res) {
    connection.query('SELECT * FROM soil', function(error, results, fields) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok(results, res);
        }
    });
};

exports.findSoilByDate = function(req, res) {
    
    var date = req.params.date;

    connection.query('SELECT * FROM soil WHERE date = ?',
    [ date ], 
    function(error, results, fields) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok(results, res);
        }
    });
};

exports.findSoilById = function(req, res) {
    
    var id = req.params.id;

    connection.query('SELECT * FROM soil WHERE id = ?',
    [ id ], 
    function(error, results, fields) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok(results, res);
        }
    });
};

exports.createSoilData = function(req, res) {

    var date = req.body.date;
    var time = req.body.time;
    var temp = req.body.temp;
    var ph = req.body.ph;
    var moisture = req.body.moisture;

    connection.query('INSERT INTO soil (date, time, temp, ph, moisture) VALUES (?,?,?,?,?)',
    [ date, time, temp, ph, moisture ], 
    function(error, results, fields) {
        if (error) {
            response.err(error, res);
        } else {
            response.ok("Berhasil menambahkan data soil!", res);
        }
    });
}

exports.updateSoilData = function(req, res) {
    
    var id = req.body.id;
    var date = req.body.date;
    var time = req.body.time;
    var temp = req.body.temp;
    var ph = req.body.ph;
    var moisture = req.body.moisture;

    connection.query('UPDATE soil SET date = ?, time = ?, temp = ?, ph = ?, moisture = ? WHERE id = ?',
    [ date, time, temp, ph, moisture, id ], 
    function(error, results, fields) {
        if (results.affectedRows === 0) {
            response.err({
                message: "0 rows affected: Invalid ID in request body",
                sql: "UPDATE soil SET date = " + date
                + ", time = " + time
                + ", temp = " + temp
                + ", ph = " + ph
                + ", moisture = " + moisture
                + " WHERE id = " + id
            }, res);
            return;
        }
        if (error) {
            response.err(error, res);
        } else {
            response.ok("Berhasil merubah data soil!", res);
        }
    });
};

exports.deleteSoilData = function(req, res) {
    
    var id = req.body.id;

    connection.query('DELETE FROM soil WHERE id = ?',
    [ id ], 
    function(error, results, fields) {
        if (results.affectedRows === 0) {
            response.err({
                message: "0 rows affected: Invalid ID in request body",
                sql: "DELETE FROM soil WHERE id = " + id
            }, res);
            return;
        }
        if (error) {
            response.err(error, res);
        } else {
            response.ok("Berhasil menghapus data soil!", res);
        }
    });
};