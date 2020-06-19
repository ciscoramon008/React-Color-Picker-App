import React from 'react';
import Slider from 'rc-slider';
import {Link} from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            format: "hex",
            open: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(evt){
        this.setState({format: evt.target.value, open: true});
        this.props.handleChange(evt.target.value);
    }

    closeSnackbar(){
        this.setState({open: false});
    }

    render(){
        return (
            <header className="Navbar">
                <div className="Navbar-logo">
                    <Link to="/">reactcolorpicker</Link>
                </div>
                <div className="Navbar-slider-container">
                    <span>Level: {this.props.level}</span>
                    <div className="Navbar-slider">
                        <Slider defaultValue={this.props.level} step={100} min={100} max={900} onAfterChange={this.props.changeLevel} />
                    </div>
                </div>
                <div className="Navbar-select-container">
                    <Select value={this.state.format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">HEX - #fffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
                    </Select>
                </div>
                <Snackbar 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.closeSnackbar}
                    message={<span id="message-id">Format changed to {this.state.format.toUpperCase()}</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color="inherit" key="close" aria-label="close">
                            <CloseIcon/>
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default Navbar;