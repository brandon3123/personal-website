import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

class Education extends React.Component {

    render() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'educationHeader headerFont'} align={"center"}>
                    Education
                </Typography>
                <Divider className={'centerDivider'}/>
                <Grid container direction={"column"} className={'educationGrid'}>
                    <Grid item>
                        <Timeline align="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className={'timelineDot'}/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant={"h4"} className={'headerFont'}>Oracle</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>OCA,
                                        Java SE 8 Programmer Certificate</Typography>
                                    <Typography variant={"h6"} className={'headerFont'}
                                                color={"textSecondary"}>2018</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className={'timelineDot'}/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant={"h4"} className={'headerFont'}>Sourthern Alberta Institute of
                                        Technology (SAIT) </Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>IT -
                                        Software Development Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2014 -
                                        2016</Typography>
                                </TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot className={'timelineDot'}/>
                                    <TimelineConnector/>
                                </TimelineSeparator>
                                <TimelineContent>
                                    <Typography variant={"h4"} className={'headerFont'}>John G. Diefenbaker High
                                        School </Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>High
                                        School Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2006 -
                                        2009</Typography>
                                </TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Education;