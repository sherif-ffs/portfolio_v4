import React, { createRef, Component } from 'react'

import Intro from './Intro'
import ProjectCard from './ProjectCard'
import TestCard from './TestCard.js'
import FilterTabs from './FilterTabs'
import Anime from "@mollycule/react-anime";
import animejs, { AnimeInstance } from "animejs";

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


    reset = (e) => {
        let projects = this.props.projects
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove("active-filter-tab")
        })
        e.target.classList.add('active-filter-tab')
        this.setState({
            projects: projects
        })
    }

    filterDesigns = (e) => {
        window.scrollBy(0, 10);
        let projects = this.props.projects
        let filteredProjects = projects.filter(project => project.type === 'design')
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove("active-filter-tab")
        })
        e.target.classList.add('active-filter-tab')
        this.setState({
            projects: filteredProjects
        })
        window.scrollBy(0, 700);
    }

    filterWebDev = (e) => {
        let projects = this.props.projects
        let filteredProjects = projects.filter(project => project.type === 'web development')
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove("active-filter-tab")
        })
        e.target.classList.add('active-filter-tab')
        this.setState({
            projects: filteredProjects
        })
        window.scrollBy(0, 700);
    }


    filterDataViz = (e) => {
        let projects = this.props.projects
        let filteredProjects = projects.filter(project => project.type === 'data viz')
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove("active-filter-tab")
        })
        e.target.classList.add('active-filter-tab')
        this.setState({
            projects: filteredProjects
        })
        window.scrollBy(0, 700);
    }
    render() {
        this.wrapper = React.createRef();
        let projects
        if (this.state.projects !== undefined) {
            projects = this.state.projects.map((project, index) => {
                console.log('project: ', project)
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
                        project={project.project}
                    >
                    </ProjectCard>
                )
                })  
        }
        return (
            <>
                <Intro></Intro>
                <FilterTabs 
                    projects={this.props.projects} 
                    filterDesigns={this.filterDesigns} 
                    reset={this.reset} 
                    filterWebDev={this.filterWebDev}
                    filterDataViz={this.filterDataViz}
                >
                </FilterTabs>
                {/* <div className="projects-wrappers" ref={this.wrapper}>
                    <Anime
                        in
                        duration={300}
                        appear
                        onEntering={{
                        translateY: [100, 0],
                        opacity: [0, 1],
                        delay: animejs.stagger(160),
                        easing: "linear"
                        }}
                    >
                    {
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
                            thumbnail={project.thumbnail}
                            tags={project.tags}
                            project={project.project}
                        >
                        </ProjectCard>
                    )
                    })
                    }
                    </Anime>
                </div> */}
                <div className="test-card-wrapper">
                {
                    projects = this.state.projects.map((project, index) => {
                    return(
                        <TestCard 
                            key={index}
                            name={project.name}
                            blurb={project.blurb}
                            id={project.id}
                            live={project.live}
                            type={project.type}
                            github={project.github}
                            thumbnail={project.thumbnail}
                            tags={project.tags}
                            project={project.project}
                        >
                        </TestCard>
                    )
                    })}
                </div>
            </>
        )
    }
}