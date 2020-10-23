import React from 'react'
import axios from "axios";
import Container from "@material-ui/core/Container";
import {DataGrid} from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";

class ProjectTable extends React.Component {

    state = {
        rows: []
    }

    columns = [
        {field: 'id', headerName: 'ID', hide: true},
        {field: 'name', headerName: 'Name', width:200, resizable: true},
        {field: 'description', headerName: 'Description', width:500, resizable: true},
        {field: 'creationDate', headerName: 'Creation Date', width:125, resizable: true},
        {field: 'language', headerName: 'Language', width:125, resizable: true},
        {field: 'link', headerName: 'Link', width:125, resizable: true}
    ]

    componentDidMount() {
        this.fetchProjects()
    }

    fetchProjects() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos')
            .then(result => this.setState({rows: result.data.map((repo, index) => {
                return {id: index, name: repo.name, description: repo.description, language: repo.language,
                    creationDate: repo.created_at.substr(0, 10),
                    link: (<Button className={'githubLink'} variant={"contained"} href={repo.html_url}><GitHubIcon/></Button>)}
                })}))
            .catch(error => console.log('Error fetching github repos: ' + error))
    }


    render() {
        return (
            <Container style={{width:'100%'}}>
                <DataGrid columns={this.columns}
                          rows={this.state.rows}
                          pageSize={10}
                          autoHeight={true}

                />
            </Container>
        )
    }

}

ProjectTable.defaultProps = {
    username: 'brandon3123'
}

export default ProjectTable;