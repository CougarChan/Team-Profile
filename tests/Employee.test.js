const Employee = require('../lib/Employee')


// Tests that are required for the acceptance criteria for the project
test('get employee name via method', () => {
    const name = 'German';
    const newEmployee = new Employee(name, 1, 'elcougarde@gmail.com');    expect(newEmployee.getName()).toBe(name);
});

test('get employee id via method', () => {
    const id = 1;const newEmployee = new Employee('German', id, 'gohan11321@gmail.com');
    expect(newEmployee.getId()).toBe(id);
});
// This will receive the employee's email
test('get employee email via method', () => {const email = 'gohan@gmail.com';
    const newEmployee = new Employee(1, 'German', email);
    expect(newEmployee.getEmail()).toBe(email);
});

//This will return the employee
test('get role returns employee', () => {    const newEmployee = new Employee();
    expect(newEmployee.getRole()).toBe('Employee');
});
