import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardActions,
    Container, Divider,
} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

class ProjectsPagination extends React.Component {
    state = {
        projects: [],
        loadingProjects: true,
        numOfPages: 0,
        currentPage: 1
    }

    componentDidMount() {
        this.fetchProjects()
    }

    handleChange = (event, value) => {
        this.setState({currentPage: value})
    };

    fetchProjects() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos?sort=updated')
            .then(result => this.setState({
                    projects: result.data.map((repo) => {
                        return {
                            name: repo.name,
                            description: repo.description,
                            language: repo.language,
                            creationDate: repo.created_at.substr(0, 10),
                            repo: repo.html_url
                        }
                    }),
                    loadingProjects: false,
                    numOfPages: Math.ceil(result.data.length / this.props.perPage)
                }
            ))
            .catch(error => {
                this.setState({loadingProjects: false})
                console.log('Error fetching github repos: ' + error)
            })
    }

    render() {
        return (
            <div>
                <Container>
                    <Grid spacing={4} className={'skillsGrid'} container>
                        {this.state.projects
                            .slice((this.state.currentPage - 1) * this.props.perPage, this.state.currentPage * this.props.perPage)
                            .map(project => {
                                return (
                                    <Grid item lg={4} md={6} sm={12} style={{display: 'flex'}}>
                                        <Card style={{
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>
                                            <CardContent>
                                                <Typography className={'headerFont'} variant={'h5'}>
                                                    {project.name}
                                                </Typography>
                                                <Typography style={{opacity: 0.6}} className={'headerFont'}
                                                            variant={'h6'}>
                                                    {project.creationDate}
                                                </Typography>
                                                <Divider/>
                                                <Typography className={'informationFont experienceText'}>
                                                    <><br/></>
                                                    {project.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActionArea>
                                                <CardActions className={'projectCardFooter'}>
                                                    <IconButton className={'githubLink'} href={project.repo}
                                                                target={'_blank'}><GitHubIcon/></IconButton>
                                                </CardActions>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                );
                            })}
                    </Grid>
                </Container>
                <Container>
                    <Grid className={'skillsGrid'} justify={"center"} alignItems={"center"} container>
                        <Grid item>
                            <Pagination
                                count={this.state.numOfPages}
                                page={this.state.currentPage}
                                onChange={this.handleChange}
                                shape={"rounded"}
                                size="large"
                                showFirstButton
                                showLastButton
                            />

                        </Grid>
                    </Grid>

                </Container>
            </div>
        )
    }
}

ProjectsPagination.defaultProps = {
    username: 'brandon3123',
    perPage: 9
}

export default ProjectsPagination;