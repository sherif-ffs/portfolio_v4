import React from 'react'

import '../styles/work/launchpad.css'
// import banner from '../assets/internship/portfolio_materials_sherif/sprint/final_screens/banner.svg'

export default class Test extends React.Component {
    render() {
        return (
            <div className="launchpad-content">
                <div className="launchpad-header">
                    {/* <img src={banner}></img> */}
                </div>
                    <div className="launchpads-intro">
                        <div className="launchpad-what-i-did">
                            <h1>What I Did</h1>
                            <p>Competitive Research</p>
                            <p>User Interviews</p>
                            <p>Journey Mapping</p>
                            <p>Wireframing</p>
                            <p>Interaction Design</p>
                            <p>Prototyping</p>
                        </div>
                        <div className="launchpads-tools">
                            <h1>Tools Used</h1>
                            <p>Figma</p>
                            <p>Mural</p>
                            <p>Providence Design System</p>
                        </div>
                        <div className="launchpad-duration">
                            <h1>Duration</h1>
                            <p>July 21st to August 7th</p>
                        </div>
                        <div className="launchpad-duration">
                            <h1>Team Members</h1>
                            <p>Sherif Elmetwally</p>
                            <p>Daniela Thielisch</p>
                            <p>Ruixuan Li</p>
                            <p>Jack Yusko</p>
                            <p>Emilee Eastman</p>
                            <p>Laura Isabel Diez de Baldeon</p>
                            <p>Denni Zhao</p>
                        </div>
                    </div>
                    <div className="sprint-problem-statement">
                        <h1>Problem Statement</h1>
                        <p>I am a new Financial Company employee starting my position as a remote UXD hire.
                            I need a comprehensive and welcoming onboarding experience to help get started and ensure that I'm set up for success.
                            The problem is, the current onboarding experience is built to support in-office hires, which can leave me with questions
                            and problems that aren't covered in my onboarding experience. This makes me feel uninformed and unprepared to be successful
                            as I might be if I was in an office environment, and may alter my overall opinion of Fidelity as a company.
                        </p>
                        <p><span>WHO:</span> New Financial Company UXD hires</p>
                        <p><span>WHAT:</span> The onboarding process</p>
                        <p></p>
                    </div>
            </div>
        )
    }
}