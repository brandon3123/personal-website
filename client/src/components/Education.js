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
import { withStyles } from '@material-ui/core/styles';
import {useMediaQuery, useTheme} from "@material-ui/core";
import ResponsiveInstituteName from "./ResponsiveInstituteName";

const useStyles = theme => ({
    timeLineInstitute: {
        color:"red"
    },
});

function Education() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'educationHeader headerFont'} align={"center"}>
                    Education
                </Typography>
                <Divider className={'centerDivider'}/>
                <section id="conference-timeline" >
                    <div className="conference-center-line"></div>
                    <div className="conference-timeline-content">
                        <div className="timeline-article">
                            <div className="content-right-container">
                                <div className="content-right">
                                    <ResponsiveInstituteName value={'Oracle'} />
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>OCA,
                                        Java SE 8 Programmer Certificate</Typography>
                                    <Typography variant={"h6"} className={'headerFont'}
                                                color={"textSecondary"}>2018</Typography>
                                </div>
                            </div>
                            <div className="meta-date"></div>
                        </div>
                        <div className="timeline-article">
                            <div className="content-left-container">
                                <div className="content-left">
                                    <ResponsiveInstituteName value={'Sourthern Alberta Institute of Technology (SAIT)'} />
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>IT -
                                        Software Development Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2014 -
                                        2016</Typography>
                                </div>
                            </div>
                            <div className="meta-date">
                            </div>
                        </div>
                        <div className="timeline-article">
                            <div className="content-right-container">
                                <div className="content-right">
                                    <ResponsiveInstituteName value={'John G. Diefenbaker High School'} />
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>High
                                        School Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2006 -
                                        2009</Typography>
                                </div>
                            </div>
                            <div className="meta-date">
                            </div>
                        </div>
                    </div>
                </section>






                {/*<div className="timeline">*/}
                {/*    <div className="container right">*/}
                {/*        <div className="content">*/}
                {/*            <ResponsiveInstituteName value={'Oracle'} />*/}
                {/*            <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>OCA,*/}
                {/*                Java SE 8 Programmer Certificate</Typography>*/}
                {/*            <Typography variant={"h6"} className={'headerFont'}*/}
                {/*                        color={"textSecondary"}>2018</Typography>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="container left">*/}
                {/*        <div className="content">*/}
                {/*            <ResponsiveInstituteName value={'Sourthern Alberta Institute of Technology (SAIT)'} />*/}
                {/*            <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>IT -*/}
                {/*                Software Development Diploma</Typography>*/}
                {/*            <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2014 -*/}
                {/*                2016</Typography>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="container right">*/}
                {/*        <div className="content">*/}
                {/*            <ResponsiveInstituteName value={'John G. Diefenbaker High School'} />*/}
                {/*            <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>High*/}
                {/*                School Diploma</Typography>*/}
                {/*            <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2006 -*/}
                {/*                2009</Typography>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}



                        {/*<Timeline align="alternate">*/}
                        {/*    <TimelineItem>*/}
                        {/*        <TimelineSeparator>*/}
                        {/*            <TimelineDot className={'timelineDot'}/>*/}
                        {/*            <TimelineConnector/>*/}
                        {/*        </TimelineSeparator>*/}
                        {/*        <TimelineContent>*/}
                        {/*            <ResponsiveInstituteName value={'Oracle'} />*/}
                        {/*            <Typography variant={"p"} className={'headerFont'} color={"textSecondary"}>OCA,*/}
                        {/*                Java SE 8 Programmer Certificate</Typography>*/}
                        {/*            <Typography variant={"p"} className={'headerFont'}*/}
                        {/*                        color={"textSecondary"}>2018</Typography>*/}
                        {/*        </TimelineContent>*/}
                        {/*    </TimelineItem>*/}
                        {/*    <TimelineItem>*/}
                        {/*        <TimelineSeparator>*/}
                        {/*            <TimelineDot className={'timelineDot'}/>*/}
                        {/*            <TimelineConnector/>*/}
                        {/*        </TimelineSeparator>*/}
                        {/*        <TimelineContent>*/}
                        {/*            <ResponsiveInstituteName value={'Sourthern Alberta Institute of Technology (SAIT)'} />*/}
                        {/*            <Typography variant={"p"} className={'headerFont'} color={"textSecondary"}>IT -*/}
                        {/*                Software Development Diploma</Typography>*/}
                        {/*            <Typography variant={"p"} className={'headerFont'} color={"textSecondary"}>2014 -*/}
                        {/*                2016</Typography>*/}
                        {/*        </TimelineContent>*/}
                        {/*    </TimelineItem>*/}
                        {/*    <TimelineItem>*/}
                        {/*        <TimelineSeparator>*/}
                        {/*            <TimelineDot className={'timelineDot'}/>*/}
                        {/*            <TimelineConnector/>*/}
                        {/*        </TimelineSeparator>*/}
                        {/*        <TimelineContent>*/}
                        {/*            <ResponsiveInstituteName value={'Sourthern Alberta Institute of Technology (SAIT)'} />*/}
                        {/*            <Typography variant={"p"} className={'headerFont'}>John G. Diefenbaker High School </Typography>*/}
                        {/*            <Typography variant={"p"} className={'headerFont'} color={"textSecondary"}>High*/}
                        {/*                School Diploma</Typography>*/}
                        {/*            <Typography variant={"p"} className={'headerFont'} color={"textSecondary"}>2006 -*/}
                        {/*                2009</Typography>*/}
                        {/*        </TimelineContent>*/}
                        {/*    </TimelineItem>*/}
                        {/*</Timeline>*/}
            </Container>
        )
}

export default withStyles(useStyles)(Education);