<<<<<<< HEAD
//constructs to import the required files needed for the code
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shape.js');
const { validateColor, convertToHex, getSVG } = require('./lib/shapeColors.js');
const inquirer = require('inquirer');
=======
import fs from 'fs/promises';
import { Circle, Square, Triangle } from './lib/shapes.js';
import inquirer from 'inquirer';
>>>>>>> 7d8ebb0d382835ba05137a46e42c54fd58b7b494

// Function to generate a logo SVG with specified text, text color, shape, and shape color.
function generateLogo(text, textColor, shape, shapeColor) {
    if (!validateColor(textColor) || !validateColor(shapeColor)) {
        console.log('Invalid color format');
        return;
    }

    const shapeSVG = shape.getSVG(getSVG(shapeColor));

    const logoSVG = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeSVG}
    <text x="150" y="130" fill="${convertToHex(textColor)}" font-size="36" text-anchor="middle">${text}</text>
  </svg>
`;

    fs.writeFileSync('logo.svg', logoSVG);
    console.log('Generated logo.svg');
}

// Use Inquirer to prompt the user for input.
inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters:',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shapeChoice',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
        },
    ])
    // Once the user provides answers to prompts...
    .then(answers => {
        const { text, textColor, shapeChoice, shapeColor } = answers;
        const ShapeClass = {
            circle: Circle,
            triangle: Triangle,
            square: Square
        }[shapeChoice.toLowerCase()]; // Get the appropriate shape class based on the user's choice.

        if (ShapeClass) {
            const shapeInstance = new ShapeClass(); // Create an instance of the selected shape class.
            generateLogo(text, textColor, shapeInstance, shapeColor); // Generate the logo using the specified inputs.
        } else {
            console.log('Invalid shape choice');
        }
    })
    .catch(error => {
        console.error('An error occurred:', error);
<<<<<<< HEAD
=======

>>>>>>> 7d8ebb0d382835ba05137a46e42c54fd58b7b494
    });