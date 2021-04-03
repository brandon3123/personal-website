import React from 'react';
import Typography from "@material-ui/core/Typography";

class TimeLinePoint extends React.Component{
    render() {
        return (
            <div>
                <Typography className={'headerFont'} variant={'h4'}>{this.props.organization}</Typography>
                <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>{this.props.detail}</Typography>
                <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>{this.props.timePeriod}</Typography>
            </div>
        )
    }
}

export default TimeLinePoint;