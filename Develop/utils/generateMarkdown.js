let licenses = {
  ApacheLicense20: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  GNUGeneralPublicLicensev30: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  MITLicense: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  BSD2ClauseSimplifiedLicense: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  BSDClauseNeworRevisedLicense: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  BoostSoftwareLicense10: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
  CreativeCommonsZerov10Universal: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
  EclipsePublicLicense20: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
  GNUAfferoGeneralPublicLicensev30: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
  GNUGeneralPublicLicensev20: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  GNULesserGeneralPublicLicensev21: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
  MozillaPublicLicense20: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
  TheUnlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");

  let chosenLicense = licenses[licenseKey];

  return chosenLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  

  if (license !== "None") {
    let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");

    let chosenLicense = licenses[licenseKey].split("]")[2].split("(")[1].split(")")[0];

    return chosenLicense;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license !== "None") {
    let LicenseSection = `## License
    
This aplicattion is covered under the ${license}. for more information, visit: ${renderLicenseLink(license)}`;

    return LicenseSection;
    } else {
      return "";
    }
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {

  // string for building table of contents
  let tableOfContents = "## Table of Contents\n\n";

  answers.gmail
  let QuestionsAdded = false;
  // build table of contents
  for (let answer of Object.keys(answers)) {
    if (answers[answer] && answers[answer] !== "None" && answers[answer] !== answers.title && answers[answer] !== answers.description) {
      if (answer === "email" || answer === "github") {
        if (!QuestionsAdded) {
          tableOfContents += `- [Questions](#Questions)\n`;
          QuestionsAdded = true;
        }
      } else {
        tableOfContents += `- [${answer}](#${answer})\n`;
      }
    }
  }

// string for building README file contents
let readmeFile = '';

if (answers.title) {
  readmeFile += `# ${answers.title}
  
`;
}

if (answers.license !== "None"){
  readmeFile += `${renderLicenseBadge(answers.license)}
  
  `
}

if (answers.description) {
  readmeFile += `## Description
  
  ${answers.description}
  
`;
}

if (tableOfContents !== "## Table of Contents\n\n") {
  readmeFile += `${tableOfContents}
`;
}

if (answers.installation) {
  readmeFile += `## Installation
  
  ${answers.installation}
  
`;
}

if (answers.usage) {
  readmeFile += `## Usage
  
  ${answers.usage}
  
`;
}

if (answers.contributing) {
  readmeFile += `## Contributing
  
  ${answers.contributing}
  
`;
} 

if (answers.test) {
  readmeFile += `## Test
  
  ${answers.test}
  
`;
}

if (answers.email || answers.github) {
  readmeFile += `## Questions
  
`;
}

if (answers.email) {
  readmeFile += `Feel free to email me at <${answers.email}> if you have any further questions.

`;
}

if(answers.github) {
  readmeFile += `github: [${answers.github}](https://github.com/${answers.github})

`;
}

//run render license function
readmeFile += renderLicenseSection(answers.license)

return readmeFile;
};

module.exports = { generateMarkdown }
