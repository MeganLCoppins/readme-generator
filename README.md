 # readme-generator

 ## Description

 I created this commond-line application with the purpose of dynamially generating a good readme.md file. 
 
 I created the application to be invoked with the command ```node index.js```. 
 
 Once the command is run the application prompts the user for their GitHub username and questions about their project. Using axios once the GitHub username is entered a call to the GitHub API retrieves the users email and profile image. 
 
 The README takes the user input and is populated with:

 * Project Title
 * Description
 * Table of Contents
 * Installation
 * Usage
 * License
 * Contributing
 * Tests
 * GitHub profile picture and email

 ## Installation

 Installation to run this application includes:

 * npm
 * inquirer
 * dotenv
 * axios

 ## Demonstration of Application

 <img src="https://media.giphy.com/media/JSdrxAYDZLgEdZkaqV/giphy.gif" alt="application giph">


 https://meganlcoppins.github.io/readme-generator/