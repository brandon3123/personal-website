import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import AboutContent from "./AboutContent";
import AboutMugShot from "./AboutMugShot";

class About extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'aboutMeContainer'}>
                <Grid container alignItems={"center"} justify={"center"} alignContent={"center"}>
                    <Grid item lg={4}>
                        <AboutMugShot/>
                    </Grid>
                    <Grid item lg={8} xs={12} alignItems={"center"} alignContent={"center"}>
                        <AboutContent/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default About