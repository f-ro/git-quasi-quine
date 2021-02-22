import React from 'react'
import axios from 'axios'

const user = `f-ro`
const repo = `git-quasi-quine`

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description : '',
            owner_login : '',
            owner_html_url : '',
            owner_avatar_url : ''
        }
    }

    componentDidMount() {
        axios({
            method: "GET",
            url: `https://api.github.com/search/repositories?q=${repo}&user=${user}`,
        }).then(resp => {
            const d = resp.data.items[0]
            this.setState({
                description : d.description,
                owner_login : d.owner.login,
                owner_html_url : d.owner.html_url,
                owner_avatar_url : d.owner.avatar_url})
        })
        .catch(error => console.log('An error occurred during the axios api call'))
    }

    render() {
        const {description, owner_avatar_url, owner_login, owner_html_url} = this.state
        return (
            <div>
                <div><p>{description}</p></div>
                <div><p>Project Owner: <a href={owner_html_url}>{owner_login}</a></p></div>
                <div><img src={owner_avatar_url} style={{width:75, height:75}}/></div>
            </div>
        )
    }
}

export default Profile