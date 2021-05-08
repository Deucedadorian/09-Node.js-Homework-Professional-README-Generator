const { renderLicenseBadge, renderLicenseSection } = require("./licenses")

// Generate markdown for README
const generateMarkdown = (answers) => {

  // string for building table of contents
  let tableOfContents = "## Table of Contents\n\n";

  answers.gmail
  let questionsAdded = false;
  // loop for building table of contents string
  for (let answer of Object.keys(answers)) {
    if (answers[answer] && answers[answer] !== "None" && answers[answer] !== answers.title && answers[answer] !== answers.description) {
      if (answer === "email" || answer === "github") {
        if (!questionsAdded) {
          tableOfContents += `- [Questions](#Questions)\n`;
          questionsAdded = true;
        }
      } else {
        tableOfContents += `- [${answer}](#${answer})\n`;
      }
    }
  }

  // string for building README file contents
  let readmeFile = '';

  // Series of if statments to add each section to the README
  if (answers.title) {
    readmeFile += `# ${answers.title}\n\n`;
  }

  if (answers.license !== "None") {
    readmeFile += `${renderLicenseBadge(answers.license)}\n\n`;
  }

  if (answers.description) {
    readmeFile += `## Description\n\n${answers.description}\n\n`;
  }

  if (tableOfContents !== "## Table of Contents\n\n") {
    readmeFile += `${tableOfContents}\n`;
  }

  if (answers.installation) {
    readmeFile += `## Installation\n\n${answers.installation}\n\n`;
  }

  if (answers.usage) {
    readmeFile += `## Usage\n\n${answers.usage}\n\n`;
  }

  if (answers.contributing) {
    readmeFile += `## Contributing\n\n${answers.contributing}\n\n`;
  }

  if (answers.test) {
    readmeFile += `## Test\n\n${answers.test}\n\n`;
  }

  if (answers.email || answers.github) {
    readmeFile += `## Questions\n\n`;
  }

  if (answers.email) {
    readmeFile += `Feel free to email me at <${answers.email}> if you have any further questions.\n\n`;
  }

  if (answers.github) {
    readmeFile += `github: [${answers.github}](https://github.com/${answers.github})\n\n`;
  }

  //run render license function
  readmeFile += renderLicenseSection(answers.license)

  return readmeFile;
};

module.exports = { generateMarkdown }