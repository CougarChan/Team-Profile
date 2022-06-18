const Engineer = require('../lib/Engineer');

test('get engineer github via method', () => {
    const github = 'CougarChan';
    const NeEngineer= new Engineer
    (1, 'German', 'deadpool0136@gmail.com', github);
    
    expect(NeEngineer.getGithub()).toBe(github);
});