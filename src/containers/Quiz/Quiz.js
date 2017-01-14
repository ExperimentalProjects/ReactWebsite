import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';

import {getDummyQuiz} from '../../redux/reducers/quiz'
import Question from './Question';

class Quiz extends Component {
  constructor(props) {
      super(props);
      this.props.dispatch(getDummyQuiz());
  };
  
  _getQuestion = () => {
     if(this.props.quizlist) {
         return this.props.quizlist[0];
     }
     return undefined;
  }

  render() {
    const selectedQuestion = this._getQuestion();
    return (
        <div className={css(styles.container)}>
            {selectedQuestion && <Question question={selectedQuestion}/> }
        </div>
    );
  }
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
