class Employee {
    constructor(NAME, ID, EMAIL) {    this.name = NAME;     this.id = ID;    this.email =EMAIL;  } 
    getName() {
        return this.name;  }
    getId() {
        return this.id;   }
    getEmail() {
        return this.email;    }
    getRole() {
        return 'Employee';   }
  }
  module.exports = Employee;