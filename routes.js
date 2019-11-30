'use strict';

module.exports = function(app) {
    var controller = require('./controller');

    app.route('/')
        .get(controller.index);

    app.route('/soil')
        .get(controller.getAllSoilData);

    app.route('/soil/search-by-date/:date')
        .get(controller.findSoilByDate);

    app.route('/soil/search-by-id/:id')
        .get(controller.findSoilById);
    
    app.route('/soil')
        .post(controller.createSoilData);

    app.route('/soil')
        .put(controller.updateSoilData);

    app.route('/soil')
        .delete(controller.deleteSoilData);
};