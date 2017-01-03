import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Links extends Component {
  render() {
    return (
        <div className={css(styles.container)}>
              social links
        </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flexDirection: 'row',
       alignItems: 'center'
    }
});

