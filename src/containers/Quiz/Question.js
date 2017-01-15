import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';

import {getWidth, getHeight} from '../../utils/config'

class Question extends Component {
  constructor(props) {
      super(props);
      this.state = {
        answered: false,
        answeredIndex: -1
      };
  };

  _selectAnswer = (index) => {
     console.log("Selected answer ",index);
     if(index == this.props.question.answer) {
       console.log("Correct answeer");
     }else {
       console.log("wrong answer");
     }
     this.setState({answered:true, answeredIndex: index});
     this.props.onAnswered();
  };

  render() {
    const {question} = this.props;
    const questionText = question ? question.question : "not loaded";
    return (
        <div className={css(styles.container)}>
          <span className={css(styles.question)}>{questionText}</span>
          <img src={question.imageURL} style={imageStyle} />
          <div className={css(styles.optionContainer)}>
              { 
                question.options.map((option, index) => this._renderOption(option, index))
              }
          </div>
          <Divider />
           {this.state.answered && <span>{question.explanation}</span>}
        </div>
    );
  };

  _renderOption = (option,index) => {
      const correctAnswer = (index == this.props.question.answer && this.state.answered) ? true : false;
      const wrongAnswer = (this.state.answered && !correctAnswer && index == this.state.answeredIndex) ? true : false;
      return (
         <RaisedButton label={option.text} style={optionStyle} primary={correctAnswer} 
         secondary={wrongAnswer} onClick={()=>this._selectAnswer(index)} />
      );
  };
}
const optionStyle = {
      display: 'flex',
      flex:1,
      flexDirection: 'row',
      justyfyContent: 'center',
      alignItems: 'center',
      margin: 10
}

const imageStyle = {
     width: getWidth(),
     height: 'auto'
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between'
    },
    question :{
      padding: 20,
    },
    optionContainer: {
       display: 'flex',
       flex: 1,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between'
    }
});

export default Question;
