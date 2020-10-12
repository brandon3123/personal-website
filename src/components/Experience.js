import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

class Experience extends React.Component{
    render() { return (
        <Container>
            <Typography variant={"h2"}>
                Experience
            </Typography>
            <Divider style={{width:"25%"}}/>
            <Grid container direction={"column"}>
                <Grid item>Strata Health Solution</Grid>
                <Grid item>Strata Health Solution</Grid>
                <Grid item>Calgary Prairie Rose Progress Club</Grid>
            </Grid>
        </Container>

    )
    }
}

export default Experience;