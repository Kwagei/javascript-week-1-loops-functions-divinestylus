// Using methods
let arr = [1,2,3,4,5,6,7,8,9,10];

function reverseList(list){
    list = list.reverse();
    console.log(list);
}

reverseList(arr);


// Not using methods
let array = [1,2,3,4,5,6,7,8,9,10];

function reverseList(list){
    list = [];
    for (let i = array.length; i > 0; i--) {
        list += i;
    }
    console.log(list);
}

reverseList(array);