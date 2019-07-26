import React, {Component} from 'react';
import {robots} from '../robots';
import CardList from '../components/CardList';
import Searchbox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundaries from '../components/ErrorBoundaries';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      query: '',
    };
  }

  onSearchChange = event => {
    this.setState({
      query: event.target.value,
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(robots => this.setState({robots: robots}));
  }
  render() {
    var targets = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.query);
    });

    return (
      <div className="tc">
        <h1 className="f1"> RoboFriends </h1>
        <Searchbox onChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundaries>
            <div id="card-grid">
              <CardList robots={targets} />
            </div>
          </ErrorBoundaries>
        </Scroll>
      </div>
    );
  }
}

export default App;
