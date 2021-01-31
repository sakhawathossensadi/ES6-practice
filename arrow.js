// function doubleIt(num)
// {
//     return num*2;
// }

//arrow function (single parameter)
const doubleIt = num => num*2;

const result = doubleIt(50);
console.log(result);

//arrow function (multiple parameter)
const add = (x,y) => x+y;

const sum = add(10,15);
console.log(sum);

//arrow function (no parameter)
const hello = () => "Hello World";

const feedBack = hello();
console.log(feedBack);

//arrow function
const calculation = (x,y,a,b) => {
    const sum = x+y;
    const mul = a*b;
    const total = sum+mul;
    return total;
}

const res = calculation(10,10,2,2);
console.log(res);


