export function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  
  const badges = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3': 'https://img.shields.io/badge/License-BSD_3--Clause-orange.svg',
  };
  
  return badges[license] || '';
}

export function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  
  const links = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  
  return links[license] || '';
}

export function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);
  
  return `
## License
  
This project is licensed under the [${license}](${link}) license.
  `;
}

export function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
${data.license !== 'None' ? '* [License](#license)' : ''}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please feel free to contact me at [${data.email}](mailto:${data.email}). You can also find more of my work on [GitHub](https://github.com/${data.github}).
  `;
}
