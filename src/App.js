import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from './common/Menu'
import Home from './pages/Home'
import Weather from './pages/Weather'
import Search from './pages/Search'
import './styles/sassRoute.scss'

const MainLayout = ({ component: Component, ...rest }) => {
  // console.log(...rest)
  const renderFn = (props) => (
    <div className="main-layout">
      <Menu {...rest} {...props} />
      <div className="main-layout--content">
          <Component {...rest} {...props} />
      </div>
    </div>
  )
  return (
    <Route
      {...rest}
      render={renderFn}
    />
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <MainLayout exact path='/' component={Home} />
          <MainLayout path='/search/:keyword' component={Search} />
          <MainLayout path='/weather/:weoid' component={Weather} />
          {/* <Route path='/search/:keyword' component={Search} />
          <Route path='/weather/:weoid' component={Weather} /> */}
        </Switch>
      </Router>
    )
  }
}

export default App
