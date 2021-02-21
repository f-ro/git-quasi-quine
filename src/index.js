import React  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/header'
import Commits from './components/commits'

const App = () => 
        <div className='App'>
            <BrowserRouter>
                <Route path='/:page' component={Header} />
                <Route exact path="/" component={Header}/>
                <Route exact path='/commits' component={Commits} />
            </BrowserRouter>
        </div>

ReactDOM.render(<App/>, document.getElementById('root'))