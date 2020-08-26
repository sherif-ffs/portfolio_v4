import React from 'react'

import '../styles/work/tpm.css'
import persona from '../assets/internship/portfolio_materials_sherif/TPM/case_study_materials/persona.svg'
import landing_page from '../assets/internship/portfolio_materials_sherif/TPM/tpm_screens/landing-page.svg'
import overview from '../assets/internship/portfolio_materials_sherif/TPM/tpm_screens/overview.svg'
import overview_first from '../assets/internship/portfolio_materials_sherif/TPM/tpm_screens/overview_first.svg'
import rate_modal from '../assets/internship/portfolio_materials_sherif/TPM/tpm_screens/rate_modal.svg'
import fintech from '../assets/internship/portfolio_materials_sherif/TPM/tpm_screens/fintech.svg'

import Footer from './Footer'

export default class TPM extends React.Component {
    render() {
        return (
            <>
            <div className="tpm-wrapper">
                <div className="tpm-header"></div>
                <h3 className="transmission-note">Due to the NDA agreement I signed I will not be able to show screenshots of the previous experience.</h3>
                <div className="tpm-content">
                    <div className="tpm-intro">
                        <div className="launchpad-what-i-did">
                            <h1>What I Did</h1>
                            <p>Competitive Analysis</p>
                            <p>User Interviews</p>
                            <p>Persona Creation</p>
                            <p>Wireframing</p>
                            <p>Interaction Design</p>
                            <p>Prototyping</p>
                        </div>
                        <div className="tpm-tools">
                            <h1>Tools Used</h1>
                            <p>Figma</p>
                            <p>Basis Design System</p>
                        </div>
                        <div className="launchpad-duration">
                            <h1>Duration</h1>
                            <p>June to August 2020 (3 months)</p>
                        </div>
                    </div>
                    <div>
                        <h1>Backstory</h1>
                        <p>The Third-Party Marketplace is an online store where firms can explore over 100 third-party 
                            technology solutions for CRM, financial planning, analytics, portfolio management, office tools and more. The Third-Party Marketplace 
                            has roughly 2000 monthly users.
                        </p>
                    </div>
                    <div>
                        <h1>Problem</h1>
                        <p>It is currently very hard for users to come in and find what they want on the Third-Party Marketplace. There is not enough
                            useful information on the cards on the landing page, or the overview page for firms to make an informed decision.
                        </p>
                    </div>
                    <div>
                        <h1>Research</h1>
                        <p>I conducted three user interviews with users and stakeholders to try and better understand the problems with the current experience.
                        </p>
                    </div>
                    <div>
                        <h1>Research Results</h1>
                        <div className="tpm-research-results-wrapper">
                            <h1>It's hard for users to find what they want on Third-Party Marketplace</h1>
                            <h3><i>"Right now there is basically just a list of names, and from there I have to do my own research<br />- Interviewee 1</i></h3>
                            <p>1. Not enough useful information on the cards</p>
                            <p>2. Overview page is not very helpful when trying to set up a demo.</p>
                            <p>3. Price is extremely important, but there is little information about it anywhere on the Third-Party Marketplace</p>
                            <p>4. Clients care <strong>A LOT</strong> about what other firms are saying</p>
                            <p>5. We want to promote FinTech's with strategic integrations</p>
                        </div>
                    </div>
                    <div className="tpm-redesign">
                        <h1>Personas</h1>
                        <p>Using the results from my interviews with users and stakeholders, I created two personas to better understand
                            who is coming into the Third-Party Marketplace to shop for integrations, and what their respective needs may be.
                        </p>
                        <div className="tpm-redesign-card-layout">
                                <img src={persona}></img>
                        </div>
                        <h1 className="tpm-heading">New Landing Page</h1>
                        <div className="tpm-redesign-card-layout tpm-landing-page">
                                <img src={landing_page}></img>
                                <div>
                                    <h1>New Features</h1>
                                    <p>1. Filtering by category/integration tier</p>
                                    <p>2. Distinct icons for Fintech's that are already<br /> integrated and those that are strategically<br /> integrated with Financial Company</p>
                                    <p>3. Searchbar</p>
                                    <p>4. Fintech Analyzer, which is a wizard that <br /> recommends a Fintech based on a series of < br/> of questions</p>
                                </div>
                        </div>
                        <h1 className="tpm-heading">New Overview Page</h1>
                        <div className="tpm-redesign-card-layout tpm-landing-page">
                                <img src={overview_first}></img>
                                <div>
                                    <h1>New Features</h1>
                                    <p>1. In depth description about what Black Diamond <br />is and does</p>
                                    <p>2. List of active and inactive features</p>
                                    <p>3. Aggregated rating</p>
                                    <p>4. Icon showing that your firm is currently <br />integrated with this Fintech</p>
                                </div>
                        </div>
                        <h1 className="tpm-heading">Ratings Section</h1>
                        <div className="tpm-redesign-card-layout tpm-landing-page">
                                <img src={overview}></img>
                                <div>
                                    <h1>New Features</h1>
                                    <p>1. Button to rate Fintech</p>
                                    <p>2. Breakdown of rating into different categories</p>
                                    <p>3. Percent of users which recommend this Fintech</p>
                                </div>
                        </div>
                        <h1 className="tpm-heading">Rate Fintech Modal</h1>
                        <div className="tpm-redesign-card-layout tpm-landing-page">
                                <img src={rate_modal}></img>
                        </div>
                        <h1 className="last-tpm-heading">New MyFintech Page</h1>
                        <p className="tpm-paragraph">As part of my internship I was tasked to create a page where firms could go to quickly view which Fintechs they are currently
                            integrated with.
                        </p>
                        <div className="tpm-redesign-card-layout tpm-landing-page">
                                <img src={fintech}></img>
                                <div>
                                    <h1>Actions include</h1>
                                    <p>1. Link to rate Fintech modal</p>
                                    <p>2. Option to remove Fintech</p>
                                </div>
                        </div>
                        <h1 className="last-tpm-heading">What I learned</h1>
                    <p>- Rushing to the high fidelity stage might be tempting, but most of the work is everything that happens before that step.</p>
                    <p>- Design can never be an isolated process. Product & Business teams can give great insight into the features you’re working on. Be sure to involve them.</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </>
        )
    }
}