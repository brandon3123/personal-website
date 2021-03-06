import React from 'react';
import Typography from "@material-ui/core/Typography";

class ExperienceListItem extends React.Component{
    render() {
        return (
            <li>
                <Typography className={'informationFont experienceText'}>
                    {this.props.children}
                </Typography>
            </li>
        )
    }
}

export default ExperienceListItem;