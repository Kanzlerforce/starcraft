import React, { Component } from 'react';
import classes from './Settings.module.css';

class Settings extends Component {
    render() {
        return (
            <div className={classes.Settings}>
                <span className={classes.WindowTitle}>Settings</span>
                <div className={classes.SettingsInner}></div>
            </div>
        );
    }
}

export default Settings;