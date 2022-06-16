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
        choices: ["Engineer", "Manager", "Intern"]
    }
    ]).then(function(userInput) {
        switch(userInput.addingEmployeePrompt) {
            case "Engineer": addingEngineer();
            break;

            case "Manager": addingManager();
            break;

            case "Intern": addingIntern();
            break;


 
         // Making the html
             
            default:
                htmlBuilder();
        }
    });
};

function addingEngineer() {
    inquirer
    .prompt([
        {   type: 'input',
            name: 'EngineersName',
            message: "What would you like for your engineers name to be?"
        },
        {
            type: 'input',
            name: 'EngineerId',
            message: "What is the engineer's ID?"
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message: "What is the engineer's email address?"
        },
        {
            type: 'input',
            name: 'EngineerGithub',
            message: "What is the engineer's GitHub username?"
        }
    ])


    .then(answers => {
        const AddEngineer = new Engineer(
            answers.EngineersName, answers.EngineerId, answers.EngineerEmail, answers.EngineerGithub
        )
        console.log('Engineer added!!')
    })
};

// create array of questions for adding manager
function addingManager() {
    inquirer
    .prompt([
        {
    type: 'input',
    name: 'NAME',
    message: "What is the manager's full name?" 
    },
    {
    type: 'input',
    name: 'ID',
    message: "What is the manager's Id?"
    },
    {
    type: 'input',
    name: 'Email',
    message: "What is the manager's Email address?"
    }, 
    {
    type: 'input',
    name: 'OFFICENUMBER',
    message: "What is the manager's Office Number?",
    }
])
.then(answers => {
    const AddManager = new Manager(
        answers.NAME, answers.ID, answers.Email, answers.OFFICENUMBER
    )
    console.log('Manager added!!');
})
};
