// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 
${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

## Installation

${data.installation}

## Usage 

${data.usage}


## Credits

${data.contributing}

## License

${data.license === "Apache"? "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)": 
  data.license === "MIT"? "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)": 
  data.license === "Mozilla"? "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)(http://unlicense.org/)"}

---
  

## Badges

${data.badge === 
  "commit"? "[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()": 
  data.badge === 
  "issue"? "[![Issues](https://img.shields.io/github/issues-raw/tterb/PlayMusic.svg?maxAge=25000)](https://github.com/tterb/Hyde/issues)": 
  data.badge === 
  "pull"? "[![GitHub pull requests](https://img.shields.io/github/issues-pr/cdnjs/cdnjs.svg?style=flat)]()": 
  "[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()"}

## Contributions

[GitHub: ${data.contributing}](https://github.com/${data.contributing})

## Tests

${data.tests}

## Questions

[GitHub profile link: ${data.username}](https://github.com/${data.username})

You can email me at ${data.email} if you have any questions!
`;
}

module.exports = generateMarkdown;
