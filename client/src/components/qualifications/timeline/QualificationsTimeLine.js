import React from 'react';
import TimeLine from "../../common/timeline/TimeLine";
import TimeLineContent from "../../common/timeline/TimeLineContent";
import TimeLineRight from "../../common/timeline/TimeLineRight";
import TimeLineLeft from "../../common/timeline/TimeLineLeft";
import TimeLinePoint from "../../common/timeline/TimeLinePoint";

class QualificationsTimeLine extends React.Component{
    render() {
        return (
            <TimeLine>
                <TimeLineContent>
                    <TimeLineRight>
                        <TimeLinePoint organization={'Amazon Web Services (AWS)'}
                                       detail={'AWS Certified Developer Associate Certificate'}
                                       timePeriod={'2021'}/>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-70'}>
                        <TimeLinePoint organization={'Oracle'}
                                       detail={'OCA, Java SE 8 Programmer Certificate'}
                                       timePeriod={'2018'}/>
                    </TimeLineLeft>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineRight>
                        <TimeLinePoint organization={'Southern Alberta Institute of Technology (SAIT)'}
                                       detail={'IT - Software Development Diploma'}
                                       timePeriod={'2014 - 2016'}/>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-70'}>
                        <TimeLinePoint organization={'John G. Diefenbaker High School'}
                                       detail={'High School Diploma'}
                                       timePeriod={'2006 - 2009'}/>
                    </TimeLineLeft>
                </TimeLineContent>
            </TimeLine>
        )
    }
}

export default QualificationsTimeLine;