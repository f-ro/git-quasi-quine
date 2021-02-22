import React from 'react'
import axios from 'axios'
import Commit from './commit'

const api_url = `https://api.github.com/repos`
const user = `f-ro`
const repo = `github-semiquine`

class Commits extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            commits : []
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `${api_url}/${user}/${repo}/commits?sha=main`,
        }).then(resp => {
            this.setState({commits : resp.data})
        })
        .catch(error => console.log('An error occurred during the axios api call'))
    }

    render() {
        const {commits} = this.state
        return <div>{commits.map((d, i) =>
                    <div key={i}>
                        <Commit sha={`${d.sha}`} 
                                author={`${d.commit.author.name}`} 
                                date={`${d.commit.author.date}`} 
                                message={`${d.commit.message}`}/>
                    </div>)}
               </div>
    }
}

export default Commits