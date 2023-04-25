import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


export default function Details() {
    return (
        <>
            <div className='container mt-2'>
                <Card>
                    <div className='row'>
                        <div className='col-3 mt-2 mb-2 ml-2 mr-2'>
                            <CardMedia
                                style={{ height: '99%', width: '70%', paddingTop: '1.25%', paddingLeft: '1.25%' }}
                                image="https://via.placeholder.com/150"
                                title="User Profile Picture"
                            />
                        </div>
                        <div className='col-8'>
                            <CardContent>
                                <h3>Manish Yadav</h3>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong> Name:</strong> John Doe
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong>Email:</strong> johndoe@example.com
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong> Mobile:</strong> +1 1234567890
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong> Address:</strong> 123 Main St, Anytown USA 12345
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <strong> Occupation:</strong> Software Engineer
                                </Typography>
                            </CardContent>
                        </div>
                    </div>

                </Card>

            </div>
        </>
    );
}

