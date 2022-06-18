const Manager = require('../lib/Manager');
// Manager Tests
test('get manager office number via method', () => {
    const 
    officeNumber= 9001;
    const
     newManager = new Manager(1, 'German', 'gohan0136@gmail.com', officeNumber);
   
    expect
    (newManager.getOfficeNumber()).toBe(officeNumber);
    expect
    
});