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
                        <a href="https://github.com/sherif-ffs" target="_blank">
                            <FaGithub className="footer-icon"></FaGithub>
                        </a>
                        </div>
                        <div className="footer-icon-container">
                        <a href="https://www.linkedin.com/in/selmetwa/" target="_blank">
                            <FaLinkedin className="footer-icon"></FaLinkedin>
                        </a>
                        </div>
                        <div className="footer-icon-container">
                        <a href="https://dribbble.com/selmetwa" target="_blank">
                            <FaDribbble className="footer-icon"></FaDribbble>
                        </a>
                        </div>
                    </div>
                    <div className="corny">
                        <p>Designed and coded with ☕ and 🎵</p>
                    </div>
                </div>
            </div>
        )
    }
}