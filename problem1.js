function areEvenNumbers() {
    let arr = [];
    for (let i = 1; i <= 100; i++) {
        if (i % 2 === 0) {
            arr += i;
        }
    }
    console.log(arr);
}

areEvenNumbers();