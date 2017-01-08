import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Score extends Component {

  
  render() {
    const score = {
       saving: 0,
       loan: 0,
       totalIncome: 0,
       emi: 0,
       netIncome:0
    };
    const market = {
        realEstateIndex: 1.0,
        interestRate: 6.0,
        status: 'The market is going up'
    }
    return (
        <div className={css(styles.container)}>
          <div className={css(styles.column)}>
            <span>Savings: {score.saving}</span>
            <span>Total Loans: {score.loan}</span>
            <span>Total Monthly Income: {score.totalIncome}</span>
            <span>EMI: {score.emi}</span>
            <span>Net Monthly Income: {score.netIncome}</span>
          </div>
          <div className={css(styles.column)}>
            <span>Real Estate Index: {market.realEstateIndex}</span>
            <span>Interest Rate: {market.interestRate}</span>
            <span>{market.status}</span>
          </div>
        </div>
    );
  }
}

const styles = StyleSheet.create({
    container: {
       display: 'flex',
       flexDirection: 'row',
       flexWrap: 'wrap',
       justifyContent:'space-between'
    },
    column: {
       display: 'flex',
       flexDirection: 'column',
       padding: 10
    }
});

