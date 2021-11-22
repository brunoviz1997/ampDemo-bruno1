import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid, CardActionArea, Paper } from "@material-ui/core";
import useStyles from "./styles"

const AboutUs = () => {
    const classes = useStyles();
    const students = [
        { name: "Sebastian", position: "Front End Programmer", major: "BS in Cybersecurity" },
        { name: "Jared", position: "Front End Programmer", major: "BS in Cybersecurity" },
        { name: "Bruno", position: "Front End Programmer", major: "BS in Cybersecurity" },
        { name: "Bryce", position: "Front End Programmer", major: "BS in Cybersecurity" }
    ]

    return (
        // style={{width: "70%", margin:"80px" }}
        <div>
            <br />
            <br />
          
            <Card>
                <CardContent>
                    <Typography style={{ textAlign: "center" }} gutterBottom variant="h3">About Cybernoobs</Typography>
                    <Typography variant="body2">Our mission is to blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah </Typography>
                </CardContent>
            
            </Card>

            <br />
            <Typography className={classes.studentsHeader} variant="h3" > Who we are</Typography>

            <Grid style={{}} container justifyContent="center" spacing={students.length} xs={12}>
                {students.map(student => (
                    <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image="data:image/png;base64,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"
                                alt="student"
                                />
                            <CardContent className={classes.root}>
                                <Typography variant="h5">{student.name}</Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">{student.position}</Typography>
                                <Typography variant="body2" > {student.major}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Grid>
                ))}
            </Grid>
        </div>

    )
}

export default AboutUs;
