import React, { Component } from 'react';
import './App.module.css';
import Settings from './components/Settings/Settings';
import classes from './App.module.css';

class App extends Component {
    render() {
        return (
            <div className={classes.App}>
                <Settings />
            </div>
        );
    };
}

export default App;
