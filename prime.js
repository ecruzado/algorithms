const getPrimeNumbers = limit => {
    const primes = [];
    for (let m=2; m < Math.sqrt(limit); m++){
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

const exam = A => {
    const primes = getPrimeNumbers(A);
    const factors = primes.filter(prime => A % prime === 0);
    const largest = factors.reduce((acc, item) => item > acc ? item : acc );
    return largest;
};


const testCases = [
    600851475143,
    // 13195,
    // 600851475143,
];

const asserts = [
    [1, 2, 3, 5, 7],
];

for(let i=0; i < testCases.length; i++){
    console.log(exam(testCases[i]));  
}
  
  