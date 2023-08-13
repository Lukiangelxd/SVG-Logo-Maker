
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

promptUser('Enter up to three characters: ')
    .then(text => promptUser('Enter text color (keyword or hex): ')
        .then(textColor => promptUser('Choose a shape (circle, triangle, square): ')
            .then(shapeChoice => {
                const shapeColorPrompt = 'Enter shape color (keyword or hex): ';
                const ShapeClass = {
                    circle: Circle,
                    triangle: Triangle,
                    square: Square
                }[shapeChoice.toLowerCase()];

                if (ShapeClass) {
                    return promptUser(shapeColorPrompt)
                        .then(shapeColor => generateLogo(text, textColor, ShapeClass, shapeColor));
                } else {
                    console.log('Invalid shape choice');
                    rl.close();
                }
            })
        )
    )
    .catch(error => {
        console.error('An error occurred:', error);
        rl.close();
    });




