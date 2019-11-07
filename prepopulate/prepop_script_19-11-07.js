const moment = require('moment');

const appRoot = require('app-root-path'); // eslint-disable-line
const logger = require(`${appRoot}/libs/logger.js`)(__filename); // eslint-disable-line


module.exports = (app) => {

    const models = app.models.index.models;

    const Community = models.Community;
    const Note = models.Note;
    const Sensor = models.Sensor;
    const SensorData = models.SensorData;


    const id_community_eee = 'f33660a9-f389-4b16-95b1-8e8587fd87ce';
    const id_community_engg = '778ca5f7-9e89-4c3e-a75d-c6aead58a772';

    const id_sensor_1 = '4da292d9-a780-4cc1-9299-c0b100822ad5';
    const id_sensor_2 = '986ebfcf-2b7c-43e3-a54c-4270b39044f6';


    Community.create({
        id: id_community_eee,
        name: 'UP EEEI'
    })
    .then(() => {
        return Community.create({
            id: id_community_engg,
            name: "Melchor Hall"
        });
    })
    .catch((err) => {
        logger.error(JSON.stringify(err, null, 4));
    });

    // Community.bulkCreate([
    //     {
    //         id: id_community_eee,
    //         name: 'UP EEEI'
    //     },
    //     {
    //         id: id_community_engg,
    //         name: 'Melchor Hall'
    //     }
    // ], {
    //     validate: true,
    //     individualHooks: true
    // })
    // .then(() => {
    //     return Sensor.bulkCreate([
    //         {
    //             id: id_sensor_1,
    //             device_id: 'DEADBEEFFEED',
    //             community_id: id_community_eee
    //         },
    //         {
    //             id: id_sensor_2,
    //             device_id: 'DEADBEEFFEEA',
    //             community_id: id_community_engg
    //         }
    //     ], {
    //         validate: true,
    //         individualHooks: true

    //     });
    // })
    // .catch((err) => {
    //     logger.error(JSON.stringify(err, null, 4));
    // });


};
