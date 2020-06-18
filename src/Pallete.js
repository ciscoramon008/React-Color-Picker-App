import React from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';
import Navbar from './Navbar';

class Pallete extends React.Component{
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
        const colorBoxes = this.props.pallete.colors[this.state.level].map(color => <ColorBox key={color.id} color={color[this.state.format]} name={color.name}/>);

        return (
            <div className="Pallete">
                <Navbar level={this.state.level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
                <div className="Pallete-colorboxes">{colorBoxes}</div>
                <footer className="Pallete-footer">
                    {this.props.pallete.palleteName}
                    <span className="emoji">{this.props.pallete.emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Pallete;