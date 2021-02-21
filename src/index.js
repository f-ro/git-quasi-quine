import React  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Commits from './components/commits'

const App = () => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Commits}/>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))