import chroma from 'chroma-js';

const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePallete(starterPallete){
    let newPallete = {
        palleteName: starterPallete.paletteName,
        id: starterPallete.id,
        emoji: starterPallete.emoji,
        colors: {}
    }

    for(let level of levels){
        newPallete.colors[level] = [];
    }

    for(let color of starterPallete.colors){
        //Get 10 different shades for each color
        let scale = generateColors(color.color, 10).reverse();
        for(let i in scale){
            newPallete.colors[levels[i]].push({
                name: `${color.name} ${levels[i]}`,
                id: color.name.toLowerCase().replace(/ /g, '-'),
                hex: scale[i],
                rgb: chroma(scale[i]).css(),
                rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ', 1.0)')
            });
        }
    }
    
    return newPallete;
}

//Specify a range
function getRange(hexColor){
    const end = '#fff';
    return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

//Get [numberOfColors] different shades of colors
function generateColors(hexColor, numberOfColors){
    return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

export {generatePallete};