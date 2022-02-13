const sumOfSquares = (params) =>{
    let sum = 0;
    for(let i=0; i<params.length; i++){
        sum += params[i] * params[i]
    }
    console.log(sum);
}


const fizzBuzz = (params) =>{
    for(let i=0; i<params.length; i++){
        if(params[i] % 15 == 0) console.log('FizzBuzz', params[i])
        else if(params[i] % 3 == 0) console.log('Fizz', params[i])
        else if(params[i] % 5 == 0) console.log('Buzz', params[i])
    }
}

const numbers = [2,4, 3, 5, 10, 15, 25, 30];

fizzBuzz(numbers);
sumOfSquares(numbers)