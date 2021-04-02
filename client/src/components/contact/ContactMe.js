import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import PageHeader from "../common/PageHeader";
import ContactMeForm from "./ContactMeForm";

class ContactMe extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Grid container spacing={3} justify={"center"}>
                    <Grid item xs={12}>
                        <PageHeader title={'Contact Me'}/>
                        <br/>
                    </Grid>
                    <ContactMeForm/>
                </Grid>
            </Container>

        )
    }
}

export default ContactMe;