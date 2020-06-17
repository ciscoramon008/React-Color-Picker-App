import React from 'react';
import seedColors from './seedColors';
import Pallete from './Pallete';
import {generatePallete} from './colorHelpers';
import './App.css';

class App extends React.Component{
    render(){
        console.log(generatePallete(seedColors[2]));
        return (
            <div className="App">
                <Pallete {...seedColors[2]}/>
            </div>
        );
    }
}

export default App;
