const express = require('express');
const rng = require('./handlers/rng');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    if (Object.keys(req.query).length !== 0) {
        const queryObject = req.query;
        console.log(queryObject);
        const { maxValue, numLength, draws, } = queryObject;
        //console.log(req.query); //min and max
        let newFinal = rng.randomLength(numLength, maxValue, draws);
        console.log(newFinal);
        let results = rng.numberCount(numLength, maxValue, draws);
        //console.log(results); 
        //console.log(random);
        res.send(
            newFinal
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