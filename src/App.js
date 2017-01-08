import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import './App.css';

import {getWidth, getHeight} from './utils/config';
import Score from './containers/Score';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className={css(styles.app)}>
           <Score />
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
    app: {
       display: 'flex',
       flex: 1,
    }
});

export default App;
