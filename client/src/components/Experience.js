import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ExperienceUlTag from "./ExperienceUlTag";

class Experience extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                    Experience
                </Typography>
                <Divider className={'centerDivider'}/>
                <section id="experience-timeline" className={'time-line-section'}>
                    <div className="conference-center-line"></div>
                    <div className="experience-timeline-content">
                        <div className="timeline-article">
                            <div className="content-left-container">
                                <div className="content-left pad-left-120">
                                    <Typography className={'headerFont'} variant={'h4'}>Strata Health Solutions</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>Software
                                        Developer</Typography>
                                    <Typography variant={"h6"} className={'headerFont'}
                                                color={"textSecondary"}>July 2016 - Present</Typography>
                                </div>
                            </div>
                            <div className="content-right-container">
                                <div className="content-right">
                                    <ul>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Full stack developer on the Integration, Dev-Ops & Product development
                                                teams. Responsible for end-to-end application development, utilizing
                                                <i className={'headerFont'}> Java, JSF, Spring, Spring-Security,
                                                    Spring-Boot, JPA, Maven, Oracle and Postgres.</i>
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Implemented an <i className={'headerFont'}>SSO</i> platform
                                                leveraging <i className={'headerFont'}>Spring Security/Boot</i>,
                                                allowing authentication/authorization by means of <i className={'headerFont'}>OAuth2/OIDC, LDAP, Active
                                                Directory, SAML 2</i>.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Championed integration projects with external vendors by reviewing
                                                technical documentation and meeting with clients.
                                                Translating their business requirements into projects tailored to
                                                specification.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Provided day-to-day production support for client integration interfaces
                                                and applications across Canada, UK and USA. Addressing all issues found
                                                with efficient solutions or workarounds.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Developed and maintained exceptional <i className={'headerFont'}>REST
                                                API's</i>, leveraging <i className={'headerFont'}>Java, JavaScript,
                                                JSON, XML, TCP, HTTP, JAX-RS, Jersey and Rhapsody.</i>
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Created extensive documentation, including <i className={'headerFont'}>API
                                                Swagger</i> Docs, interface workflows/specifications and general
                                                'how-to' and training documentation for internal staff.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Trained new staff and provided mentorship to existing team members.
                                                Sharing knowledge and expertise across the development team.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Effectively practiced <i className={'headerFont'}>Agile</i> development
                                                methodologies, participating in daily stand-ups, sprint-kick offs and
                                                grooming sessions.
                                            </Typography>
                                        </li>
                                        <li>
                                            <Typography className={'informationFont experienceText'}>
                                                Contributed to innovation through the migration of legacy code to modern
                                                frameworks.
                                            </Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="meta-date"></div>
                        </div>

                        <div className="timeline-article">
                            <div className="content-right-container">
                                <div className="content-right">
                                    <Typography variant={"h4"} className={'headerFont'}>Calgary Prairie Rose Progress
                                        Club</Typography>
                                    <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>Web
                                        Developer</Typography>
                                    <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>November
                                        2015 - Present</Typography>
                                </div>
                            </div>
                            <div className="content-left-container">
                                <div className="content-left">
                                    <ExperienceUlTag/>
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

export default Experience;