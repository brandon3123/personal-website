import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class SkillsSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant={"h4"} className={'headerFont'}>
                        {this.props.title}
                    </Typography>
                    <br/>
                    <Grid container>
                        {this.props.children}
                    </Grid>
                </CardContent>
            </Card>
        )
    }

}

export default SkillsSection;