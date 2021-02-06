const person = {name:"Jack William",age:17,job:"Enginner",address:"Dhanmondi",phone:"0177",friends:["Tom Hanks","Tom Cruise","Robert Downy"]}

const {name,phone,address} = person;

console.log(name);
console.log(phone);
console.log(address);
console.log();

// const name = person.name;
// const phone = person.phone;

// console.log(name);
// console.log(phone);

// console.log(person.name);
// console.log(person.phone);

const names = ["Tom","John","Robert","Hank"];
const [first,second,...remainsName]=names;
console.log(first);
console.log(second);
console.log(remainsName);
console.log();

const ComplexObject = {
    name : "Sam",
    info : {
        phone : "01307",
        email : "sam@gmail.com"
    }
}

const {email} = ComplexObject.info;
console.log(email);
