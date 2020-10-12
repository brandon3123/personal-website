import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import headShot from '../taz.png';

class About extends React.Component {
    render() {
        return <Card>
                <CardMedia style={{height: '300px', width: '300px'}} image={headShot}></CardMedia>
                <CardHeader title={'Brandon Nolan'}></CardHeader>
                <CardContent>
                    <Typography>
                        I am a passionate individual with strong knowledge of Java and other varied skills.
                        I am eager to learn and possess a strong aptitude and interest in software.
                        I am a quick learner with strong communication skills to compliment my technical abilities and work well independently or within a team.
                    </Typography>
                </CardContent>
            </Card>
    }
}

export default About