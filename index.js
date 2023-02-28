// Includes the following packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
//inquirer to generate questions
inquirer.prompt (
    [ 
        {
          type:'input',
          message="what is the title of the project?"
          name:'title',
        validate: (value)=>{if(value){return true} else{return 'i need a value to continue}},
     },
         {
 
          type:'input',
          message="What are the Sections involved?"
       name:'installation',
      //validate: (value)=>{if(value){return true} else{return 'i need a value to continue}},
     },
         {
 
          type:'input',
          message="instruction to bbe follow?"
       name:'instruction',
      //validate: (value)=>{if(value){return true} else{return 'i need a value to continue}},
     },
     {
 
          type:'input',
          message="any credits?"
       name:'installation',
      //validate: (value)=>{if(value){return true} else{return 'i need a value to continue}},
     },


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
