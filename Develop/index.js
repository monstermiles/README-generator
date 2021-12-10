const inquirer = require('inquirer')


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
        type:'input',
        message: 'Enter the necessary steps for installing your project.',
        name: 'instalation'
    },
    
    {
        type:'input',
        message: 'Enter instructions for using this project.',
        name: 'usage'
    },
    {
        type:'input',
        message:'How can others contribute to this project?',
        name: 'contributing'
    },
    {
        type:'input',
        message:'Describe how users can test this project.',
        name: 'testing'
    },
    {
        type:'input',
        message:'Enter your Github username.',
        name: 'github'
    },
    {
        type:'input',
        message:'Enter your email adress.',
        name: 'email'
    },
    {
        type:'confirm',
        message:'Does this project need a license?',
        name: 'lisence'
    },
    // {
    //     type:'list',
    //     message:'Select a type of license.',
    //     name: 'lisenceType',
    //     choices:''
    // },
]

inquirer.prompt(questions)
.then((answer) => {
    console.log(answer)
}
)



