import React from 'react';
import Typography from '@material-ui/core/Typography';
import headShot from '../mugShot.png';
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

class About extends React.Component {
    render() {
        return (
            <Box>
                <Grid container alignContent={"center"} justify={"center"} alignItems={"center"}>
                    <Grid item lg={3}>
                        <img style={{height: '700px', width: '400px', alignSelf:"center"}} src={headShot}></img>
                        <Typography variant={"h4"} align={"center"}>Brandon Nolan</Typography>
                    </Grid>
                    <Grid item lg={9} alignItems={"center"} alignContent={"center"}>
                        <Typography align={"center"}>
                            I am a passionate individual with strong knowledge of Java and other varied skills.
                            I am eager to learn and possess a strong aptitude and interest in software.
                            I am a quick learner with strong communication skills to compliment my technical abilities and work well independently or within a team.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        )



    }
}

export default About