import React from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends React.Component{
    constructor(props){
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.color);
        this.state = {
            format: 'hex',
        };
        this.changeFormat = this.changeFormat.bind(this);
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

    changeFormat(val){
        this.setState({format: val});
    }

    render(){
        const {paletteName, emoji} = this.props.palette;

        const colorBoxes = this._shades.map(color => 
            <ColorBox key={color.id} name={color.name} color={color[this.state.format]} showLink={false} />
        )
        return (
            <div className="Palette">
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
                <div className="Palette-colorboxes">{colorBoxes}</div>
                <PaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;