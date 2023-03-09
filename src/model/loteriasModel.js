const axios = require('axios');
const cheerio = require('cheerio');

const loteriaUrl1 = 'https://loteriasdominicanas.com/';
const loteriaUrl2 = 'https://loterias.do/';
const loteriaUrl3 = 'https://loteriadominicanas.com/';

const loteria1 = async (i) => {
    let { data } = await axios.get(loteriaUrl1);
    let $ = cheerio.load(data);

    console.log('i', i)

    let company = $(`.game-block:eq(${i}) .company-title a`);
    let game = $(`.game-block:eq(${i}) > div .game-title`);
    let lengthscore = $(`.game-block:eq(${i}) .game-scores .score`).length;

    let result = {
        // company: $(company).text().trim(),
        game: $(game).text().trim(),
        score: []
    }
    for(let j = 0; j < lengthscore; j++){
        result.score.push($(`.game-block:eq(${i}) > div .game-scores > .score:eq(${j})`).text().trim());
    }

    return result;
}

const loteria2 = async (i) => {
    let { data } = await axios.get(loteriaUrl2);
    let $ = cheerio.load(data);

    let company = $(`.su-row:eq(${i}) > .num-loteria`).parent();
    let game = $(`.su-row:eq(${i}) > .num-loteria > .entry-content h3`);
    let lengthscore = $(`.su-row:eq(${i}) .bolo-sorteo`).length;

    let result = {
        // company: $(company).text().trim(),
        game:  $(game).text().trim(),
        score: []
    }

    for(let j = 0; j < lengthscore; j++){
        result.score.push($(`.su-row:eq(${i}) .bolo-sorteo:eq(${j})`).text().trim());
    }

    return result;
}

const loteria3 = async (i) => {
    let { data } = await axios.get(loteriaUrl3);
    let $ = cheerio.load(data);

    let company = $(`.panel-heading:eq(${i}) > a`).parent();
    let game = $(`.lottery_result:eq(${i}) .title a`);
    let lengthscore = $(`.lottery_result:eq(${i}) .c`).length;

    let result = {
        // company: $(company).text().trim(),
        game:  $(game).text().trim(),
        score: []
    }

    for(let j = 0; j < lengthscore; j++){
        result.score.push($(`.lottery_result:eq(${i}) .c:eq(${j})`).text().trim());
    }

    return result;
}

module.exports = {
    loteria1,
    loteria2,
    loteria3
}