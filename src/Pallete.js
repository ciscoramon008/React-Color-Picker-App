import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import ColorBox from './ColorBox';
import './Pallete.css';

class Pallete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            level: 500
        };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(newLevel){
        this.setState({level: newLevel});
    }

    render(){
        const colorBoxes = this.props.pallete.colors[this.state.level].map(color => <ColorBox color={color.hex} name={color.name}/>);

        return (
            <div className="Pallete">
                <div className="Pallete-slider"><Slider defaultValue={this.state.level} step={100} min={100} max={900} onAfterChange={this.changeLevel} /></div>
                <div className="Pallete-colorboxes">{colorBoxes}</div>
            </div>
        );
    }
}

export default Pallete;