import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Menu from './components/Menu';
import Register from './components/Register';
import Login from './components/Login';
import Alert from './components/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

function App() {
  return (
    <Provider store = { store }>
    <Router>
    <Fragment>
      <Menu />
      <Route exact path ='/' component={Main} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </section>
    </Fragment>
</Router>
</Provider>
  );
}

export default App;
