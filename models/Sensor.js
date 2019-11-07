
const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line


module.exports = (sequelize, DataType) => {
    logger.debug('in Sensor model');
    const Sensor = sequelize.define('Sensor', {
        id: {
            type: DataType.UUID,
            defaultValue: DataType.UUIDV4,
            primaryKey: true
        },
        device_id: {
            type: DataType.TEXT,
            defaultValue: DataType.TEXT,
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

    Sensor.associate = (models) => {
        Sensor.hasMany(models.SensorData, {
            foreignKey: 'sensor_id'
        });

        Sensor.belongsTo(models.Community, {
            foreignKey: 'community_id'
        });
    };



    return Sensor;

};
