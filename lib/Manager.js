const Employee = require ('./Employee')
class Manager extends Employee {
    constructor(NAME,ID,Email,OFFICENUMBER) {
        super (NAME,ID,Email);
        this.number = OFFICENUMBER;
    }
    getGithub() {
            return this.number;
    }
    GettingTheRole(){
        return 'Manager';

    }
    
 

}

module.exports =Manager;