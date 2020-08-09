import React from 'react'

import '../../styles/work/intro.css'

export default class Intro extends React.Component {
    render() {
        return (
            <div className="intro-wrapper">
                <h3>Hi! 👋</h3>
                <h1>I’m Sherif Elmetwally.</h1>
                <h1 className="second-title">I create things for the web.</h1>
                <h4>I'm a designer and developer specializing in building user interfaces. 
                    I also mess around with data visualizations.</h4>
            </div>
        )
    }
}