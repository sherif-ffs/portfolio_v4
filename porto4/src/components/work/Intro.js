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
                    <h1 className="second-title">I <span>create</span> Digital Products.</h1>
                    {/* <h4>
                    I'm a designer & developer interested in product design, web development, and data visualization.
                     </h4> */}
                     <h4>I'm a Product Designer with a knack for tinkering with code, a love for well crafted user experiences, and an interest in accessible data visualizations.</h4>
                </Anime>
            </div>
        )
    }
}