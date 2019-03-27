import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class SingleVisit extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
        date: "",
        note: ""
        }
    }

    componentDidMount() {
        const arr = props.params.match(/\d+$/);
        const id = arr[0]
        axios.get(`http://18.188.246.0:9000/api/social_worker_visits/${id}`)
            .then(res => {
                this.setState({ date: {res.data.date}, note: {res.data.note} })
            })
            .catch(err => {
                console.log(err.message)
            })
    }


    render() {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.state.date}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {this.state.note}
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}


export default SingleVisit;