import React from 'react';
import {DataGrid} from "@material-ui/data-grid";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import axios from "axios";

class ProjectsTable extends React.Component{
    state = {
        rows: [],
        loadingProjects: true
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
            <DataGrid className={'projectsTable'}
                      columns={this.props.columns}
                      loading={this.state.loadingProjects}
                      rows={this.state.rows}
                      pageSize={10}
                      autoHeight={true}
                      disableSelectionOnClick={true}
            />
        )
    }
}

ProjectsTable.defaultProps = {
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

export default ProjectsTable;