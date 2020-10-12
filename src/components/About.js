import React from 'react';
import Typography from '@material-ui/core/Typography';
import headShot from '../taz.png';
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class About extends React.Component {
    render() {
        return <Grid container justify={"center"}>
                <Grid item>
                    <Avatar style={{height: '300px', width: '300px'}} src={headShot}></Avatar>
                </Grid>
                <Grid item>
                    <Typography variant={"h4"}>Brandon Nolan</Typography>
                    <Divider variant={"middle"}></Divider>
                    <Typography>
                        I am a passionate individual with strong knowledge of Java and other varied skills.
                        I am eager to learn and possess a strong aptitude and interest in software.
                        I am a quick learner with strong communication skills to compliment my technical abilities and work well independently or within a team.
                    </Typography>
                </Grid>
            </Grid>
    }
}

export default About