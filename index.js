const express = require('express');
const app = express();

require('./src/router/loteriasRouter')(app);

app.listen(3023, () => {
    console.log("Running on 3023");
});