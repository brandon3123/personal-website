import React from 'react'
import axios from "axios";
import Container from "@material-ui/core/Container";
import {DataGrid} from "@material-ui/data-grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import {Hidden} from "@material-ui/core";

class Projects extends React.Component {

    state = {
        rows: [],
        loadingProjects: true
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        this.fetchProjects()
    }

    fetchProjects() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos?sort=updated')
            .then(result => this.setState({
                rows: result.data.map((repo, index) => {
                    return {
                        id: index,
                        name: repo.name,
                        description: repo.description,
                        language: repo.language,
                        creationDate: repo.created_at.substr(0, 10),
                        repo: repo.html_url
                    }
                }),
                loadingProjects: false}
            ))
            .catch(error => {
                this.setState({loadingProjects: false})
                console.log('Error fetching github repos: ' + error)
            })
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                    Projects
                </Typography>
                <Divider className={'centerDivider'}/>
                <Hidden lgUp>
                    <Typography variant={"p"} className={'scrollForDetails headerFont'} align={"center"}>
                        <i>Scroll for more details</i>
                    </Typography>
                </Hidden>
                <DataGrid className={'projectsTable'}
                          columns={this.props.columns}
                          loading={this.state.loadingProjects}
                          rows={this.state.rows}
                          pageSize={10}
                          autoHeight={true}
                          disableSelectionOnClick={true}
                />
            </Container>
        )
    }
}

Projects.defaultProps = {
    username: 'brandon3123',
    columns: [
        {field: 'id', headerName: 'ID', hide: true},
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            headerClassName: 'projectsTableHeader',
            cellClassName: 'informationFont'
        },
        {
            field: 'description',
            headerName: 'Description',
            width: 690,
            headerClassName: 'projectsTableHeader',
            cellClassName: 'informationFont'
        },
        {
            field: 'creationDate',
            headerName: 'Created',
            width: 145,
            headerClassName: 'projectsTableHeader',
            cellClassName: 'informationFont'
        },
        {
            field: 'language',
            headerName: 'Language',
            width: 120,
            headerClassName: 'projectsTableHeader',
            cellClassName: 'informationFont'
        },
        {
            field: 'repo',
            headerName: 'Repo',
            headerClassName: 'projectsTableHeader',
            width: 75,
            renderCell: (params) => (
                <IconButton className={'githubLink'} href={params.value} target={'_blank'}><GitHubIcon/></IconButton>
            )
        }
    ]
}

export default Projects;