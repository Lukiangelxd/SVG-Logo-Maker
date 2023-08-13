function validateColor(color) {
    const validKeywords = [
        'black', 'white', 'red', 'green', 'blue', 'yellow', 'gray'
    ];

    if (color.match(/^#[0-9a-f]{6}$/i) || validKeywords.includes(color.toLowerCase())) {
        return true;
    }

    return false;
}

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

function getSVG(color) {
    return color.match(/^#[0-9a-f]{6}$/i) ? color : convertToHex(color);
}

module.exports = { validateColor, convertToHex, getSVG };