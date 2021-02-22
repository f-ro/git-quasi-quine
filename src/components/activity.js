import React from 'react'
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const user = `f-ro`
const repo = `git-quasi-quine`

class Activity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contributors : [],
            branches : [],
            commits_cnt : 0,
            commits_per_day_quarter : []
        }
    }

    componentDidMount() {
        const start_day = "2021-02-21" //first day of development, d1 below
        const close_day = "2021-02-22" //second day of development, d2 below
        const cst_utc_offset = "-08:00"
        const d1_q1_s = new Date(start_day + "T00:00:00" + cst_utc_offset)
        const d1_q1_e = new Date(start_day + "T05:59:59" + cst_utc_offset)
        const d1_q2_s = new Date(start_day + "T06:00:00" + cst_utc_offset)
        const d1_q2_e = new Date(start_day + "T11:59:59" + cst_utc_offset)
        const d1_q3_s = new Date(start_day + "T12:00:00" + cst_utc_offset)
        const d1_q3_e = new Date(start_day + "T17:59:59" + cst_utc_offset)
        const d1_q4_s = new Date(start_day + "T18:00:00" + cst_utc_offset)
        const d1_q4_e = new Date(start_day + "T23:59:59" + cst_utc_offset)
        const d2_q1_s = new Date(close_day + "T00:00:00" + cst_utc_offset)
        const d2_q1_e = new Date(close_day + "T05:59:59" + cst_utc_offset)
        const d2_q2_s = new Date(close_day + "T06:00:00" + cst_utc_offset)
        const d2_q2_e = new Date(close_day + "T11:59:59" + cst_utc_offset)
        const d2_q3_s = new Date(close_day + "T12:00:00" + cst_utc_offset)
        const d2_q3_e = new Date(close_day + "T17:59:59" + cst_utc_offset)
        const d2_q4_s = new Date(close_day + "T18:00:00" + cst_utc_offset)
        const d2_q4_e = new Date(close_day + "T23:59:59" + cst_utc_offset)

        axios({
            method: "GET",
            url: `https://api.github.com/repos/f-ro/git-quasi-quine/commits?sha=main`,
        }).then(resp => {
            let acc_d1_q1 = 0
            let acc_d1_q2 = 0
            let acc_d1_q3 = 0
            let acc_d1_q4 = 0
            let acc_d2_q1 = 0
            let acc_d2_q2 = 0
            let acc_d2_q3 = 0
            let acc_d2_q4 = 0
            for (let c of resp.data) {
                const d = new Date(c.commit.author.date)
                acc_d1_q1 += d1_q1_s < d && d < d1_q1_e ? 1 : 0
                acc_d1_q2 += d1_q2_s < d && d < d1_q2_e ? 1 : 0
                acc_d1_q3 += d1_q3_s < d && d < d1_q3_e ? 1 : 0
                acc_d1_q4 += d1_q4_s < d && d < d1_q4_e ? 1 : 0
                acc_d2_q1 += d2_q1_s < d && d < d2_q1_e ? 1 : 0
                acc_d2_q2 += d2_q2_s < d && d < d2_q2_e ? 1 : 0
                acc_d2_q3 += d2_q3_s < d && d < d2_q3_e ? 1 : 0
                acc_d2_q4 += d2_q4_s < d && d < d2_q4_e ? 1 : 0
            }
            this.setState({
                commits_cnt : resp.data.length,
                commits_per_day_quarter : [
                    {name:'2/21(0-6)', uv:acc_d1_q1},
                    {name:'(6-12)',    uv:acc_d1_q2},
                    {name:'(12-18)',   uv:acc_d1_q3},
                    {name:'(18-24)',   uv:acc_d1_q4},
                    {name:'2/22(0-6)', uv:acc_d2_q1},
                    {name:'(6-12)',    uv:acc_d2_q2},
                    {name:'(12-18)',   uv:acc_d2_q3},
                    {name:'(18-24)',   uv:acc_d2_q4}]})
        })
        .catch(error => console.log('An error occurred during the axios api call'))

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
        const {contributors, branches, commits_cnt, commits_per_day_quarter} = this.state
        return (
            <div>
                <div>
                    <p>
                        {contributors.length > 0 ? `${contributors.length} contributor${contributors.length > 1 ? 's' : ''}`  : '(Retrieving contributor list)'}:
                        {contributors.map((d, i) => ` ${d.login}`)}
                    </p>
                </div>
                <div><p>Branches created: {branches.length > 0 ? branches.map((v) => v.name).join(', ') : '(Retrieving branches)'}</p></div>
                <div><p>Commits made: {commits_cnt > 0 ? commits_cnt : '(Retrieving commit info)'}</p></div>
                <div>Commits per day and hour range:
                <LineChart width={600} height={300} data={commits_per_day_quarter}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </div>
            </div>
        )
    }
}

export default Activity