import React from 'react'
import './commit.css';

const Commit = ({sha, author, date, message}) =>
    <div className='commit'>
        <div>{message}</div>
        <div>By: {author}, on {new Date(date).toString()}</div>
        <div>{sha}</div>
    </div>

export default Commit