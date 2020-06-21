import React from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends React.Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.color);
    }

    gatherShades(palette, colorToFilterBy){
        let shades = [];
        const allColors = palette.colors;

        //GET SHADES OF A GIVEN COLOR
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            );
        }

        return shades.slice(1);
    }

    render(){
        const colorBoxes = this._shades.map(color => 
            <ColorBox key={color.id} name={color.name} color={color.hex} showLink={false} />
        )
        return (
            <div className="Palette">
                <h1>Single color palette</h1>
                <div className="Palette-colorboxes">{colorBoxes}</div>
            </div>
        );
    }
}

export default SingleColorPalette;