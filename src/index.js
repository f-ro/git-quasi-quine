import React  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import Commits from './components/commits'
import Profile from './components/profile'

const App = () => 
        <div className='App'>
            <BrowserRouter>
                <Route path='/:page' component={Header} />
                <Route exact path="/" component={Header}/>
                <Route exact path='/commits' component={Commits} />
                <Route exact path='/profile' component={Profile} />
            </BrowserRouter>
        </div>

ReactDOM.render(<App/>, document.getElementById('root'))