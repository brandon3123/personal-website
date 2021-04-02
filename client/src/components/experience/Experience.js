import React from "react";
import Container from "@material-ui/core/Container";
import ExperienceTimeLine from "./timeline/ExperienceTimeLine";
import PageHeader from "../common/PageHeader";

class Experience extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <PageHeader title={'Experience'}/>
                <ExperienceTimeLine/>
            </Container>
        )
    }
}

export default Experience;