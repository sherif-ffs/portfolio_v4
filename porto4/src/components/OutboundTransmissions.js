import React from 'react'

import '../styles/work/outbound-transmissions.css'
import outboundBanner from '../assets/internship/portfolio_materials_sherif/outbound_transmissions/final_transmissions_screens/banner.svg'
import cardLayout from '../assets/internship/portfolio_materials_sherif/outbound_transmissions/final_transmissions_screens/card_leyout-1.svg'
import manual_text from '../assets/internship/portfolio_materials_sherif/outbound_transmissions/final_transmissions_screens/manual_without_sidebar.svg'

export default class OutboundTransmissions extends React.Component {
    render() {
        return (
            <div className="outbound-transmissions-wrapper">
                <div className="transmissions-header"></div>
                <div className="transmission-content">
                <h3 className="transmission-note">Due to the NDA agreement I signed I will not be able to show screenshots of the previous experience.</h3>
                    <div className="transmissions-intro">
                        <div className="what-i-did">
                            <h1>What I Did</h1>
                            <p>Competitive Research</p>
                            <p>User Interviews</p>
                            <p>Wireframing</p>
                            <p>Interaction Design</p>
                            <p>Prototyping</p>
                        </div>
                        <div className="transmissions-tools">
                            <h1>Tools Used</h1>
                            <p>Figma</p>
                            <p>Mural</p>
                            <p>Basis Design</p>
                        </div>
                        <div className="duration">
                            <h1>Duration</h1>
                            <p>June to August 2020 (3 months)</p>
                        </div>
                    </div>
                    <div className="transmission-description">
                        <h1>Backstory</h1>
                        <p>Firms can leverage a suite of <span>data transmission files</span> to receive
                        client-specific data from F******y’s core brokerage systems in bulk on a regular basis.</p>
                    </div>
                    <div className="transmission-goal">
                        <h1>Goal</h1>
                        <p>In the previous experience clients would have to download a hundred page long PDF onto their local machine to receive 
                            client-specific data.
                        </p>
                        <p>Our goal for this redesign was to transition from a PDF format to a searchable, and filterable, HTML table, making it easier for 
                            clients to find the data they need quicker.
                        </p>
                    </div>
                    <div className="transmission-research">
                        <h1>Research</h1>
                        <p>I started the project with user research, to understand the pain points of the current experience, and to highlight 
                            and potential positives that may exist.
                        </p>
                        <p>I came up with an interview script, and conducted four user interviews over zoom.
                        </p>
                    </div>
                    <div className="transmission-research-results">
                            <h1>Results from user interviews</h1>
                            <div className="transitin-research-results-wrapper">
                                <div className="transmission-research-results-cons">
                                    <h1>Cons of Current Outbound Transmissions Experience</h1>
                                    <p>- Initial impression of page has overwhelming amount of information with no way of filtering it.</p>
                                    <p>- Too many clicks to get to PDF download.</p>
                                    <p>- Clients are not using every single piece of data in each transmission;
                                        should be able to customize the fields they wany or search for the field the want.
                                    </p>
                                    <p>- Searching for a field name within manual is a good feature to add.</p>
                                    <p>- Searching within a file is impossible without downloading the file</p>
                                </div>
                                <div className="transmission-research-results-pros">
                                    <h1>Pros of Current Outbound Transmissions Experience</h1>
                                    <p>Overview on each card is helpful.</p>
                                    <p>Alphabetized layout is straightforward; clients know where they 
                                        should be looking.
                                    </p>
                                    <p>PDF is easily shareable within and between teams.
                                    </p>
                                    <p>It is useful for clients to have access to all of the content within the manual</p>
                                </div>
                            </div>
                        </div>
                        <div className="transmission-redesign">
                            <h1>Redesign</h1>
                            <div className="transmission-redesign-card-layout">
                                <img src={cardLayout}></img>
                                <div className="transmission-new-features">
                                    <h1>Landing Page Redesign</h1>
                                    <p style={{fontWeight: 'bold'}}>New Features</p>
                                    <p>1.Filtering</p>
                                    <p>2.Search Functionality</p>
                                    <p>3.Add Category type to card</p>
                                </div>
                            </div>
                            <div className="transmission-redesign-manual">
                                <img src={manual_text}></img>
                                <div className="transmission-new-features">
                                    <h1>Landing Page Redesign</h1>
                                    <p style={{fontWeight: 'bold'}}>New Features</p>
                                    <p>1.Filtering</p>
                                    <p>2.Search Functionality</p>
                                    <p>3.Add Category type to card</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}