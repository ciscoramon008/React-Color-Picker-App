import React from 'react';
import {Switch, Route} from 'react-router-dom';
import seedColors from './seedColors';
import Pallete from './Pallete';
import {generatePallete} from './colorHelpers';
import './App.css';

class App extends React.Component{
    render(){
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={() => <h1>Palette List Goes Here!</h1>} />
                    <Route exact path="/palette/:id" render={() => <h1>Individual Palette</h1>} />
                </Switch>
                {/* <Pallete pallete={generatePallete(seedColors[0])}/> */}
            </div>
        );
    }
}

export default App;
