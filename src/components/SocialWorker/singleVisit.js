import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import DeleteVisitButton from './deleteVisitButton'

//needs visit and openEdit Handler as props

const SingleVisit = props => {
    return (
        <div className="visit white">
            <Card className="white">
                <CardContent>
                    <div className="visit-header single-visit-header">
                        <Typography className="date" gutterBottom>
                            Visit Date: {props.visit.visit_date}
                        </Typography>
                        <Typography className="school" gutterBottom>
                            School: {props.visit.school_name}
                        </Typography>
                    </div>
                    <div className="visit-body">
                        <Typography className="text" gutterBottom>
                            {props.visit.notes}
                        </Typography>
                    </div>
                    <div className="visit-footer">
                        <Button variant="outlined" className="edit-btn" onClick={props.openEdit}>
                            Edit
                        </Button>
                        <DeleteVisitButton reload={props.reload} visit={props.visit} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}


export default SingleVisit;