import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

// import {robots} from './robots';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield : ""
        }
        console.log('constructor');
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
        
        console.log('componentDidMount');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render () {
        const { robots } = this.state;
        const filteredRobots = robots.filter(robot => {
                return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log('render');
        if (robots.length === 0) {
            return <h1 className="tc">Loading</h1>
        } else {
            return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={ this.onSearchChange }/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={ filteredRobots }/>
                    </ErrorBoundary>
                </Scroll>
            </div>
            );
        }
    }
}

export default App;