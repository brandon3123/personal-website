import React from 'react'
import axios from "axios";
import Container from "@material-ui/core/Container";
import {DataGrid} from "@material-ui/data-grid";
import GitHubIcon from "@material-ui/icons/GitHub";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";

class ProjectTable extends React.Component {

    state = {
        rows: []
    }

    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos')
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
                })
            }))
            .catch(error => console.log('Error fetching github repos: ' + error))
    }

    render() {
        return (
            <Container className={'pageContainer'}>
                <Typography variant={"h2"} className={'experienceHeader headerFont'} align={"center"}>
                    Projects
                </Typography>
                <Divider className={'centerDivider'}/>
                <DataGrid className={'projectsTable'}
                          columns={this.props.columns}
                          rows={this.state.rows}
                          pageSize={10}
                          autoHeight={true}
                          sortModel={this.props.sortModel}
                          disableSelectionOnClick={true}
                />
            </Container>
        )
    }

}

ProjectTable.defaultProps = {
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
    ],
    sortModel: [
        {
            field: 'creationDate',
            sort: 'desc'
        }
    ]
}

export default ProjectTable;