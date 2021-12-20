// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// const license = answer.license

// function renderLicenseBadge(license) {

//   if (license !== 'None') {
//     return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
//   }
//   return '';


// }
// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }



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

module.exports = renderLicenseBadge();
module.exports = renderLicenseLink();
module.exports = renderLicenseSection();
