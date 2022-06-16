const inquirer =require ('inquirer');
const FileCreate =require ('./src/File.Create');
const fs =require ('fs');


const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');



function MakingTeam() {
    inquirer
    .prompt([
    {   type:'list',
        message: 'Which employee will you be hiring?',
        name: "EmployeePrompt",
        choices: ["Manager", "Engineer", "Intern"]
    }
    ]).then(function(userInput) {
        switch(userInput.addingEmployeePrompt) {
            case "Manager": addingManager();
            break;

            case "Engineer": addingEngineer();
            break;

            case "Intern": addingIntern();
            break;


 
         // Making the html
             
            default:
                htmlBuilder();
        }
    });
};
