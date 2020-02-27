require("dotenv").config();
const fs = require("fs");
const api = require("./utils/api");
const questions = require("./utils/questions");
const inquirer = require("inquirer");

// function writeToFile(functionName, data) {}

// async function to await user input and github info
async function init() {
  const userInput = await inquirer.prompt(questions);
  const { data: gitInfo } = await api.getUser(userInput.username);
//   next two lines break down what const {data : gitInfo}
//   const data = await api.getUser(userInfo.username);
//   const gitInfo = data.data;
  readme = createReadme(userInput, gitInfo)

//create md file with information returned from createReadme function
  fs.writeFile("readMe.md", readme, function(err){
      if (err){
          return console.log(err);
      }
  })
};

// create readme based on user input and github info
function createReadme(userInput, gitInfo){
// if user has an email address than email will be presented otherwise "user does not have an email" will be displayed
    const email = gitInfo.email || "User does not have an email"

    return `
    # ${userInput.title}

    ## Description

    ${userInput.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## Installation

    ${userInput.installation}

    ## Usage

    ${userInput.usage}

    ## License

    This project is licensed under the ${userInput.license} license.

    <img src="https://img.shields.io/badge/License-${userInput.license}-orange" alt="badge"/>

    ## Contributing

    ${userInput.credits}

    ## Tests


        ${userInput.tests}


    ## Questions

    For any questions regarding the repo contact: ${email}

    GitHub username: ${gitInfo.login}

    <img src="${gitInfo.avatar_url}" alt="avatar" height="200" width="200"/>
    `;
}

init();
