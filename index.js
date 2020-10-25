const  inquirer = require("inquirer");
const fs = require("fs");
const util =  require("util");

// array of questions for user

function promptUser(){
    return  inquirer.prompt([
        // Title
        {
            type: "input",
            name: "title",
            message: "What is the title of your project? "
        },
        //Description
        {
            type: "input",
            name: "description",
            message: "Please enter description of your project "
        },
        //Table Data
        {
            type: "input",
            name: "tableData",
            message: "Please enter table Data "
        },
        //Table of content
        {
            type: "input",
            name: "tableDesc",
            message: "Enter table Description ? "        },

        //Installation
        {
            type: "input",
            name: "install",
            message: "Please enter installation guidlines"
        },
        //Usage
        {
            type: "input",
            name: "usage",
            message: "Enter usage of the project"
        },
        //License
        {
            type: "input",
            name: "license",
            message: "Enter license information"
        },
        //Contributing
        {
            type: "input",
            name: "contributing",
            message: "Enter contributing"
        },
        //Test
        {
            type: "input",
            name: "test",
            message: "Enter testing information"
        },
        //Question
        {
            type: "input",
            name: "question",
            message: "Enter any question for project"
        },

        //File Name
        {
            type: "input",
            name: "fileName",
            message: "Enter any name of your markdown file?"
        }
    ])
}

/* Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  * 
*/

// function to write README file
function writeToFile(data) {
    return `    
###  **Title of project** 
${data.title}

###  **Description of project** 
${data.description }
    
### **Table of Content** 
| Option | Description |
| ------ | ----------- |
| ${data.tableData}   | ${data.tableDesc}
    
###  **Installation Guidlines** 
${data.install}

###  **Usage** 
${data.usage}

###  **License** 
![](https://img.shields.io/static/v1?label=Licensce&message=${data.license}&color=red)

###  **Contributing** 
${data.contributing}

###  **Tests** 
${data.test}

###  **Questions** 
${data.question}

     


`;
}

// function to initialize program
 async function init() {
    console.log("Hi pleae enter the details to enter in mark down file? \n");
    
    const answers = await promptUser();

    const userFileName =answers.fileName    

    const markDown = writeToFile(answers);

    fs.writeFileSync(userFileName+".md",markDown);

    console.log("Successfully wrote to markdown.")
}

// function call to initialize program
init();
