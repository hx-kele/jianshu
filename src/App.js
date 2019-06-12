import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import store from './store/index'

import Header from './common/header/index'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login/index'
import Write from './pages/write/index'

import { GlobalStyle } from './style'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
