class Parent
{
    constructor()
    {
        this.fatherName = "Jhon Son";
    }
}
class Child extends Parent
{
    constructor(name)
    {
        super();
        this.name = name;
    }

    getFullName()
    {
        return "Name : "+this.name+", Father Name : "+this.fatherName;
    }
}

const baby = new Child("Jhon");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2.getFullName());