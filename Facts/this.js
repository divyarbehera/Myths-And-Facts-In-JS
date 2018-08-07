
/*Person class*/
function Person({firstName = "", middleName = "", lastName = "", age = 0}){
	this.FirstName = firstName;
	this.MiddleName = middleName;
	this.LastName = lastName;
	this.Age = age;
}
Person.prototype.getFullName = function(){return `${this.FirstName} ${this.MiddleName}${this.MiddleName?" ":""}${this.LastName}`}
/*End*/

/*Employee class*/
function Employee({employeeId = 0, firstName = "", middleName = "", lastName = "", age = 0}){
	Object.defineProperties(this,
	{
		'EmployeeId': {
            value: employeeId,
            writable: false,
			enumerable: true,
			configurable: true
      },
	});
	this.EmployeeId = employeeId;
	Person.call(this, {firstName, middleName, lastName, age});
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getEmployeeId = () => this.EmployeeId;
/*End*/

var emp = new Employee({employeeId:10, firstName:"Dexter", lastName:"Morgan", age:29});
emp.getFullName();//Dexter Morgan
emp.getEmployeeId();//undefined