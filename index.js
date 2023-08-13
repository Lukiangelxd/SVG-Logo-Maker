const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shape.js');
const { validateColor, convertToHex, getSVG } = require('./lib/shapeColors.js');
const inquirer = require('inquirer');

function generateLogo(text, textColor, shape, shapeColor) {
  if (!validateColor(textColor) || !validateColor(shapeColor)) {
    console.log('Invalid color format');
    return;
  }

  const shapeSVG = shape.getSVG(getSVG(shapeColor));

  const logoSVG = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeSVG}
      <text x="150" y="100" fill="${convertToHex(textColor)}" font-size="24" text-anchor="middle">${text}</text>
    </svg>
  `;

  fs.writeFileSync('logo.svg', logoSVG);
  console.log('Generated logo.svg');
}

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
  .then(answers => {
    const { text, textColor, shapeChoice, shapeColor } = answers;
    const ShapeClass = {
      circle: Circle,
      triangle: Triangle,
      square: Square
    }[shapeChoice.toLowerCase()];

    if (ShapeClass) {
      const shapeInstance = new ShapeClass();
      generateLogo(text, textColor, shapeInstance, shapeColor);
    } else {
      console.log('Invalid shape choice');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });