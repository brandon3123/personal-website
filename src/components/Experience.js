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
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';



class Experience extends React.Component{

    render() { return (
        <Container className={'experienceContainer'}>
            <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                Experience
                {/*<Divider className={'experienceDivider'} />*/}
            </Typography>

            <Grid container direction={"column"} className={'experienceGrid'}>
                <Grid item>
                    <Timeline>
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant={"h4"} className={'headerFont'}>Strata Health Solutions</Typography>
                                <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>Software Developer</Typography>
                                <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>July 2016 - Present</Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot className={'timelineDot'} />
                                <TimelineConnector style={{marginBottom:-70}}/>
                            </TimelineSeparator>
                            <TimelineContent>
                                    <ul>
                                        <li >
                                            <Typography className={'informationFont experienceText'}>
                                                Full stack developer on the Integration, Dev-Ops & Product development teams. Responsible for end-to-end application and REST API's utilizing
                                                <i className={'headerFont'}> Java, JSF, Spring, Spring-Security, Spring-Boot, JPA, Maven, Oracle and Postgres.</i>
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Implemented an  <i className={'headerFont'}>SSO</i> platform leveraging  <i className={'headerFont'}>Spring Security/Boot</i>, allowing authentication/authorization
                                                by means of <i className={'headerFont'}>OAuth2/OIDC, LDAP, Active Directory, SAML 2</i>.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Championed integration projects with external vendors by reviewing technical documentation and meeting with clients.
                                                Translating their business requirements into projects tailored to specification.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Provided day-to-day production support for client integration interfaces and applications across Canada, UK and USA. Addressing all issues found with efficient solutions or workarounds.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Developed and maintained exceptional <i className={'headerFont'}>REST API's</i>, leveraging  <i className={'headerFont'}>Java, JavaScript, JSON, XML, TCP, HTTP, JAX-RS, Jersey and Rhapsody.</i>
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Created extensive documentation, including <i className={'headerFont'}>API Swagger</i> Docs, interface workflows/specifications and general 'how-to' and training documentation for internal staff.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Trained to new staff, and provided mentorship to existing team members. Sharing knowledge and expertise across the development team.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Effectively practiced <i className={'headerFont'}>Agile</i> development methodologies, participating in daily stand-ups, sprint-kick offs and grooming sessions.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Contributed to innovation through the migration of legacy code to modern frameworks.
                                            </Typography>
                                        </li>
                                    </ul>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem >
                            <TimelineOppositeContent>
                                <br/><br/><br/><br/>
                                <ul className={'rtlList'}>
                                    <li>
                                        <Typography className={'informationFont experienceText'}>
                                            On-going contract position. Providing timely and efficient website maintenance.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className={'informationFont experienceText'}>
                                            Implemented a complete website re-design and modernization, utilizing <i className={'headerFont'}>WordPress</i>.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography className={'informationFont experienceText'}>
                                            Introduced new features for client, including CMS, email contact, calendar events and a photo gallery.
                                        </Typography>
                                    </li>
                                </ul>
                            </TimelineOppositeContent>
                            <TimelineSeparator style={{paddingTop:70}}>
                                <TimelineDot className={'timelineDot'}/>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <br/>
                                <br/><br/>
                                <Typography variant={"h4"} className={'headerFont'}>Calgary Prairie Rose Progress Club</Typography>
                                <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>Web Developer</Typography>
                                <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>November 2015 - Present</Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Grid>
            </Grid>
        </Container>

    )
    }
}

export default Experience;