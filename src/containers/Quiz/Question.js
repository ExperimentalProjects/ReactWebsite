import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { StyleSheet, css } from 'aphrodite';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Question extends Component {
  render() {
    const {question} = this.props;
    console.log(question);
    const questionText = question ? question.question : "not loaded";
    return (
        <div className={css(styles.container)}>
          <span className={css(styles.question)}>{questionText}</span>
            <Table className={css(styles.options)}>
                <TableBody>
                    <TableRow>
                    <TableRowColumn>{question.options[0].text}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                    <TableRowColumn>{question.options[1].text}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                    <TableRowColumn>{question.options[2].text}</TableRowColumn>
                    </TableRow>
                    <TableRow>
                    <TableRowColumn>{question.options[3].text}</TableRowColumn>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
  }
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
    options: {
      padding: 20,
      maxWidth: 400,
    }
});

export default Question;
