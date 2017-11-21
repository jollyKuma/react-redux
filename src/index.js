import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import App from './App'
import Dashboard from './components/Dashboard'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path ="/" component={App}/>
        <Route path ="/dashboard" component={Dashboard}/>
      </div>
    </Router>
  </Provider>, document.getElementById('root'));

registerServiceWorker();
