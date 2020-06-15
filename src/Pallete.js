import React from 'react';
import ColorBox from './ColorBox';
import './Pallete.css';

class Pallete extends React.Component{
    render(){
        const colorBoxes = this.props.colors.map(color => <ColorBox color={color.color} name={color.name}/>);

        return (
            <div className="Pallete">
                <div className="Pallete-colorboxes">{colorBoxes}</div>
            </div>
        );
    }
}

export default Pallete;