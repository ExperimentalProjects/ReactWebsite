import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const profilePicUrl = 'https://pbs.twimg.com/profile_images/758268303496376320/2hxvfwrG_bigger.jpg';
const imageSize = 200;

export default class ProfilePicture extends Component {
  render() {
    return (
        <div className={css(styles.container)}>
            <div className={css(styles.imageContainer)}>
                <img src={profilePicUrl} height={"100%"} width={"100%"} alt="profile"/>
            </div>
            <span className={css(styles.name)}>Abhishek Singh</span>
        </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center'
    },
    imageContainer:{
       display: 'flex',
       marginTop: 50,
       height: imageSize,
       width:imageSize,
       borderRadius: imageSize/2,
       overflow: 'hidden'
    },
    name:{
       fontSize: 30,
       fontWeight: 600,
       color: 'white'
    }
});

