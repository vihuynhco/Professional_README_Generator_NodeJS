// TODO: Include packages needed for this application
    //npm init-y
    //npm i inquirer@8.2.4
        //To create folder fs.mkdir(path.join ())
    const inquirer= require('inquirer')
    const fs= require('fs');
    const generateMarkdown = require('./utils/generateMarkdown')

        //inquirer
    // .prompt([ {type:, message, name,}, {type:, message:, name:,}]) .then((response) =>

// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
        message:'What is the title to your project?',
        name:'title',
    },
    {
        type: 'input',
        message:'Provide a desciption of your project',
        name:'description',
    },
    {
        type: 'input',
        message:'Provide description to install your project for the Installation section.',
        name:'installation',
    },
    {
        type: 'input',
        message:'Provide usage information for the Usage section.',
        name:'usage',
    },
    {
        type: 'input',
        message:'Provide details on how others can contribute to your project for the Contributing section.',
        name:'contributing',
    },
    {
        type: 'input',
        message:'Provide test inststructions.',
        name:'test',
    },
    {
        type: 'list',
        message: "What license should your project have",
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: "Provide your email address for questions about your project",
        name: 'questions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app  this is how you CREATE
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log(response)
        const markDownInfo =generateMarkdown(response);
     
        writeToFile('generated.md',markDownInfo)
    })

}

// Function call to initialize app TO RUN
init();


///if ==== same user appends to final 