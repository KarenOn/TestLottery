module.exports = app => {
    const loterias = require('../controller/loteriasController');

    app.get('/getLoterias', loterias.getLoterias);
}