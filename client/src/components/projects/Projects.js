import React from 'react'
import Container from "@material-ui/core/Container";
import PageHeader from "../common/PageHeader";
import ProjectsPagination from "./ProjectsPagination";

class Projects extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <PageHeader title={'Projects'}/>
                <ProjectsPagination/>
            </Container>
        )
    }
}

export default Projects;