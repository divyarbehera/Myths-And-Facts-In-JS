/*
	Contents:
	1.Module Design Pattern (#Module_Pattern)
	2.Prototype Design Pattern (#Prototype_Pattern)
*/

//#Module_Pattern//
//-----------------------------------------------------------------------------------------------//
//-----------------------------------------------------------------------------------------------//

//#Prototype_Pattern//
//-----------------------------------------------------------------------------------------------//
function Animal({
    type = ""
}) {
    this.Type = "mamal";
}
Animal.prototype.getAnimalType = function() {
    return this.Type;
}

function Human({}) {
    this.HandCount = 2;
    this.LegCount = 2;
    this.HeadCount = 1;
    Animal.call(this, {
        type: "mamal"
    });
}
Human.prototype = Object.create(Animal.prototype);
Human.prototype.constructor = Human;

function Person({
    firstName = "",
    middleName = "",
    lastName = "",
    age = 0
}) {
    this.FirstName = firstName;
    this.MiddleName = middleName;
    this.LastName = lastName;
    this.Age = age;
    Human.call(this, {});
}
Person.prototype.getFullName = function() {
    return `${this.FirstName} ${this.MiddleName}${this.MiddleName?" ":""}${this.LastName}`
}

Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;

function Employee({
    employeeId = 0,
    firstName = "",
    middleName = "",
    lastName = "",
    age = 0
}) {
    Object.defineProperties(this, {
        'EmployeeId': {
            value: employeeId,
            writable: false,
            enumerable: true,
            configurable: true
        },
    });
    Person.call(this, {
        firstName,
        middleName,
        lastName,
        age
    });
}

Employee.prototype.getEmployeeAge = 
function() {
    return this.EmployeeId;
};

/*DONT DEFINE PROTOTYPE OVERRIDE AFTER DEFINEING PROTOTYPE PROPERTIES (LIKE getEmployeeAge)*/
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getEmployeeId = 
function() {
    return this.EmployeeId;
};
var emp = new Employee({employeeId:10, firstName:"Dexter", lastName:"Morgan", age:29});
emp.getEmployeeId(); //10
emp.getEmployeeAge(); //ERROR
//-----------------------------------------------------------------------------------------------//