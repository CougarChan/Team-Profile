const inquirer =require ('inquirer');
const fs =require ('fs');
const WriteFile = require('./src/GeneratedHtml')

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
        choices: ["Engineer", "Manager", "Intern","Finished"]
    }

]).then(function(userInput) {
          if (userInput.EmployeePrompt) {
            addingEngineer();
        }

         else if (userInput.EmployeePrompt) {
            addingManager();
        }

       else if (userInput.EmployeePrompt) {
            addingIntern();
        }

        else if (userInput.choices === 'Finished'){

            let html = renderPage(html)
            console.log('Thank you!');
            WriteFile(html);
        }

        })
        

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





function addingIntern() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'InternName',
            message: "What is the intern's name?"
        },
        {
            type: 'input',
            name: 'InternID',
            message: "What is the intern's id?"
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: "What is the intern's email address?"
        },
        {
            type: 'input',
            name: 'InternsSchool',
            message: "What school does the intern attend?"
        }
    ])
    .then(answers => {
        const newIntern = new Intern(
            answers.InternName, answers.InternID, answers.InternEmail, answers.InternSchool
        )
        console.log('Intern added!!')
    })
};



MakingTeam();