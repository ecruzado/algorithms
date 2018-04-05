const exam = A => {
    const sortedList = A.sort();
    let minValue = 1;
    let i = 0;
    for (i = 0; i < sortedList.length - 1; i++ ){
        if(sortedList[i + 1] - sortedList[i] > 1) {
            minValue =  sortedList[i] + 1;
            break;
        }
    }
    if(i === sortedList.length - 1) {
        const maxValue = sortedList[sortedList.length - 1];
        minValue = maxValue < 0 ? 1 : maxValue + 1;
    }
    return minValue;
};
  
const testCases = [
    [1, 3, 6, 4, 1, 2],
    [1,2,3,5],
    [6,1,3,5],
    [1, 2, 3] ,
    [-1, -3],
];

for(let i=0; i < testCases.length; i++){
    console.log(exam(testCases[i]));  
}
  
  