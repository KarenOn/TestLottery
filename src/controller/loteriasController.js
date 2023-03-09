const LoteriaModel = require('../model/loteriasModel');

const getLoterias = async (req, res) => {
    try {
        let dataLoterias = [];

        for(let i = 0; i < 27; i++){
            let loteria1 = await LoteriaModel.loteria1(i);
            let loteria2 = await LoteriaModel.loteria2(i);
            let loteria3 = await LoteriaModel.loteria3(i);

            let isEqual;
            isEqual = JSON.stringify(loteria1) === JSON.stringify(loteria2) && JSON.stringify(loteria1) === JSON.stringify(loteria3);

            loteria1.isEqual = isEqual;

            dataLoterias.push(loteria1);
        }   
        res.send(dataLoterias);
    } catch(e){
        console.log('error', e);
    }
}

module.exports = {
    getLoterias
}