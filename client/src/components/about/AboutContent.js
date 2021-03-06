import React from 'react';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";

class AboutContent extends React.Component{
    render() {
        return (
            <Card variant={"outlined"}>
                <CardContent>
                    <Typography variant={'h2'} align={"center"} className={'aboutMeHeader headerFont'}>
                        Brandon Nolan
                        <Divider variant={"middle"} />
                    </Typography>

                    <Typography align={"center"} className={'aboutMeText informationFont'}>
                        Hello! Thank you for taking the time to visit my website! My name is Brandon Nolan, I am
                        a born and raised Calgarian. I have been working as a software developer since 2016 after
                        graduating from the Information Technology - Software Development program at the Southern Alberta Institute of Technology (SAIT).

                        <br/><br/>

                        I am a passionate individual with strong knowledge of Java and other varied skills. I am eager to
                        learn and possess a strong aptitude and interest in software. I am a quick learner with
                        strong communication skills to compliment my technical abilities and work well independently or within a team.

                        <br/><br/>

                        Outside of work I like to keep active by cycling, snowboarding, rock climbing or any other
                        physical activity. I also enjoy learning new frameworks and anything software related.
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default AboutContent;