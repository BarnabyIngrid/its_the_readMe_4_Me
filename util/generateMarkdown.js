// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Sections Entitled
   ${data.sectionsEntitled}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![alt-text](${data.screenshot})
  ## Table of Contents
  * [Installations](#installations)<br/>
  * [Usage](#usage)<br/>
  * [Licence](#HowtoUseThisApplication)<br/>
  * [Contributors](#contributors)<br/>
  * [Testing](#testing)<br/>
  * [Questions](#questions)<br/>
  ## Installations
  ${data.installations}
  ## Usage
  ${data.require}
  ## How to Use This Application:
  ${data.usage}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.creator}](https://github.com/${data.creator}).
  If you have questions about this application, please contact me via GitHub at username ${inquirerResponse.github} or by email at ${inquirerResponse.email}.
  ## License
  ${renderLicenseBadge(inquirerResponse.license)} <br/>
  ${renderLicenseSection(inquirerResponse.license)} <br/>
  ${renderLicenseLink(inquirerResponse.license)} <br/>
      `;
  }
  
  module.exports = generateMarkdown;
