import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';

import {loadQuizList, loadSelectedQuiz} from '../../redux/reducers/quiz';

class QuizList extends Component {
  constructor(props) {
      super(props);
      this.props.dispatch(loadQuizList());
  };

  _selectQuiz = (index) => {
      this.props.dispatch(loadSelectedQuiz(this.props.quizList[index]));
      browserHistory.push("quiz");
  }

  render() {
    return (
        <div className={css(styles.container)}>
          { 
            this.props.quizList && this.props.quizList.map((quiz, index) => 
             <RaisedButton label={quiz.name} style={nextButtonStyle} onClick={()=>this._selectQuiz(index)} />)
          }
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
  return {
     quizList: state.quiz.quizList || undefined
  };
}
export default connect(mapStateToProps) (QuizList);
