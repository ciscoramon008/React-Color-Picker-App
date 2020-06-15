import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends React.Component{
    render(){
        const {color, name} = this.props;
        return (
            <CopyToClipboard text="hello">
                <div style={{background : color}} className="ColorBox">
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">COPY</button>
                    </div>
                    <span className="see-more">MORE</span>
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;