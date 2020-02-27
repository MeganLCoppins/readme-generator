require("dotenv").config();
const fs = require("fs");
const api = require("./utils/api");
const questions = require("./utils/questions");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// function writeToFile(functionName, data) {}

// async function to await user input and github info
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const { data: gitInfo } = await api.getUser(userInput.username);
//   next two lines break down what const {data : gitInfo}
//   const data = await api.getUser(userInfo.username);
//   const gitInfo = data.data;
        readme = generateMarkdown(userInput, gitInfo)

//create md file with information returned from createReadme function
        fs.writeFile("readMe.md", readme, function(err){
            if (err){
            return console.log(err);
            }
            })
        } catch (err) {
            return;
    }
};

init();
