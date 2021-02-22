import React from 'react'
import axios from 'axios'

const user = `f-ro`
const repo = `git-quasi-quine`

class Activity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contributors : [],
            branches : []
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `https://api.github.com/repos/${user}/${repo}/contributors`,
        }).then(resp => {
            this.setState({contributors : resp.data})
        })
        .catch(error => console.log('An error occurred during the axios api call'))

        axios({
            method: "GET",
            url: `https://api.github.com/repos/${user}/${repo}/branches`,
        }).then(resp => {
            this.setState({branches : resp.data})
        })
        .catch(error => console.log('An error occurred during the axios api call'))
    }

    render() {
        const {contributors, branches} = this.state
        return (
            <div>
                <div>
                    <p>
                        {contributors.length > 0 ? `${contributors.length} contributor${contributors.length > 1 ? 's' : ''}`  : '(Retrieving contributor list)'}:
                        {contributors.map((d, i) => d.login)}
                    </p>
                </div>
                <div><p>Branches: {branches.length > 0 ? branches[0].name : '(Retrieving branches)'}</p></div>
            </div>
        )
    }
}

export default Activity