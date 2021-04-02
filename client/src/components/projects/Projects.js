import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Hidden} from "@material-ui/core";
import PageHeader from "../common/PageHeader";
import ProjectsTable from "./ProjectsTable";

class Projects extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <PageHeader title={'Projects'}/>
                <Hidden lgUp>
                    <Typography variant={"p"} className={'scrollForDetails headerFont'} align={"center"}>
                        <i>Scroll for more details</i>
                    </Typography>
                </Hidden>
                <ProjectsTable/>
            </Container>
        )
    }
}

export default Projects;