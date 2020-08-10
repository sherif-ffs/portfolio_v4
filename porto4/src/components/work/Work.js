import React from 'react'

import Intro from './Intro'
import ProjectCard from './ProjectCard'
import FilterTabs from './FilterTabs'

import '../../styles/work/work.css'

export default class Work extends React.Component {
    state = {
        projects: []
    }

    componentDidMount() {
        this.setState({
            projects: this.props.projects
        })
    }
    render() {
        console.log('this.state: ', this.state)
        console.log('this.props: ', this.props.projects)
        // let pro
        let projects
        if (this.state.projects !== undefined) {
            projects = this.state.projects.map((project, index) => {
                return(
                    <ProjectCard 
                        key={index}
                        name={project.name}
                        blurb={project.blurb}
                        id={project.id}
                        live={project.live}
                        type={project.type}
                        github={project.github}
                        tags={project.tags}
                    >
                    </ProjectCard>
                )
                })  
        }
        return (
            <>
                <Intro></Intro>
                <FilterTabs projects={this.props.projects}></FilterTabs>
                <div className="projects-wrappers">{projects}</div>
            </>
        )
    }
}