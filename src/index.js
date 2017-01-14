import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory ,IndexRedirect} from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux'
import store from './redux/store';
import App from './App';
import Quiz from './containers/Quiz/Quiz';
import './index.css';



const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
           <IndexRedirect to="quiz"/>
           <Route path="quiz" component={Quiz}/>
           <Route path='*' component={Quiz}/>
        </Route>
      </Router>
    </Provider>
  ,
  document.getElementById('root')
);
