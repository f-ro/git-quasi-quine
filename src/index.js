import React  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import Commits from './components/commits'
import Profile from './components/profile'
import Activity from './components/activity'
import './index.css';

const App = () => 
        <div className='App'>
            <BrowserRouter>
                <Route path='/:page' component={Header} />
                <Route exact path="/" component={Header}/>
                <Route exact path='/commits' component={Commits} />
                <Route exact path='/profile' component={Profile} />
                <Route exact path='/activity' component={Activity} />
            </BrowserRouter>
        </div>

ReactDOM.render(<App/>, document.getElementById('root'))