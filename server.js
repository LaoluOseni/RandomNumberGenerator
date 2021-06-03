const express = require('express');
const rng = require('./handlers/rng');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        const queryObject = req.query;
        console.log(queryObject);
        const { numAmount, draws, maxValue } = queryObject;
        // console.log(req.query); //min and max
        let random = rng.generateRandomNumber(maxValue);
        let results = rng.numberCount(numAmount, maxValue, draws);
        console.log(results);
        //console.log(random);
        res.send(
            results
        );
    } else {
        res.render('index');
    }
})

app.get('/?', (req, res) => {
    const queryObject = req.query;
    const { min, max } = queryObject;
    console.log(req.query); //min and max
    randomNumber = rng(min, max);
    console.log(randomNumber);
    res.send('Hello');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});