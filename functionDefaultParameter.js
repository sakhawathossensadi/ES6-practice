function add(num1,num2)
{
    num1 = num1 || 0;
    if(num2 == undefined)
    {
        num2 = 0;
    }
    return num1+num2;
}

const result = add(10,10);
console.log(result);

const result1 = add(10);
console.log(result1);

const result2 = add();
console.log(result2);

//ES6 function parameter default value

function add(num1=0,num2=0)
{
    return num1+num2;
}

const sum = add(20,20);
console.log(sum);

const sum1 = add(20);
console.log(sum1);

const sum2 = add();
console.log(sum2);