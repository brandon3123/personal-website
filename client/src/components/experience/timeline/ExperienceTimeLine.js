import React from 'react';
import ExperienceLeftUlTag from "../shared/ExperienceLeftUlTag";
import TimeLineContent from "../../common/timeline/TimeLineContent";
import TimeLineLeft from "../../common/timeline/TimeLineLeft";
import TimeLinePoint from "../../common/timeline/TimeLinePoint";
import TimeLineRight from "../../common/timeline/TimeLineRight";
import ExperienceListItem from "../shared/ExperienceListItem";
import TimeLine from "../../common/timeline/TimeLine";

class ExperienceTimeLine extends React.Component{
    render() {
        return (
            <TimeLine timeLineId={'experience-timeline'}>
                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-80'}>
                        <TimeLinePoint organization={'Strata Health Solutions'}
                                       detail={'Software Developer'}
                                       timePeriod={'July 2016 - Present'}/>
                    </TimeLineLeft>
                    <TimeLineRight>
                        <ul>
                            <ExperienceListItem>
                                Full stack developer on the Integration, Dev-Ops & Product development
                                teams. Responsible for end-to-end application development, utilizing
                                <i className={'headerFont'}> Java, JSF, Spring, Spring-Security,
                                    Spring-Boot, JPA, Maven, Oracle and Postgres.</i>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Implemented an <i className={'headerFont'}>SSO</i> platform
                                leveraging <i className={'headerFont'}>Spring Security/Boot</i>,
                                allowing authentication/authorization by means of <i className={'headerFont'}>OAuth2/OIDC,
                                LDAP, Active
                                Directory, SAML 2</i>.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Championed integration projects with external vendors by reviewing
                                technical documentation and meeting with clients.
                                Translating their business requirements into projects tailored to
                                specification.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Provided day-to-day production support for client integration interfaces
                                and applications across Canada, UK and USA. Addressing all issues found
                                with efficient solutions or workarounds.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Developed and maintained exceptional <i className={'headerFont'}>REST
                                API's</i>, leveraging <i className={'headerFont'}>Java, JavaScript,
                                JSON, XML, TCP, HTTP, JAX-RS, Jersey and Rhapsody.</i>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Created extensive documentation, including <i className={'headerFont'}>API
                                Swagger</i> Docs, interface workflows/specifications and general
                                'how-to' and training documentation for internal staff.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Trained new staff and provided mentorship to existing team members.
                                Sharing knowledge and expertise across the development team.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Effectively practiced <i className={'headerFont'}>Agile</i> development
                                methodologies, participating in daily stand-ups, sprint-kick offs and
                                grooming sessions.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Contributed to innovation through the migration of legacy code to modern
                                frameworks.
                            </ExperienceListItem>
                        </ul>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineRight>
                        <TimeLinePoint organization={'Calgary Prairie Rose Progress Club'}
                                       detail={'Web Developer'}
                                       timePeriod={'November 2015 - Present'}/>
                    </TimeLineRight>
                    <TimeLineLeft>
                        <ExperienceLeftUlTag/>
                    </TimeLineLeft>
                </TimeLineContent>
            </TimeLine>
        );
    }
}

export default ExperienceTimeLine;