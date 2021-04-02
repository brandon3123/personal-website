import React from "react";
import Container from "@material-ui/core/Container";
import PageHeader from "../common/PageHeader";
import QualificationsTimeLine from "./timeline/QualificationsTimeLine";

class Qualifications extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <PageHeader title={'Qualifications'} styleName={'qualificationsHeader'}/>
                <QualificationsTimeLine/>
            </Container>
        )
    }
}

export default Qualifications;