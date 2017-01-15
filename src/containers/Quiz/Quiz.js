import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

import {getDummyQuiz} from '../../redux/reducers/quiz'
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
      super(props);
      this.state = {
        questionIndex: 0,
        answerd: false
      };
      this.props.dispatch(getDummyQuiz());
  };

  _nextQuestion = () => {
      this.setState({questionIndex:this.state.questionIndex+1, answerd: false});
  }
  
  _getQuestion = () => {
     if(this.props.quizlist) {
         return this.props.quizlist[this.state.questionIndex];
     }
     return undefined;
  }

  _answerdQuestion = () => {
     this.setState({answerd:true})
  }

  render() {
    const selectedQuestion = this._getQuestion();
    return (
        <div className={css(styles.container)}>
            {selectedQuestion && <Question question={selectedQuestion} onAnswered={this._answerdQuestion}/> }
             <RaisedButton label="Next Question" disabled={!this.state.answerd} 
             style={nextButtonStyle} onClick={this._nextQuestion} />
        </div>
    );
  }
}

const nextButtonStyle = {
      margin: 10
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flex: 1,
       flexDirection: 'column',
       justyfyContent: 'center',
       alignItems: 'center'
    }
});

function mapStateToProps(state) {
    console.log("State  loaded ", state);
  return {
     quizlist: state.quiz.dummyQuizList || undefined
  };
}
export default connect(mapStateToProps) (Quiz);
