import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Camera from './components/Camera';
import Leaderboard from './components/Leaderboard';
import Rewards from './components/Rewards';
import UserProfile from './components/UserProfile';
import './styles/App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Trash2Treasure</h1>
                <nav>
                    <a href="/">Camera</a>
                    <a href="/leaderboard">Leaderboard</a>
                    <a href="/rewards">Rewards</a>
                    <a href="/profile">Profile</a>
                </nav>
            </header>
            <Switch>
                <Route path="/" exact component={Camera} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/rewards" component={Rewards} />
                <Route path="/profile" component={UserProfile} />
            </Switch>
        </div>
    );
}

export default App;
