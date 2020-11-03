import React from 'react';
import axios from "axios";
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class ContactMe extends React.Component {

    state = {
        emailAddress: null,
        emailMessage: null,
        name: null,
        showAlert: false,
        alertType: "",
        alertMessage: ""
    }

    handleEmailChange = (e) => {
        this.setState({emailAddress: e.target.value})
    }

    handleMessageChange = (e) => {
        this.setState({emailMessage: e.target.value})
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }

    submitEmail(e) {
        axios
            .post(
                '/contactMe',
                {
                    "name": this.state.name,
                    "emailAddress": this.state.emailAddress,
                    "emailMessage": this.state.emailMessage,
                }
            )
            .then(res => this.showAlert("success", "Thank your for the message!"))
            .catch(err => this.showAlert("error", "Your message could not be sent!"))
        e.preventDefault();
    }

    showAlert(type, message) {
        this.setState({
            showAlert: true,
            alertType: type,
            alertMessage: message}
        )
    }

    hideAlert = () => {
        this.setState({showAlert: false})
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Snackbar anchorOrigin={{vertical: "top", horizontal: "center"}}
                          open={this.state.showAlert}
                          autoHideDuration={5000}
                          onClose={this.hideAlert}>
                    <Alert severity={this.state.alertType} variant={"standard"} className={'alertBar'}>
                        {this.state.alertMessage}
                    </Alert>
                </Snackbar>
                <Grid container spacing={3} justify={"center"}>
                    <Grid item xs={12}>
                        <Typography variant={"h2"} className={'headerFont'} align={"center"}>
                            Contact Me
                        </Typography>
                        <Divider className={'centerDivider'}/>
                        <br/>
                    </Grid>
                    <form onSubmit={(e) => this.submitEmail(e)} className={'contactForm'}>
                        <Grid item xs={12} className={'contactGrid'}>
                            <FormControl className={'contactTextFieldControl'}>
                                <TextField
                                    className={'contactTextFieldInput'}
                                    variant={"outlined"}
                                    label={'Your full Name'}
                                    value={this.state.name}
                                    required={true}
                                    onChange={this.handleNameChange}
                                    />
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={'contactGrid'}>
                            <FormControl className={'contactTextFieldControl'}>
                                <TextField
                                    className={'contactTextFieldInput'}
                                    variant={"outlined"}
                                    label={'Your Email Address'}
                                    value={this.state.emailAddress}
                                    required={true}
                                    onChange={this.handleEmailChange}
                                    type={'email'}/>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={'contactMessageBoxControl'}>
                                <TextField
                                    rows={20}
                                    multiline={true}
                                    required={true}
                                    variant={"outlined"}
                                    className={'contactMessageBox'}
                                    value={this.state.emailMessage}
                                    onChange={this.handleMessageChange}
                                    placeholder={'Send me a message!'}>
                                </TextField>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} className={'contactButtonGrid'}>
                            <Button variant={"contained"}
                                    type={"submit"}
                                    className={'contactButton headerFont'}
                                    size={"large"}>
                                Submit
                            </Button>
                        </Grid>
                    </form>

                </Grid>
            </Container>

        )
    }
}

export default ContactMe;