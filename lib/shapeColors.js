// Validates whether a given color string the array is a valid color in either hex format or as a keyword.

function validateColor(color) {
    const validKeywords = [
        'black', 'white', 'red', 'green', 'blue', 'yellow', 'gray'
    ];

    if (color.match(/^#[0-9a-f]{6}$/i) || validKeywords.includes(color.toLowerCase())) {
        return true;
    }

    return false;
}

// Converts a color keyword to its corresponding hexadecimal value
function convertToHex(color) {
    const colorKeywordsToHex = {
        black: '#000000',
        white: '#ffffff',
        red: '#ff0000',
        green: '#008000',
        blue: '#0000ff',
        yellow: '#ffff00',
        gray: '#808080'
    };

    if (colorKeywordsToHex[color.toLowerCase()]) {
        return colorKeywordsToHex[color.toLowerCase()];
    }

    return color;
}

// Gets an SVG compatible color, either in hex format or converted from a keyword.
function getSVG(color) {
    return color.match(/^#[0-9a-f]{6}$/i) ? color : convertToHex(color);
}

// Export the functions to make them available from other code files
module.exports = { validateColor, convertToHex, getSVG };