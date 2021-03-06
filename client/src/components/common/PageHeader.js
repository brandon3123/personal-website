import React from 'react';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class PageHeader extends React.Component{
    render() {
        return (
            <div>
                <Typography variant={"h2"} className={'pad-bottom-5 headerFont'} align={"center"}>
                    {this.props.title}
                </Typography>
                <Divider className={'centerDivider'}/>
            </div>
        )
    }
}

export default PageHeader;