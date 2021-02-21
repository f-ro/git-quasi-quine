import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

let api_url = `https://api.github.com/repos`
let user = `f-ro`
let repo = `git-quasi-quine`

function getAllCommitsForMainBranch() {
    axios({
        method: "GET",
        url: `${api_url}/${user}/${repo}/commits?sha=main`,
    }).then(rslt => {console.log(rslt.data)})
}

getAllCommitsForMainBranch() 