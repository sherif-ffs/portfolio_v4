import React from 'react'
import Anime from "@mollycule/react-anime";
import animejs, { AnimeInstance } from "animejs";

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
                    <h1 className="second-title">I create things for the web.</h1>
                    <h4>I'm a designer and developer specializing in building user interfaces. 
                        I also mess around with data visualizations.</h4>
                </Anime>
            </div>
        )
    }
}