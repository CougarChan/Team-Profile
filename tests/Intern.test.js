const Intern = require('../lib/Intern'); 
// Intern Test
test('get intern school via method', () => {
    const school = 'University of Miami';
    const newIntern = new Intern(1, 'Cancer', 'gohan0136@gmail.com', school);
    expect(newIntern.getSchool()).toBe(school)
});