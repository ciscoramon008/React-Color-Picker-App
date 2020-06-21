import React from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';

class Palette extends React.Component{
    constructor(props){
        super(props);
        this.state={
            level: 500,
            format: 'hex'
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    changeFormat(val){
        this.setState({format: val});

    }

    render(){
        const {palette} = this.props;
        const colorBoxes = palette.colors[this.state.level].map(color => 
            <ColorBox key={color.id} id={color.id} color={color[this.state.format]} name={color.name} showLink={true} paletteId={palette.id} />
        );

        return (
            <div className="Palette">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className="Palette-colorboxes">{colorBoxes}</div>
                <footer className="Palette-footer">
                    {palette.paletteName}
                    <span className="emoji">{palette.emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palette;