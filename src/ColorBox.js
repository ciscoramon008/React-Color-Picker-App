import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Link} from 'react-router-dom';
import './ColorBox.css';

class ColorBox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            copied: false
        };
        this.changeCopyState = this.changeCopyState.bind(this);
    }

    changeCopyState(){
        this.setState({copied: true}, () => setTimeout(() => this.setState({copied: false}), 1500));
    }

    render(){
        const {color, name, id, paletteId, showLink} = this.props;
        return (
            <CopyToClipboard text={color} onCopy={this.changeCopyState}>
                <div style={{background: color}} className="ColorBox">
                    <div style={{background: color}} className={`copy-overlay ${this.state.copied && 'show'}`}/>
                    <div className={`copy-msg ${this.state.copied && 'show'}`}>
                        <h1>COPIED</h1>
                        <p>{color}</p>
                    </div>
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{name}</span>
                        </div>
                        <button className="copy-button">COPY</button>
                    </div>
                    {showLink && (
                        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
                            <span className="see-more">MORE</span>
                        </Link>
                    )}
                </div>
            </CopyToClipboard>
        );
    }
}

export default ColorBox;