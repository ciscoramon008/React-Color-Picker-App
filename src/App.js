import React from 'react';
import {Switch, Route} from 'react-router-dom';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import {generatePalette} from './colorHelpers';
import './App.css';

class App extends React.Component{
    findPalette(id){
        return seedColors.find(palette => id === palette.id);
    }

    render(){
        return (
            <div className="App">
                <Switch>
                    <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />} />
                    <Route exact path="/palette/:id" render={(routeProps) => 
                        <Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default App;
