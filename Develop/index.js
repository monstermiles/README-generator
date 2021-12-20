// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
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

        // // TODO: Create a function to generate markdown for README
        const markdownContent =
            `
        ${answer.title}
        ${(renderLicenseBadge(answer.license))}


        ## Table of Contents:
        1. [Description](#description) 
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [Contributing](#contributing)
        5. [Testing](#testing)
        6. [License](#license)
        7. [Questions](#questions)


        ## Description
        ${answer.description}


        ## Installation
        ${answer.installation}

        
        ## Usage
        ${answer.usage}


        ## Contributing
        ${answer.contributing}

        
        ## Testing
        ${answer.testing}


        ## License
        ${renderLicenseBadge(answer.license)}
        ${renderLicenseSection(answer.license)}

        
        ## Questions
        Contact me here with any questions about this project:
        Github: ${answer.github}
        Email: ${answer.email}

        `;


        console.log(markdownContent)

       
        const license = answer.license
       
       
       
       // // TODO: Create a function that returns the license link
        // // If there is no license, return an empty string
        function renderLicenseLink(license) {
            if (license === 'Apache 2.0') {
                return '(https://opensource.org/licenses/Apache-2.0)'
            } else if (license === 'BSD') { 
                return '(https://opensource.org/licenses/BSD-3-Clause)'
                
            }else if (license === 'MIT') { 
                return '(https://opensource.org/licenses/MIT)'
                
            }else if (license === 'No License') { 
                return ''
            }
        }

       
       
       
        // TODO: Create a function that returns a license badge based on which license is passed in
        // If there is no license, return an empty string

        function renderLicenseBadge(license) {

            if (license !== 'None') {
                return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
            }
            return '';


        }

        // // TODO: Create a function that returns the license section of README
        // // If there is no license, return an empty string
        function renderLicenseSection(license) {
            if (license === 'No Licence') {
                return ''
            } else {
                return `This project is under the ${license} license: ${renderLicenseLink(license)}`
            }
        }


        // TODO: Create a function to write README file
            fs.writeFile(fileName, markdownContent, (err) => {
                err ? console.log(err) : console.log('Success!')
            }
            )
        

    }
    )