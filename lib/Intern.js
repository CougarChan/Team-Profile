const Employee = require ('./Employee')
class Intern extends Employee {
    constructor(InternName,InternID,InternEmail,InternsSchool) {
        super (InternName,InternID,InternEmail);
        this.school =InternsSchool;
    }
    getGithub() {
            return this.school;
    }
    GettingTheRole(){
        return 'Intern';

    }
    
 

}

module.exports =Intern;