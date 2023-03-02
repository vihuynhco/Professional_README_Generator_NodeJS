// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(data) {
//   const licenseBadgeLinks = {
//     'None': '',
//     'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
//     'GNU General Public License v3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
//     'MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
//     'BSD 2-Clause "Simplified" License': 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg',
//     'BSD 3-Clause "New" or "Revised" License': 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg',
//     'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg',
//     'Creative Commons Zero v1.0 Universal': 'https://licensebuttons.net/l/zero/1.0/88x31.png',
//     'Eclipse Public License 2.0': 'https://img.shields.io/badge/License-EPL%202.0-red.svg',
//     'GNU Affero General Public License v3.0': 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
//     'GNU General Public License v2.0': 'https://img.shields.io/badge/License-GPL%20v2-blue.svg',
//     'GNU Lesser General Public License v2.1': 'https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg',
//     'Mozilla Public License 2.0': 'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg',
//     'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg'
//   };
//   const badgeLink = licenseBadgeLinks[license];
//   if (!badgeLink) {
//     return '';
//   }
//   return `![${'Apache License 2.0'}](${badgeLink})`;

// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
 function renderLicenseBadge (license) {
  switch (license) {
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU General Public License v3.0':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'MIT License':
      return 'https://img.shields.io/badge/License-${license}-MIT-blue.svg';
    case 'BSD 2-Clause "Simplified" License':
      return 'https://img.shields.io/badge/License-BSD%202--Clause-orange.svg';
    case 'BSD 3-Clause "New" or "Revised" License':
      return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
    case 'Boost Software License 1.0':
      return 'https://img.shields.io/badge/License-Boost%201.0-lightblue.svg';
    case 'Eclipse Public License 2.0':
      return 'https://img.shields.io/badge/License-EPL%202.0-red.svg';
    case 'GNU Affero General Public License v3.0':
      return 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg';
    case 'GNU General Public License v2.0':
      return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
    case 'GNU Lesser General Public License v2.1':
      return 'https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg';
    case 'Mozilla Public License 2.0':
      return  'https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg';
    case 'The Unlicense':
      return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
    default:
      return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}

  ${renderLicenseBadge('data.license')}

  ## Description: 
  ###
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Questions](#questions)
 

  ## Installation:
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing

  ${data.contributing}
  
  ## Test
  ${data.test}
  
  ## Questions
  ${data.questions}`

  }

module.exports = generateMarkdown;
