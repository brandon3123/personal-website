import React from 'react';
import axios from "axios";

class Projects extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios
            .get('https://api.github.com/users/' + this.props.username + '/repos')
            .then(result => this.setState({projects: result.data}))
            .catch(error => console.log('Error fetching github repos: ' + error))
    }

    render() {
        return <div>
            <ul>{this.state.projects.map(project => {
                    return <li>{project.name}</li>
                }
            )}</ul>
        </div>
    }
}

Projects.defaultProps = {
    username: 'brandon3123'
}

export default Projects;
