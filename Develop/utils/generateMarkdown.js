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
    
    function markdownGenerator(data) {     
      

      // // TODO: Create a function to generate markdown for README
      return
          `
      ${data.title}
      ${(renderLicenseBadge(data.license))}


      ## Table of Contents:
      1. [Description](#description) 
      2. [Installation](#installation)
      3. [Usage](#usage)
      4. [Contributing](#contributing)
      5. [Testing](#testing)
      6. [License](#license)
      7. [Questions](#questions)


      ## Description
      ${data.description}


      ## Installation
      ${data.installation}

      
      ## Usage
      ${data.usage}


      ## Contributing
      ${data.contributing}

      
      ## Testing
      ${data.testing}


      ## License
      ${renderLicenseBadge(data.license)}
      ${renderLicenseSection(data.license)}

      
      ## Questions
      Contact me here with any questions about this project:
      Github: ${data.github}
      Email: ${data.email}

      `;
    }

      module.exports = markdownGenerator

