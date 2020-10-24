import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

class ContactMe extends React.Component {
    render() {
        return (
            <Container className={'pageContainer'}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant={"h2"} className={'headerFont'} align={"center"}>
                            Contact Me
                        </Typography>
                        <Divider className={'centerDivider'}/>
                        <br/>
                    </Grid>
                    <Grid item xs={12} className={'contactGrid'}>
                        <form>
                            <FormControl className={'contactEmailAddressControl'}>
                                <TextField
                                    className={'contactEmailInput'}
                                    variant={"outlined"} label={'Your Email Address'} type={'email'}/>
                            </FormControl>
                            <FormControl className={'contactMessageBoxControl'}>
                                <TextField
                                    rows={20}
                                    multiline={true}
                                    variant={"outlined"}
                                    className={'contactMessageBox'}
                                    placeholder={'Send me a message!'}>
                                </TextField>
                            </FormControl>
                        </form>
                    </Grid>
                    <Grid item xs={12} className={'contactButtonGrid'}>
                        <Button variant={"contained"}
                                type={"submit"}
                                className={'contactButton headerFont'}
                                size={"large"}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default ContactMe;