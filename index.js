require("dotenv").config();
const fs = require("fs");
const api = require("./utils/api");
const questions = require("./utils/questions");
const inquirer = require("inquirer");

async function init() {
  const userInfo = await inquirer.prompt(questions);
  const { data: gitInfo } = await api.getUser(userInfo.username);
//   next two lines break down what const {data : gitInfo}
//   const data = await api.getUser(userInfo.username);
//   const gitInfo = data.data;
  console.log(gitInfo);

  function writeToFile("readme.txt", data) {}
  const title = data.title.split(" ").join("\n")
}

init();
