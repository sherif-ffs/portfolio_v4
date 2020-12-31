import React from 'react'
import Anime from "@mollycule/react-anime";
import animejs from "animejs";

import '../../styles/work/intro.css'

export default class Intro extends React.Component {

    render() {
        return (
            <div className="intro-wrapper">
                <Anime
                    in
                    duration={600}
                    appear
                    onEntering={{
                    translateY: [100, 0],
                    opacity: [0, 1],
                    delay: animejs.stagger(100),
                    easing: "linear"
                    }}
                >
                    <h3>Hi! 👋</h3>
                    <h1 className="intro-title">I’m Sherif Elmetwally.</h1>
                    <h1 className="second-title">I <span>build</span> things for the web.</h1>
                    <h4>
                    I'm a Front-End Developer based in Jersey City, NJ specializing in building (and occasionally designing) websites, applications, and everything in between.
                     </h4>
                </Anime>
            </div>
        )
    }
}