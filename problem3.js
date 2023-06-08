let arr = [1,5,30,56,3,48,67,44,7,32];

function highestAndAverage() {
    let average = 0;
    let highest = 0;
    for (let i = 0; i < arr.length; i++) {
        average += arr[i];
        if (arr[i] > highest) {
            highest = arr[i];
        }
    }
    average = average / arr.length;
    console.log(`${highest} is the highest`);
    console.log(`${average} is the average`);
}

highestAndAverage();