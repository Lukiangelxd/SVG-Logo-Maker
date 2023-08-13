# GR SVG Logo Maker

## Description

This application allows users to generate a logo based on inputs from an inquirer prompt. From the inquirer prompt, a user will have a choice to select a circle, a triangle or square as the shape. The application will generate an svg image based on the inputs provided. 

## Table of Contents
- [GR SVG Logo Maker](#gr-svg-logo-maker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Contact Info](#contact-info)

## Installation
The ReadMe was generated using code from the inquirer node js package including some custom code to help add the contents and autogenerate a professional looking ReadMe file. You can review the code within the index.js as well as the code from utils/generateMarkdown.js to reference how the ReadMe gets generated. First you should clone this repo (git repo https://github.com/grosario1/gr-SVG_Logo_Maker.git). Once you clode the repo, change directories to go into the Develop folder, from here you can modify the index.js to add or update the input prompts which are rendered by the use of the inquirer node js package. You will need to ensure you install the node.js and npm utility in order for you utilize this readme generator. You can follow the instructions to install the utility from here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Once, it is install, use the cmd to navigate to the repo you just cloned and run.... `node init -y` to initized the node js project, then install the inquirer 8.2.4 node js package by running `npm i inquirer@8.2.4.` After, making your changes to the index.js file, you can then run `node index.js` from the command line and then you will now be prompted to input the contents of the ReadMe.
## Usage
As shown below, from the repo folder you cloned within the command line, run 'node index.js'. You will now be prompted to input logo information based on the prompts. For examp, 3 letter logo test, text color (word or hex color), select a shape, and input shape color (word or hex color). Once you complete the prompts, a new logo.svg file will be generated. 

See demo below:

https://drive.google.com/file/d/1YXjoLxkqoY1EIlLtuiwZmtw6vEka4bEl/view

 - click on video below
[<img src="./Demo-video.jpg" width="600" height="300"
/>](https://drive.google.com/file/d/1YXjoLxkqoY1EIlLtuiwZmtw6vEka4bEl/preview)



## Contributing
The project is open for contributions. If you would like to contribute, create a new branch from the main and add any updates as deemed necessary. If you should find any issues with the code, please open a 'New Issue' from https://github.com/grosario1/gr-SVG_Logo_Maker/issues and these request can be review and updated accordingly.

## Tests
You can run a test of the code by using Jest (https://www.npmjs.com/package/jest) which is a javascript framework designed to ensure correctness of any Javascript code:

1. Clone this repository `git clone https://github.com/grosario1/gr-SVG_Logo_Maker.git`
2. Install node js and npm ....https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. Install the inquirer 8.2.4 package, `npm install inquirer@8.2.4`
4. Install jest test package by running `npm i -D jest` from within the project folder
5. From the Develop folder within command line, run `npx jest`
    
    -  Example output:
  
  ![example-jest-test](https://github.com/grosario1/gr-SVG_Logo_Maker/assets/26330325/cb8121b5-b5ac-499c-abde-9fda19ccbf39)

  Demo video:



## Contact Info
For more questions, feel free to contact me:

- GitHub: https://github.com/grosario1
- Email: grosario@alum.quinnipiac.edu
