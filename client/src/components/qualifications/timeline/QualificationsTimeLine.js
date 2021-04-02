import React from 'react';
import TimeLine from "../../common/timeline/TimeLine";
import TimeLineContent from "../../common/timeline/TimeLineContent";
import TimeLineRight from "../../common/timeline/TimeLineRight";
import Typography from "@material-ui/core/Typography";
import TimeLineLeft from "../../common/timeline/TimeLineLeft";

class QualificationsTimeLine extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TimeLine>
                <TimeLineContent>
                    <TimeLineRight>
                        <Typography className={'headerFont'} variant={'h4'}>Amazon Web Services (AWS)</Typography>
                        <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>AWS Certified Developer Associate Certificate</Typography>
                        <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2021</Typography>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-70'}>
                        <Typography className={'headerFont'} variant={'h4'}>Oracle</Typography>
                        <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>OCA, Java SE 8 Programmer Certificate</Typography>
                        <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2018</Typography>
                    </TimeLineLeft>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineRight>
                        <Typography className={'headerFont'} variant={'h4'}>Southern Alberta Institute of Technology (SAIT)</Typography>
                        <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>IT - Software Development Diploma</Typography>
                        <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2014 - 2016</Typography>
                    </TimeLineRight>
                </TimeLineContent>

                <TimeLineContent>
                    <TimeLineLeft styleName={'content-left pad-left-70'}>
                        <Typography className={'headerFont'} variant={'h4'}>John G. Diefenbaker High School</Typography>
                        <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>High School Diploma</Typography>
                        <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>2006 - 2009</Typography>
                    </TimeLineLeft>
                </TimeLineContent>
            </TimeLine>
        )
    }
}

export default QualificationsTimeLine;