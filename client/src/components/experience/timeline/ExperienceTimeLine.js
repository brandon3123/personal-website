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
                        <TimeLinePoint organization={'Hootsuite'}
                                       detail={'Software Developer'}
                                       timePeriod={'July 2021 - Present'}/>
                    </TimeLineLeft>
                    <TimeLineRight>
                        <ul className={'pad-line-start-sm-0'}>
                            <ExperienceListItem>
                                Back-end developer on the Plan & Create team. Responsible for multiple repositories
                                inside the Hootsuite micro-services
                                architecture, leveraging
                                <i className={'headerFont'}> Java/Scala, Akka, MySQL, Mongo, Cats, Monix, Jenkins.</i>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Acted as an <i className={'headerFont'}>“Epic Champion”</i>, providing complete technical ownership for multiple
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
                                        Creating/grooming entire <i className={'headerFont'}>JIRA</i> epics/tickets. Ensuring all requirements are flushed out and estimated.
                                    </ExperienceListItem>
                                    <ExperienceListItem>
                                        Creating extensive <i className={'headerFont'}>QA/UAT</i> plans. Effectively eliminating any major issues and surprises for releases.
                                    </ExperienceListItem>
                                </ul>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Created automated <i className={'headerFont'}>API</i> integration tests for new and existing functionality.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Assumed the role of a technical coach for junior developers, providing mentor-ship/pair programming and general assistance to
                                ensure their career development flourished.
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Contributed to the full stack development process by assisting on the front-end. Implementing new functionality and improving
                                upon the existing code-base, leveraging <i className={'headerFont'}>React, Redux, TypeScript.</i>
                            </ExperienceListItem>
                            <ExperienceListItem>
                                Triaged and addressed production issues, eliminating client frustrations and improving future processes with timely bug fixes
                                and work arounds.
                            </ExperienceListItem>
                        </ul>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineRight>
                        <TimeLinePoint organization={'Strata Health Solutions'}
                                       detail={'Software Developer'}
                                       timePeriod={'July 2016 - July 2021'}/>
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