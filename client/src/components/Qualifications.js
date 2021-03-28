import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Qualifications extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'qualificationsHeader headerFont'} align={"center"}>
                    Qualifications
                </Typography>
                <Divider className={'centerDivider'}/>
                <section id="conference-timeline" className={'time-line-section'}>
                    <div className="conference-center-line"></div>
                    <div className="timeline-article">
                        <div className="content-right-container">
                            <div className="content-right">
                                <Typography className={'headerFont'} variant={'h4'}>Amazon Web Services (AWS)</Typography>
                                <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>AWS Certified Developer Associate Certificate</Typography>
                                <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2021</Typography>
                            </div>
                        </div>
                        <div className="meta-date">
                        </div>
                    </div>
                    <div className="conference-timeline-content">
                        <div className="timeline-article">
                            <div className="content-left-container">
                                <div className="content-left pad-left-70">
                                    <Typography className={'headerFont'} variant={'h4'}>Oracle</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>OCA, Java SE 8 Programmer Certificate</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2018</Typography>
                                </div>
                            </div>
                            <div className="meta-date"></div>
                        </div>
                        <div className="timeline-article">
                            <div className="content-right-container">
                                <div className="content-right">
                                    <Typography className={'headerFont'} variant={'h4'}>Southern Alberta Institute of Technology (SAIT)</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>IT - Software Development Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2014 - 2016</Typography>
                                </div>
                            </div>
                            <div className="meta-date">
                            </div>
                        </div>
                        <div className="timeline-article">
                            <div className="content-left-container">
                                <div className="content-left pad-left-70">
                                    <Typography className={'headerFont'} variant={'h4'}>John G. Diefenbaker High School</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>High School Diploma</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2006 - 2009</Typography>
                                </div>
                            </div>
                            <div className="meta-date">
                            </div>
                        </div>
                    </div>
                </section>
            </Container>
        )
    }
}

export default Qualifications;