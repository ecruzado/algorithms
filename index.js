const getPrimeNumbers = limit => {
    const primes = [];
    for (let m=2; m < limit; m++){
        let hasFactors = primes.some(prime => m % prime === 0);
        if(!hasFactors) {
            for (let n=2; n < m; n++){
                if(m%n === 0) {
                    hasFactors = true;
                    break;
                }
            }
        }
        if(!hasFactors) primes.push(m);
            
    }
    return primes;
};

const isPalindrome = number => {
    const numberAsString = `${number}`;
    let result = true;
    for(let i=0 ; i < numberAsString.length/2; i++){
        if(numberAsString[i] !== numberAsString[numberAsString.length - i - 1]) {
            result = false;
            break;
        }
    }
    return result;
};

const getFactors = (primes, number) => {
    let a = number;
    const factors = []
    let i = 0;
    while(a > 1){
        while(a % primes[i] === 0){
            factors.push(primes[i]);
            a = a/primes[i];
        }
        i++;
    }
    return factors;
};

const has2FactorsOfThreeDigits = factors => {

};

const exam = A => {
    let max = A;
    const primes = getPrimeNumbers(A);
    // const factors = getFactors(primes, 997799);
    // console.log(factors);

    let control = 0;
    while (max > 100*100) {
        if(isPalindrome(max)) {
            const factors = getFactors(primes, max);
            control++;
            if(control === 300) break;
        }
        max--;
    }
    // return isPalindrome(A);
    // return factors
};


const testCases = [
    999*999,
    // 13195,
    // 600851475143,
];

const asserts = [
    [1, 2, 3, 5, 7],
];

for(let i=0; i < testCases.length; i++){
    console.log(exam(testCases[i]));  
}
  
  