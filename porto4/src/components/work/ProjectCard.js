import React from 'react'
import Anime from "@mollycule/react-anime";
import animejs, { AnimeInstance } from "animejs";
import '../../styles/work/project-card.css'

export default class ProjectCard extends React.Component {
    render() {
        console.log('this.props: ', this.props)
        return (
            <div className="project-card-wrapper">
                {/* <Anime
                    in
                    duration={100}
                    appear
                    onEntering={{
                    translateY: [100, 0],
                    opacity: [0, 1],
                    delay: animejs.stagger(100),
                    easing: "linear"
                }} */}
                
                    <div className="thumbnail"></div>
                    <h1>{this.props.name}</h1>
                    <h3>{this.props.type}</h3>
                {/* </Anime> */}
            </div>
        )
    }
}