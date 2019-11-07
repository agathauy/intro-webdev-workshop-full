
const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line


module.exports = (sequelize, DataType) => {
    logger.debug('in Note model');
    const Note = sequelize.define('Note', {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true
        },
        timestamp: {
            type: DataType.DATE,
            defaultValue: null,
            allowNull: true,
        },
        message: {
            type: DataType.TEXT,
            allowNull: true,
            defaultValue: null
        },
        title: {
            type: DataType.TEXT,
            allowNull: true,
            defaultValue: null
        },
        if_deleted: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        underscored: true
    });

    return Note;

};
