import React, {useEffect, useState} from 'react';
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import axios from "axios";
import {
    Card,
    CardActionArea,
    CardActions,
    Container, Divider, useMediaQuery
} from "@material-ui/core";
import {Pagination} from "@material-ui/lab";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {useTheme} from "@material-ui/core/styles";

function ProjectsPagination() {
    const [projects, setProjects] = useState([]);
    const [numOfPages, setNumOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(9);

    const theme = useTheme();
    const xs = useMediaQuery(theme.breakpoints.down("xs"));
    const sm = useMediaQuery(theme.breakpoints.down("sm"));
    const md = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {
        const fetchProjects = () => {
            axios
                .get('https://api.github.com/users/brandon3123/repos?sort=updated')
                .then(result => {
                        setProjects(
                            result.data.map((repo) => {
                                return {
                                    id: repo.id,
                                    name: repo.name,
                                    description: repo.description,
                                    language: repo.language,
                                    creationDate: repo.created_at.substr(0, 10),
                                    repo: repo.html_url
                                }
                            })
                        );
                        setNumOfPages(Math.ceil(result.data.length / perPage));
                    }
                ).catch(error => {
                console.log('Error fetching github repos: ' + error)
            })
        }

        fetchProjects();
    }, [perPage])

    useEffect(() => {
        determineProjectsPerPage();
    })

    const handleChange = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    };

    const determineProjectsPerPage = () => {
        if (xs || sm) {
            setPerPage(3);
        } else if (md) {
            setPerPage(6);
        } else {
            setPerPage(9);
        }
    }

    return (
        <>
            <Container>
                <Grid spacing={4} className={'projectsGrid'} container>
                    {projects
                        .slice((currentPage - 1) * perPage, currentPage * perPage)
                        .map(project => {
                            return (
                                <Grid item key={project.id} xl={4} lg={4} md={6} sm={12} xs={12} className={'displayFlex'}>
                                    <Card className={'projectCard displayFlex'}>
                                        <CardContent>
                                            <Typography className={'headerFont'} variant={'h5'}>
                                                {project.name}
                                            </Typography>
                                            <Typography className={'headerFont opacity-0-6'}
                                                        variant={'h6'}>
                                                {project.creationDate}
                                            </Typography>
                                            <Typography className={'headerFont opacity-0-6'}
                                                        variant={'h6'}>
                                                {project.language || <br/>}
                                            </Typography>
                                            <Divider/>
                                            <Typography className={'informationFont experienceText'}>
                                                <br/>
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActionArea>
                                            <CardActions className={'projectCardFooter'}>
                                                <IconButton className={'githubLink'}
                                                            href={project.repo}
                                                            target={'_blank'}>
                                                    <GitHubIcon/>
                                                </IconButton>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
            <Container>
                <Grid className={'projectsGrid'} justify={"center"} alignItems={"center"} container>
                    <Grid item>
                        <Pagination
                            count={numOfPages}
                            page={currentPage}
                            onChange={handleChange}
                            shape={"rounded"}
                            size={"large"}
                            showFirstButton
                            showLastButton
                        />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ProjectsPagination;