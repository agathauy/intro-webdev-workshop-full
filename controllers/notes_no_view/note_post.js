const validator = require('validator');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line

const moment = require('moment');

module.exports = (app) => {
    const controller = {};

    controller.note_post = (req, res, next) => {
        const models = app.models.index.models;
        const Note = models.Note;

        if (!('message' in req.body) ||
            !('title')) {
                const err = new Error();
                err.status = 400;
                err.message = "You are missing either the message or title field needed to make this request.";
                return next(err);
        }

        const title = req.body.title;
        const message = req.body.message;
        const timestamp = moment.utc().toISOString();

        Note.create({
            title: title,
            message: message,
            timestamp: timestamp
        })
        .then((result) => {
            const response = {
                message: "Success",
                type:"note-post",
                data: result
            };
            return res.status(201).json(response);
        })
        .catch((error) => {

            // Not an error manually created as API response
            if (!('status' in error)) {
                const err = new Error();
                if (typeof error === 'object') {
                    err.stack = error.stack;
                    err.message = error.message;
                } else {
                    err.stack = error;
                }
                err.status = 500;
                return next(err);
            }
            return next(error);
        });


    }



    return controller;

}