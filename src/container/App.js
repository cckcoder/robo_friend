import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardList from '../component/CardList'
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll'
import ErrorBoundry from '../component/ErrorBoundry'
import './App.css'
import { setSearchField } from '../action'

const mapStatetoProps = state => {
  return {
    searchField: state.searchRobots.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      'robots': [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({'robots':users}))
  }

  render() {
    const { robots } = this.state
    const { searchField, onSearchChange } = this.props

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })

    if (! robots.length) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f2'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(App)

