import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './paginas/Home'
import Sobre from './paginas/Sobre'
import Page404 from './paginas/Page-404'
import Header from './components/Header'
import './assets/css/base/base.css'
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </ Switch>
    </Router>
  )
}

export default App