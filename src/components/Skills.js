import React from 'react';
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import java from "../images/java.png"
import spring from "../images/spring.png"
import springSecurity from "../images/springSecurity.png"
import sql from "../images/sql.png"
import html from "../images/html-5.png"

class Skills extends React.Component {
    render() {
        return <Container className={'skillsContainer'}>
            <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                Skills
            </Typography>
            <Divider className={'centerDivider'} />
            <Grid spacing={5} className={'skillsGrid'} direction={"column"} container>
                <Grid item>
                    <Typography variant={"h5"} className={'headerFont'}>
                        Languages/Frameworks
                    </Typography>
                    <br/>
                    <Grid container>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={springSecurity} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Spring <br/>Security</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={java} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Java</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={spring} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>Spring</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={sql} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>SQL</Typography>
                        </Grid>
                        <Grid item className={'skillGridItem'}>
                            <Avatar src={html} className={'skillsIcon'} variant={"square"}></Avatar>
                            <Typography variant={"h6"} className={'informationFont'}>HTML</Typography>
                        </Grid>
                    </Grid>
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
                                IDE's/Tools
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    }
}

export default Skills