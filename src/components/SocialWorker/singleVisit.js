import React from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DeleteVisitButton from './deleteVisitButton'

//needs visit and openEdit Handler as props

const SingleVisit = props => {
    return (
        <Card>
            <CardContent>
                <div className="visit-header">
                    <Typography color="textSecondary" gutterBottom>
                        {props.visit.visit_date}
                    </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        {props.visit.school}
                    </Typography>
                </div>
                <div className="visit-body">
                    <Typography color="textSecondary" gutterBottom>
                        {props.visit.notes}
                    </Typography>
                </div>
                <div className="visit-footer">
                    <Button variant="outlined" color="red" onClick={props.openEdit}>
                        Edit
                    </Button>
                    <DeleteVisitButton visit={props.visit} />
                </div>
            </CardContent>
        </Card>
    );
}


export default SingleVisit;