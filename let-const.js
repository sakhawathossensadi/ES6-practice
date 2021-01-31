const name = "Sakhawat Hossen";
//name  = "Sakhawat Hossen Sadi";
console.log(name);

const numbers = [11,22,33];
numbers[0]=111;
numbers.push(44);
//numbers = ["sadi","sakhawat"];
console.log(numbers);

const details = {name:"sakhawat",id:7852};
details.name="Sakhawat Hossen";
details.address = "Nageshwari";
console.log(details);

let value = 20;
value=40;
console.log(value);



let sum=0
for(var i=1;i<5;i++) // scope of i ('i' is available outside of for loop because i is declared as var)
{
    sum = sum+i;
}
console.log(i);

// let sum=0
// for(let i=1;i<5;i++) // scope of i ('i' is not available outside of for loop because i is declared as let)
// {
//     sum = sum+i;
// }
// console.log(i);