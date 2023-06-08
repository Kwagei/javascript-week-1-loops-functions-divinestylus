let num1 = 15;
let num2 = 60;

let i = 1;
let divisor;
function findDivisor(){
    if(i <= Math.min(num1, num2)){
        if(num1%i === 0 && num2%i === 0){
            divisor = i;
        }
        i += 1;
        findDivisor();
    } 
    else {
    console.log(`${divisor} is the Greatest Common Divisor`);
    }     
}
findDivisor();