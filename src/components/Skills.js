import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

class Skills extends React.Component {
    render() {
        return <Container className={'skillsContainer'}>
            <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                Skills
            </Typography>
            <Divider className={'centerDivider'} />
            <Grid spacing={5} direction={"column"} container>
                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Languages/Frameworks
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Databases
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Operating Systems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                Cloud Systems
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item>
                    <Card>
                        <CardContent>
                            <Typography variant={"h5"} className={'headerFont'}>
                                IDE's
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    }
}

export default Skills