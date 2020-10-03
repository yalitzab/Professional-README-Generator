const inquirer = require("inquirer");

// array of questions for user
const questions = [
        {
            type: 'input', 
            name: 'title',
            message: 'Enter your project title',
        },
        {
            type: 'input', 
            name: 'description',
            message: 'Provide a description of the project. (Required)',
        },
        {
            type: 'input', 
            name: 'installation',
            message: 'How to you install your project?',
        },
        {
            type: 'input', 
            name: 'usage',
            message: 'How do you run the project?',
        },
        {
            type: 'input', 
            name: 'Contributing',
            message: 'List the GitHub username(s), if any, of you collaborators.',
        },
        {
            type: 'input', 
            name: 'Tests',
            message: 'Is there a test included?',
        },
        {
            type: 'list', 
            name: 'license',
            message: ['Apache', 'MIT', 'Mozilla', 'Unlicense']
        },
        {
            type: 'input', 
            name: 'username',
            message: 'Enter your GitHub username.'
        },
        {
            type: 'input', 
            name: 'email',
            message: 'Enter your email address.'
        },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
