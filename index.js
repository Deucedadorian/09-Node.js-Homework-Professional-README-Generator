// Include packages needed for this application
const fileSystem = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const { generateMarkdown } = require("./utils/generateMarkdown")

const writeFileAsync = util.promisify(fileSystem.writeFile);

// Create questions for user input
const promptUser = () => {
    return inquirer.prompt([
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
            message: "Enter your Github:",
            name: "github",
        },
        {
            type: "list",
            message: "Select a License:",
            name: "license",
            choices: [
                "None",
                "Apache License 2.0",
                "GNU General Public License v3.0",
                "MIT License",
                "BSD 2-Clause \"Simplified\" License",
                "BSD 3-Clause \"New\" or \"Revised\" License",
                "Boost Software License 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0",
                "GNU Affero General Public License v3.0",
                "GNU General Public License v2.0",
                "GNU Lesser General Public License v2.1",
                "Mozilla Public License 2.0",
                "The Unlicense",
            ],
        },
    ]);
};

// Initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync("dist/README.md", generateMarkdown(answers)))
        .then(() => console.log("Successfully wrote to README.md"))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
