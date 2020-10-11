import React from 'react';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from "@material-ui/core/Divider";
import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import CodeIcon from '@material-ui/icons/Code';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import Fab from "@material-ui/core/Fab";

class Projects extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos')
            .then(result => this.setState({projects: result.data}))
            .catch(error => console.log('Error fetching github repos: ' + error))
    }

    projectCard(project) {
        return <Card variant={"outlined"} >
            <CardContent>
                <Box pb={2}>
                    <Grid container justify={"space-between"}>
                        <Grid item >
                            <Typography color={"textPrimary"} variant={"h5"}>
                                {project.name}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CodeIcon color={"disabled"}></CodeIcon>
                        </Grid>
                    </Grid>
                </Box>
                <Divider light={true}/>
                <br/>
                <Typography>
                    {project.description}
                </Typography>
                <br/>
                <Typography>

                    {project.language}
                </Typography>
            </CardContent>
            <Divider light={true}/>

            <CardActions className={'cardFooter'}>
                <Button
                    variant={"contained"}
                    href={project.html_url}
                    startIcon={<GitHubIcon/>}
                >
                    More
                </Button>
            </CardActions>
        </Card>
    }

    render() {
        return <Container>
            <Grid container spacing={2} justify={"center"}>
                {this.state.projects.map(project => {
                        return <Grid item xs={12} lg={4}>
                            {this.projectCard(project)}
                        </Grid>
                    }
                )}
            </Grid>
        </Container>
    }
}

Projects.defaultProps = {
    username: 'brandon3123'
}

export default Projects;
