import React from 'react';
import Typography from "@material-ui/core/Typography";

class ExperiencePosition extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography className={'headerFont'} variant={'h4'}>{this.props.employer}</Typography>
                <Typography variant={"h5"} className={'headerFont'} color={"textSecondary"}>{this.props.position}</Typography>
                <Typography variant={"h6"} className={'headerFont'} color={"textSecondary"}>{this.props.timePeriod}</Typography>
            </div>
        )
    }
}

export default ExperiencePosition;