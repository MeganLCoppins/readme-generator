require("dotenv").config();
const fs = require("fs");
const inquirer = require("inquirer");
const utils = require("./utils");
const api = require("./utils/api");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = utils.promisify(fs.writeFile);

// async function to await user input and github info
async function init() {
    try {
        const userInput = await inquirer.prompt(questions);
        const { data: gitInfo } = await api.getUser(userInput.username);
//   next two lines break down what const {data : gitInfo}
//   const data = await api.getUser(userInfo.username);
//   const gitInfo = data.data;
        const readme = generateMarkdown(userInput, gitInfo)
//create md file 
        await writeFileAsync("readMe.md", readme);
    } catch (err){
        console.log(err);
    }
};

init();