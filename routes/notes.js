const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line


module.exports = (app) => {


    
    const note_post = app.controllers.notes_no_view.note_post;

    const controller = Object.assign(
        {},

        note_post
    );

    app.route('/note')
        .post(controller.note_post);


};