import React from 'react'
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import notFound from "../images/skills/notFound.png";
import {Hidden} from "@material-ui/core";

class NotFound extends React.Component{
    render() {
        return (
            <Container className={'notFoundContainer'}>
                <Grid container
                      alignItems={"center"}
                      alignContent={"center"}
                      justify={"center"}
                      spacing={7}
                      direction={"column"}
                >
                    <Grid item>
                        <Typography variant={"h1"} className={'headerFont'}>
                            <img src={notFound} alt={'404 error'}></img>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Hidden xsDown>
                            <Typography variant={"h1"} className={'headerFont'}>
                                Not Found!
                            </Typography>
                        </Hidden>
                        <Hidden smUp>
                            <Typography variant={"h2"} className={'headerFont'}>
                                Not Found!
                            </Typography>
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default NotFound;