import React from 'react'

import '../../styles/work/project-card.css'

export default class ProjectCard extends React.Component {
    render() {
        console.log('this.props: ', this.props)
        return (
            <div className="project-card-wrapper">
                <div className="thumbnail"></div>
                <h1>{this.props.name}</h1>
                <h3>{this.props.type}</h3>
            </div>
        )
    }
}