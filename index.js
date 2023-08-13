
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { validateColor, convertToHex } = require('./lib/colorUtils');


function generateLogo(text, textColor, ShapeClass, shapeColor) {
    if (!validateColor(textColor) || !validateColor(shapeColor)) {
        console.log('Invalid color format');
        rl.close();
        return;
    }

    const shapeSVG = new ShapeClass().getSVG(shapeColor);

    const logoSVG = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSVG}
        <text x="150" y="100" fill="${convertToHex(textColor)}" font-size="24" text-anchor="middle">${text}</text>
      </svg>
    `;

    fs.writeFileSync('logo.svg', logoSVG);
    console.log('Generated logo.svg');
    rl.close();
}

function getUserInput(question) {
    return new Promise(resolve => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}