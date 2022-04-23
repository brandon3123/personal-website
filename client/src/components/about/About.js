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
                <Grid container alignItems={"center"} justify={"center"}>
                    <Grid item lg={5}>
                        <AboutMugShot/>
                    </Grid>
                    <Grid item lg={7} xs={12}>
                        <AboutContent/>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default About