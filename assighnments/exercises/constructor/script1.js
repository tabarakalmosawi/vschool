var Employee = function (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    this.printEmployeeForm = function () {
        console.log(" Name " + this.name + " job title " + this.jobTitle + " salary " + this.salary + " status " + this.status);

    }
}
employees = [];
var ahmed = new Employee("Ahmed", "rov", 500, "any time");
employees.push(ahmed)
var ali = new Employee("ali", "teacher", 1000, "part time");
employees.push(ali)
var hasan = new Employee("hasan", "engineer", 3000, "4 day");
employees.push(hasan)
var hussain = new Employee("hussain", "barber", 500, "full time")
employees.push(hussain)
for (i = 0; i < employees.length; i++) {
    employees[i].printEmployeeForm()
}
