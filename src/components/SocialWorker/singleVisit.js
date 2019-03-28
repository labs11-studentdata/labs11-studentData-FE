import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class SingleVisit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        date: "",
        note: ""
        }
    }

    componentDidMount() {
        const arr = this.props.params.match(/\d+$/);
        const id = arr[0]
        axios.get(`http://18.188.246.0:9000/api/social_worker_visits/${id}`)
            .then(res => {
                this.setState({ date: res.data.date, note: res.data.note })
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    render() {
        return (
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {this.state.date}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {this.state.note}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}


export default SingleVisit;