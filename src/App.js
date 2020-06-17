import React from 'react';
import seedColors from './seedColors';
import Pallete from './Pallete';
import {generatePallete} from './colorHelpers';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Pallete pallete={generatePallete(seedColors[2])}/>
            </div>
        );
    }
}

export default App;
