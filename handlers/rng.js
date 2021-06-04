//Random integers around a specific range


//function to draw a number between 1 and maxValue
function generateRandomNumber(maxValue, minValue=1) {
    let min = Number(minValue);
    let max = Number(maxValue);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Function to specify length of random number generated with check
function pickRandom(finalNumber, maxValue, numLength) {
    //let finalNumber = '';
    let random = generateRandomNumber(maxValue);
    finalNumber += random;
    if (finalNumber.length < Number(numLength)) {
        pickRandom(finalNumber, maxValue, numLength);
    } else {
        while (finalNumber.length > Number(numLength)) {
            finalNumber = finalNumber.slice(0, -1);
        }
        return finalNumber;
    }
    return finalNumber;
}

//function to check if length matches Unused
function lengthCheck(number, numLength) {
    if (number.length < numLength) {
        return false;
    } else {
        while (number.length > Number(numLength)) {
            number = number.slice(0, -1);
        }
        return number;
    }
}


//Used function to pick
function randomLength(numLength, maxValue, draws) {
    let numberSets = [];
    for (let i=1; i<=draws; i++) {
        let finalNumber = '';
        let ranNum =  pickRandom(finalNumber, maxValue, numLength);
        numberSets.push(Number(ranNum));             
    }
    return numberSets;
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
    numberCount,
    randomLength
};