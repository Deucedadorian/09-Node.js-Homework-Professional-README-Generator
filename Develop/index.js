// Include packages needed for this application
const fileSystem = require("fs");
const inquirer = require("inquirer");

// Create questions for user input
inquirer
  .prompt([
    {
        type: "input",
        message: "Enter project title:",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a description:",
        name: "description",
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        input: "input",
        message: "Enter contribution guidelines:",
        name: "contributing",
    },
    {
        input: "input",
        message: "Enter test instructions:",
        name: "test",
    },
    {
        input: "input",
        message: "Enter your email address:",
        name: "email",
    },
    {
        input: "input",
        message: "Enter your your Github:",
        name: "github",
    },
])

// fuction to create README
.then(function ({ title, description, installation, usage, contributing, test, email, github}) {
    fileSystem.writeFile(
        "README.md",
        `# Title
        
${title}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributing}

## Test

${test}

## Questions

email: ${email}
github: ${github}`,
        "utf8",
        (err) => {
            err ? console.error(err) : console.log("success");
        }
    );
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
