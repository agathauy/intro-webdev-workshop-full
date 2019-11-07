
const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line


module.exports = (sequelize, DataType) => {
    logger.debug('in SensorData model');
    const Community = sequelize.define('Community', {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataType.TEXT,
            allowNull: false
        },
        if_deleted: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        underscored: true
    });

    Community.associate = (models) => {
        Community.hasMany(models.Sensor, {
            foreignKey: 'community_id'
        });
    };


    return Community;

};
