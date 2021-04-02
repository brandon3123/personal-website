import React from 'react';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import LanguagesAndFrameworks from "./sections/LanguagesAndFrameworks";
import Databases from "./sections/Databases";
import IDEAndTools from "./sections/IDEAndTools";
import OperatingSystems from "./sections/OperatingSystems";
import CloudAndVirtualization from "./sections/CloudAndVirtualization";
import PageHeader from "../common/PageHeader";

class Skills extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return <Container className={'pageContainer'}>
            <PageHeader title={'Skills'}/>
            <Grid spacing={2} className={'skillsGrid'} direction={"column"} container>
                <Grid item>
                    <LanguagesAndFrameworks/>
                </Grid>
                <Grid item>
                    <Databases/>
                </Grid>
                <Grid item>
                    <IDEAndTools/>
                </Grid>
                <Grid item>
                   <OperatingSystems/>
                </Grid>
                <Grid item>
                    <CloudAndVirtualization/>
                </Grid>
            </Grid>
        </Container>
    }
}

export default Skills