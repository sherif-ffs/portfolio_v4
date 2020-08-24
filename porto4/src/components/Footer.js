import React from 'react'

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaDribbble } from 'react-icons/fa';

import '../styles/footer.css'

export default class Footer extends React.Component {
    render() {


        return (
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-icons-wrapper">
                        <div className="footer-icon-container">
                        <a href="https://github.com/sherif-ffs" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="footer-icon first-footer-icon"></FaGithub>
                        </a>
                        </div>
                        <div className="footer-icon-container">
                        <a href="https://www.linkedin.com/in/selmetwa/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="footer-icon"></FaLinkedin>
                        </a>
                        </div>
                        <div className="footer-icon-container">
                        <a href="https://dribbble.com/selmetwa" target="_blank" rel="noopener noreferrer">
                            <FaDribbble className="footer-icon"></FaDribbble>
                        </a>
                        </div>
                    </div>
                    <div className="corny">
                        <p>Designed and coded with <span role="img" aria-label='jsx-a11y/accessible-emoji'>☕</span> and <span role="img" aria-label='jsx-a11y/accessible-emoji'>🎵</span></p>
                    </div>
                </div>
            </div>
        )
    }
}