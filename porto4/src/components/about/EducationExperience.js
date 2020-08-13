import React from 'react'

import '../../styles/about/education-experience.css'
export default class Resume extends React.Component {
    render() {
        return (
            <div className="education-experience-wrapper">
                <div className="experience">
                    <h1>Experience</h1>
                    <div className="company">
                        <h3 className="company-title">UX Design Intern</h3>
                        <a href="https://www.fidelity.com/" target="_blank">Fidelity Investments</a>
                        <h3 className="timeline">June 2020 - August 2020</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">Web Developer Intern</h3>
                        <a href="http://cecc.njit.edu/" target="_blank">Civic Engagement Computer Center</a>
                        <h3 className="timeline">October 2019 - May 2020</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">UX Designer</h3>
                        <a href="https://socialinteractionlab.com/" target="_blank">Social Interaction Lab</a>
                        <h3 className="timeline">May 2019 - December 2019</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">Front-End Intern</h3>
                        <a href="https://www.1stdibs.com/" target="_blank">1stdibs.com</a>
                        <h3 className="timeline">June 2019 - August 2019</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">Web Design Intern</h3>
                        <a href="https://magnetmediafilms.com/" target="_blank">Magnet Media</a>
                        <h3 className="timeline">February 2019 - May 2019</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">Web Design Intern</h3>
                        <a href="https://twentyoverten.com/" target="_blank">Twenty Over Ten</a>
                        <h3 className="timeline">April 2018 - February 2019</h3>
                    </div>
                </div>
                <div className="education-skills">
                    <h1>Education</h1>
                    <div className="company">
                        <h3 className="company-title">B.S. in Human-Computer Interaction</h3>
                        <a href="https://www.njit.edu/academics/major/human-computer-interaction" target="_blank">New Jersey Institute of Technology</a>
                        <h3 className="timeline">2017 - 2020</h3>
                    </div>
                    <div className="company">
                        <h3 className="company-title">B.S. in Computer Science</h3>
                        <a href="http://cas.loyno.edu/mathematics/bachelor-science-computer-science" target="_blank">Loyola University New Orleans</a>
                        <h3 className="timeline">2016 - 2017</h3>
                    </div>
                    <div className="skills-tolls">
                        <div className="skills">
                            <h1>Tools</h1>
                            <p>JavaScript (ES6)</p>
                            <p>React.js</p>
                            <p>D3.js</p>
                            <p>Figma</p>
                            <p>Redux</p>
                            <p>(S)CSS</p>
                            <p>Flask</p>
                            <p>Python</p>
                            <p>Git</p>
                            <p>Chrome Developer Tools</p>
                            <p>Photoshop</p>
                            <p>FlexBox</p>
                            <p>Illustrator</p>
                        </div>
                        <div className="tools">
                            <h1>Skills</h1>
                            <p>UI/UX Design</p>
                            <p>User Research</p>
                            <p>User Testing</p>
                            <p>Front-End Development</p>
                            <p>Responsive Web Design</p>
                            <p>Data Visualization</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}