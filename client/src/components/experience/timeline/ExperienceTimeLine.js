import React from 'react';
import ExperienceLeftUlTag from "../shared/ExperienceLeftUlTag";
import TimeLineContent from "../../common/timeline/TimeLineContent";
import TimeLineLeft from "../../common/timeline/TimeLineLeft";
import TimeLinePoint from "../../common/timeline/TimeLinePoint";
import TimeLineRight from "../../common/timeline/TimeLineRight";
import ExperienceListItem from "../shared/ExperienceListItem";
import TimeLine from "../../common/timeline/TimeLine";

class ExperienceTimeLine extends React.Component {
    render() {
        return (
            <TimeLine timeLineId={'experience-timeline'}>
                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-110'}>
                        <TimeLinePoint organization={'New Relic'}
                                       detail={'Software Engineer II'}
                                       timePeriod={'December 2022 - Present'}/>
                    </TimeLineLeft>
                    <TimeLineRight>
                        <ul className={'pad-line-start-sm-0'}>
                            <ExperienceListItem>
                                <i className={'headerFont'}>Back-end</i> developer for the alerts configuration team. Responsible for multiple services
                                in New Relics distributed alerting architecture and Terraform provider, utilizing:
                                <i className={'headerFont'}> Java/Kotlin, Spring, Kafka, Postgres, AWS, Terraform, Jenkins.</i>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Championed multiple features and initiatives with full project ownership, including
                                technical scoping, identifying limitations, creating Jira epics, and implementing code.
                                These included:
                                <ul>
                                    <ExperienceListItem>
                                        Eliminating archived alert conditions from our databases. Removing upwards of <i className={'headerFont'}>2
                                        billion</i> redundant records across all environments and reducing storage capacity
                                        by <i className={'headerFont'}>98%</i>. This was completed smoothly with zero customer impact or any
                                        production incidents.
                                    </ExperienceListItem>
                                    <ExperienceListItem>
                                        Completed the <i className={'headerFont'}>Slow Burn Alerts</i> initiative. Allowing users to configure alert
                                        conditions for incidents that are not as time sensitive and span over a far wider
                                        aggregation window.
                                    </ExperienceListItem>
                                    <ExperienceListItem>
                                        Successfully delivered an <i className={'headerFont'}>Incident Title Template</i> feature which allowed users to
                                        configure a <i className={'headerFont'}>Handlebars</i> template for their alert conditions. Enabling users to
                                        customize the title given to an active incident for a violating alert condition.
                                    </ExperienceListItem>
                                </ul>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Introduced <i className={'headerFont'}>service levels</i> for my team, configured with <i className={'headerFont'}>Terraform</i>. Improving
                                accountability for our services and setting up alerts for any SLO violations.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Introduced <i className={'headerFont'}>local runs</i> for our back-end services. Greatly enhancing the speed of
                                development and allowing new hires and other developers to work inside our services
                                effectively.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Contributed to the full stack development process by assisting on the front-end.
                                Implementing new functionality and improving upon the existing code-base, leveraging
                                <i className={'headerFont'}> React, Redux, TypeScript.</i>
                            </ExperienceListItem>
                        </ul>
                    </TimeLineRight>
                </TimeLineContent>
                <TimeLineContent>
                    <TimeLineRight styleName={'content-left pad-left-110'}>
                        <TimeLinePoint organization={'Hootsuite'}
                                       detail={'Software Developer'}
                                       timePeriod={'July 2021 - December 2022'}/>
                    </TimeLineRight>
                    <TimeLineLeft>
                        <ExperienceLeftUlTag>
                            <ul className={'pad-line-start-sm-0'}>
                                <ExperienceListItem>
                                    Back-end developer on the Plan & Create team. Responsible for multiple repositories
                                    inside the Hootsuite micro-services
                                    architecture, leveraging
                                    <i className={'headerFont'}> Java/Scala, Akka, MySQL, Mongo, Cats, Monix,
                                        Jenkins.</i>
                                </ExperienceListItem>
                                <ExperienceListItem>
                                    Acted as an <i className={'headerFont'}>“Epic Champion”</i>, providing complete
                                    technical ownership for multiple
                                    projects. Releasing quality functionality to
                                    hundreds of thousands of users. Responsibilities included:
                                    <ul>
                                        <ExperienceListItem>
                                            Scoping technical requirements across all our back-end micro-services,
                                            identifying limitations, performance concerns and
                                            required functionality.
                                        </ExperienceListItem>
                                        <ExperienceListItem>
                                            Effectively collaborating with other developers/product
                                            managers/designers. Ensuring project cohesion and aligning
                                            expectations.
                                        </ExperienceListItem>
                                        <ExperienceListItem>
                                            Creating/grooming entire <i className={'headerFont'}>JIRA</i> epics/tickets.
                                            Ensuring all requirements are flushed out and estimated.
                                        </ExperienceListItem>
                                        <ExperienceListItem>
                                            Creating extensive <i className={'headerFont'}>QA/UAT</i> plans. Effectively
                                            eliminating any major issues and surprises for releases.
                                        </ExperienceListItem>
                                    </ul>
                                </ExperienceListItem>
                                <ExperienceListItem>
                                    Created automated <i className={'headerFont'}>API</i> integration tests for new and
                                    existing functionality.
                                </ExperienceListItem>
                                <ExperienceListItem>
                                    Assumed the role of a technical coach for junior developers, providing
                                    mentor-ship/pair programming and general assistance to
                                    ensure their career development flourished.
                                </ExperienceListItem>
                                <ExperienceListItem>
                                    Contributed to the full stack development process by assisting on the front-end.
                                    Implementing new functionality and improving
                                    upon the existing code-base, leveraging <i className={'headerFont'}>React, Redux,
                                    TypeScript.</i>
                                </ExperienceListItem>
                                <ExperienceListItem>
                                    Triaged and addressed production issues, eliminating client frustrations and
                                    improving future processes with timely bug fixes
                                    and work arounds.
                                </ExperienceListItem>
                            </ul>
                        </ExperienceLeftUlTag>
                    </TimeLineLeft>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-110'}>
                        <TimeLinePoint organization={'Strata Health Solutions'}
                                       detail={'Software Developer'}
                                       timePeriod={'July 2016 - July 2021'}/>
                    </TimeLineLeft>
                    <TimeLineRight>
                        <ul className={'pad-line-start-sm-0'}>
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
            </TimeLine>
        );
    }
}

export default ExperienceTimeLine;