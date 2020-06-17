import React from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            format: "hex"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt){
        this.setState({format: evt.target.value});
        this.props.handleChange(evt.target.value);
    }

    render(){
        return (
            <header className="Navbar">
                <div className="Navbar-logo">
                    <a href="#">reactcolorpicker</a>
                </div>
                <div className="Navbar-slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="Navbar-slider">
                        <Slider defaultValue={this.props.level} step={100} min={100} max={900} onAfterChange={this.props.changeLevel} />
                    </div>
                </div>
                <div className="Navbar-select-container">
                    <Select value={this.state.format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #fffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;