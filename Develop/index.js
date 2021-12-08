// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('.')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        prompt: 'What is the title of your project?'
    },

    {
        type: 'input',
        name: 'description',
        prompt: 'Enter a description of your project.'
    },
    
    {
        type:'input',
        name: 'installation',
        prompt: 'Enter the necessary steps for installing your project.'
    },
    
    {
        type:'input',
        name:'usage',
        prompt:'Enter instructions for using this project.'
    },
    {
        type:'input',
        name:'contributing',
        prompt:'How can others contribute to this project?',
    },
    {
        type:'input',
        name:'testing',
        prompt:'Describe how users can test this project.'
    },
    {
        type:'input',
        name:'github',
        prompt:'Enter your Github username.',
    },
    {
        type:'input',
        name:'email',
        prompt:'Enter your email adress.',
    },
    {
        type:'confirm',
        name:'license',
        prompt:'Does this project need a license?'
    },
    {
        type:'list',
        name:'licenseType',
        prompt:'Select a type of license.',
        choices:''
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('$`fileName`).md'
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
