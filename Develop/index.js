// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
        name: 'lisence'
    },
    // {
    //     type:'list',
    //     message:'Select a type of license.',
    //     name: 'lisenceType',
    //     choices:''
    // },
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
        // const markdownContent = generateMarkdown(answer)
        // console.log(markdownContent)
        
        const markdownContent =  
        `
        ${answer.title}


        ## Table of Contents:
        1. [Description](#description) 
        2. [Installation](#installation)
        3. [Usage](#usage)
        4. [Contributing](#contributing)
        5. [Testing](#testing)
        6. [Questions](#questions)


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


        ## Lisence 
        ${answer.lisence}

        
        ## Questions
        Contact me here with any questions about this project.
        ${answer.github}
        ${answer.email}

        `;
        
        
        console.log(markdownContent)
        
        // TODO: Create a function to write README file
        fs.writeFile(fileName, markdownContent, (err) => {
            err ? console.log(err) : console.log('Success!')
        }
        )

    }
    )



