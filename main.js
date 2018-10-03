function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

let john = new Person('John', 'Doe');
console.log(john)
let jane = new Person('Jane', 'Doe');

Person.prototype.fullName = function (){
    return this.firstName + ' ' + this.lastName;
};