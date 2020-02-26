const questions = [
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "Give a description of your project"
        },
        {
            type: "checkbox",
            name: "contents",
            message: "What would you like included in your table of contents?",
            choices: [
                "Installation",
                "Usage",
                "Credits",
                "License"
            ]
        },
        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instruction and examples for use"
        },
        {
            type: "input",
            name: "credits",
            message: "List any collaborators with links to their GitHub profiles, list creater and links to primary web presence for any third-party assets used, as well as links to any tutorials followed"
        },
        {
            type: "input",
            name: "license",
            message: "Choose and add a license"
        }
    ];
    
module.exports = questions;