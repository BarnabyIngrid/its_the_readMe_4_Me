// Includes the following packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util")

const writeFileAsync = util.promisify(fs.writeFile);

const withTM = require('next-transpile-modules')(['react-markdown']);



// array of questions for user , inquirer will trigger questions
const promptUser = () =>
inquirer.prompt ([
     
        {
          type:'input',
          name:'title',
          message:"what is the title of the project?",
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please enter a description.',
        },

        {
          type:'input',
          name:'installation',
          message:"Please give instructions for installation of the application.",
        },

        {
          type:'input',
          name:'usage',
          message:"Please describe how to use this application.",
        },

        {
          type:'input',
          name:'contributions',
          message:"Please include any contributions or resources.",
        },

        {
          type:'input',
          name:'tests',
          message:"Please enter any test guidelines or methods here.",
        },

        {
          type: 'input',
          name: 'github',
          message: 'Please enter your GitHub username.'
        },

        {
          type: 'list',
          name: 'license',
          message: 'Please select a license.',
          choices: [
              'Mozilla',
              'Apache',
              'MIT'
          ]
        },

        {  
          type:'input',
          message:"any credits?",
           name:'installation',
      
        },


]);

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd().fileName).data);
}



