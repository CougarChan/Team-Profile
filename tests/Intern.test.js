const Intern = require('../lib/Intern'); 
// Intern Test
test('get intern school via method', () => {
   
    // Const for the school
    const school = 'University of Miami';
    const newIntern = new Intern(1, 'Cancer', 'gohan0136@gmail.com', school);
    
    //this is for the test and will expect this to be what goes throught the test
    
    expect(newIntern.getSchool()).toBe(school)
});
