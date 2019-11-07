
const appRoot = require('app-root-path');
const logger = require(`${appRoot}/libs/logger.js`); // eslint-disable-line


module.exports = (sequelize, DataType) => {
    logger.debug('in SensorData model');
    const SensorData = sequelize.define('SensorData', {
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
        data: {
            type: DataType.DECIMAL,
            allowNull: false,
        },
        if_deleted: {
            type: DataType.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }, {
        underscored: true
    });


    SensorData.associate = (models) => {
        SensorData.belongsTo(models.Sensor, {
            foreignKey: 'sensor_id'
        });
    };

    return SensorData;

};
