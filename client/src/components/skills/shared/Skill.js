import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

class Skill extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        let iconStyle = this.props.iconStyles ? this.props.iconStyles : 'skillsIcon';
        return (
            <Grid item className={'skillGridItem'}>
                <Avatar src={this.props.icon} className={iconStyle} variant={"square"}></Avatar>
                <Typography variant={"h6"} className={'informationFont'}>{this.props.skill}</Typography>
            </Grid>
        )
    }
}

export default Skill;