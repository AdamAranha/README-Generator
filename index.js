// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

var licenseList = ['MIT', 'Apache v2', 'GNU GPL v3']

// TODO: Create an array of questions for user input
async function askUser() {
    const questions = await inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of your project?'

            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description for README'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Enter a description for README'
            },
            {
                type: 'input',
                name: 'installIns',
                message: 'Enter install instructions for the application'
            },
            {
                type: 'input',
                name: 'usageInfo',
                message: 'Enter Usage Information for the application'
            },
            {
                type: 'input',
                name: 'contributionGuidelines',
                message: 'Please enter the contribution guidelines for your application'
            },
            {
                type: 'input',
                name: 'testGuide',
                message: 'Please enter a guidelines for testing the application'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please select the license(s) for this appliation',
                choices: licenseList
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter your GitHub username',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please your email'
            }
        ]
    )
    const license = badgeCreator(questions)
    const output = md(questions, license)
    console.log(license)
    console.log(md(questions, license))

    writeToFile(output)
    // const temp = md(questions, badgeCreator)
    // console.log(temp)

}

const badgeCreator = (questions) => {
    if (questions.license == 'MIT') {
        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    } else if (questions.license == 'Apache v2') {
        return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (questions.license == 'GNU GPL v3') {
        return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    } else return ''
}

const md = (questions, license) =>
    `
# ${questions.title}

${license}

### Table of Contents  
[Description](#Description)\\
[Install Instructions](#Install-Instructions)\\
[Usage Information](#Usage-Information)\\
[Contribution Guidelines](#Contribution-Guidelines)\\
[Testing Guidelines](#Testing-Guidelines)\\
[License](#License)\\
[Questions](#Questions)



## Description
${questions.description}.\n

## Install Instructions
${questions.installIns}.\n

## Usage Information
${questions.usageInfo}.\n

## Contribution Guidelines
${questions.contributionGuidelines}.\n

## Testing Guidelines
${questions.testGuide}.\n

## License
You are using the ${questions.license} license, click on the badge at the top of the page for more information.\n

## Questions
You can find me on [GitHub](https://github.com/${questions.github}) or you can reach me by email [here](mailto:${questions.email}).
`;




// TODO: Create a function to write README file
function writeToFile(output) {
    fs.writeFileSync('README.md', output);
}

// TODO: Create a function to initialize app
function main() {
    askUser()
}

// Function call to initialize app
main();
