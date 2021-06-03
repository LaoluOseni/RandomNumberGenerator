//Random integers around a specific range


//function to draw a number between 1 and maxValue
function generateRandomNumber(maxValue, minValue=1) {
    let min = Number(minValue);
    let max = Number(maxValue);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function numberCount(numAmount, maxValue, draws) {
    let drawedSets = [];
    for (let i=1; i<=draws; i++) {
        let numbers = [];
        for (y=1; y<=numAmount; y++) {
            let random = generateRandomNumber(maxValue);
            numbers.push(random);
        }
        drawedSets.push(numbers);
    }
    return drawedSets;
}



//let vas = generateRandomNumber(2, 17);
//console.log(vas);

module.exports =  {
    generateRandomNumber,
    numberCount
};