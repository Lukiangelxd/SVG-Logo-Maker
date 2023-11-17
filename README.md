# SVG Logo Maker

## Description

This application allows users to generate a logo based on inputs from an inquirer prompt. From the inquirer prompt, a user will have a choice to select a circle, a triangle or square as the shape. The application will generate an svg image based on the inputs provided. 

## Installation
The ReadMe has been created through the utilization of code sourced from the inquirer Node.js package, incorporating some bespoke code to facilitate the addition of contents and automatic generation of a professionally formatted ReadMe file. To examine the code responsible for this process, refer to both the index.js file and the code within utils/generateMarkdown.js. Begin by cloning this repository. After cloning, navigate to the Develop folder, where you can customize the index.js file to modify or add input prompts using the inquirer Node.js package. Ensure that you have Node.js and npm installed to utilize this ReadMe generator; installation instructions can be found at https://docs.npmjs.com/downloading-and-installing-node-js-and-npm. Once installed, use the command line to navigate to the cloned repository and execute node init -y to initialize the Node.js project. Next, install the inquirer 8.2.4 Node.js package with the command npm i inquirer@8.2.4. After making changes to the index.js file, run node index.js in the command line. You will then be prompted to input the contents of the ReadMe.
## Usage

As demonstrated in the following steps, navigate to the repository folder you cloned using the command line, and execute 'node index.js'. Subsequently, you'll receive prompts to enter logo information, such as a three-letter logo test, text color (in either word or hex format), the selection of a shape, and input for the shape color (in either word or hex format). After completing these prompts, a new logo.svg file will be generated.


## Contributing/ Help
The project is open for contributions. If you would like to contribute, create a new branch from the main and add any updates as deemed necessary. Thanks to Gil for the assistance in understanding this assignment

## Tests
You can run a test of the code by using Jest (https://www.npmjs.com/package/jest) which is a javascript framework designed to ensure correctness of any Javascript code:
Here is the video of me testing it!: https://drive.google.com/file/d/1cXh0yKEp-bD1_G8k8MweVIlKLC4mgcQN/view 

1. Clone this repository `git clone`
2. Install node js and npm ....https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
3. Install the inquirer 8.2.4 package, `npm install inquirer@8.2.4`
4. Install jest test package by running `npm i -D jest` from within the project folder
5. From the Develop folder within command line, run `npx jest`
