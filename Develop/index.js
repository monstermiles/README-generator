// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path')
const generateMarkdown = require('./utils/generateMarkdown')


// ![github license](https://img.shields.io/badge/license-${license}-blue.svg)


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },

    {
        type: 'input',
        message: 'Enter a description of your project.',
        name: 'description'
    },

    {
        type: 'input',
        message: 'Enter the necessary steps for installing your project.',
        name: 'installation'
    },

    {
        type: 'input',
        message: 'Enter instructions for using this project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How can others contribute to this project?',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Describe how users can test this project.',
        name: 'testing'
    },
    {
        type: 'confirm',
        message: 'Does this project need a license?',
        name: 'licenseYN'
    },
    {
        type: 'list',
        message: 'Select a type of license.',
        name: 'license',
        choices: ['Apache 2.0', 'BSD', 'MIT', 'No License']
    },
    {
        type: 'input',
        message: 'Enter your Github username.',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter your email adress.',
        name: 'email'
    },

]






// TODO: Create a function to initialize app
inquirer.prompt(questions)
    .then((answer) => {
        console.log(answer);

        const fileName = `${answer.title}.md `

        // TODO: Create a function to write README file
            fs.writeFile(fileName, generateMarkdown(answer), (err) => {
                err ? console.log(err) : console.log('Success!')
            }
            )
        

    }
    )