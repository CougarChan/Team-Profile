const Employee = require ('./Employee')
class Engineer extends Employee {
    constructor(EngineerName,EngineerID,EngineerEmail,EngineerGithub) {
        super (EngineerName,EngineerID,EngineerEmail);
        this.Github = EngineerGithub
    }
    getGithub() {
            return this.Github;
    }
    GettingTheRole(){
        return 'Engineer';

    }
    
 

}

module.exports =Engineer;