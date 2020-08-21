import React from 'react'

import '../styles/work/launchpad.css'
// import banner from '../assets/internship/portfolio_materials_sherif/sprint/final_screens/banner.svg'
import sprint_interview from '../assets/internship/portfolio_materials_sherif/sprint/case_study_materials/interviews.png'
import compare from '../assets/internship/portfolio_materials_sherif/sprint/case_study_materials/compare.png'
import sketches from '../assets/internship/portfolio_materials_sherif/sprint/case_study_materials/sketches.png'
import initial from '../assets/internship/portfolio_materials_sherif/sprint/case_study_materials/initial.png'

export default class Test extends React.Component {
    render() {
        return (
            <div className="launchpad-content">
                <div className="launchpad-header">
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
                    <div className="launchpad-redesign">
                        <h1>User Interviews</h1>
                        <p>The first thing we did was interview 4 recent UXD hires 
                            to get feedback on the strengths and weakness of the current remote onboarding experience.
                        </p>

                        <div className="transmission-redesign-card-layout">
                            <img src={sprint_interview}></img>
                            <div className="transmission-new-features">
                                <h1>Key Takeaways from interview</h1>
                                <p>1. Not sure of organizational structure</p>
                                <p>2. Spotify Agile Model is confusing and overwhelming</p>
                                <p>3. Difficult to understand your teammates roles</p>
                                <p>4. Difficult to understand your teams project and tools they use</p>
                                <p>5. It is hard to get to know your coworkers</p>
                                <p>6. It is difficult to get familar with F*****y as a company</p>
                            </div>
                        </div>
                        <h1 className="sprint-section-header">Competitive Analysis</h1>
                        <p>Next we looked at other well known companys to see if there are
                            any positive features we can borrow to improve our onboarding experience.
                        </p>
                        <div className="sprint-compare">
                            <img src={compare} className="special"></img>
                            <div className="transmission-new-features">
                                <h1>Common onboarding themes</h1>
                                <p>1. Central source of truth</p>
                                <p>2. Make onboarding fun</p>
                                <p>3. Interactive content, do instead of watching</p>
                                <p>4. Help new hires visualize organizational structure</p>
                            </div>
                        </div>
                        <h1 className="sprint-section-header">Sketching</h1>
                        <p>Next all seven interns sketched out concepts, and we then used stickies to vote on 
                            the features or concepts we would like to carry forward to the higher fidelity design.
                        </p>
                        <div className="sprint-compare">
                            <img src={sketches} className="special"></img>
                            <div className="transmission-new-features">
                                <h1>Popular concepts</h1>
                                <p>1. Universe to help new hires visualize both the companys organizational
                                    structure and the Spotify Agile Model.
                                </p>
                                <p>2. Create a central hub where everything for the onboarding process will live.</p>
                                <p>3. Gamify the onboarding tasks</p>
                            </div>
                        </div>
                        <h1 className="sprint-section-header">Features for the initial design</h1>
                        <p>1. Universe to help new hires visualize both the companys organizational
                        structure and the Spotify Agile Model.</p>
                        <p>2. Circles will represent a team member</p>
                        <p>3. User can scroll up and down to zoom in and out, going from a team level at the most specific, to all of the UXD Department.</p>
                        <p>4. Users can click on a person to view details</p>
                        <p>5. Option to toggle an avatar to allow new hires to show their personality</p>
                        <h1 className="sprint-section-header">Initial Design</h1>
                        <p>We then ran 4 user testing sessions to gain feedback on our first ideas. <span>Since I worked on the Universe section I will only
                            talk about the feedback we received for that section.</span>
                        </p>
                        <div className="sprint-compare">
                            <img src={initial} className="special"></img>
                            <div className="transmission-new-features">
                                <h1>Feedback for Universe</h1>
                                <p>1. Organic structure of the circles was not clear</p>
                                <p>2. Some of the interviewees thought that the distance from the center of the circle had some signifigance</p>
                                <p>3. Back arrow in the top left was almost a duplication of the bar on the right</p>
                                <p>4. Toggle avatars function was not easy to see</p>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}