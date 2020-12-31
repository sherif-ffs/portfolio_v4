import React from 'react'

import '../../styles/about/about.css'
import EducationExperience from './EducationExperience'
import sherif from '../../assets/reef.jpg'
import Footer from '../Footer'

export default class About extends React.Component {
    render() {
        return (
            <>
            <div className="about-wrapper">
                <img src={sherif} alt="Me, Sherif Elmetwally"></img>
                <div className="text-container">
                <p>My name is Sherif, I'm a Front-End Developer, and graduate of the New Jersey Institute of 
                    Technology where I studied <span>Human-Computer Interaction</span> with a focus on Web and Mobile Development.</p>
                {/* <p id="second-about">Long story short, I've been in front of a computer, for better or for worse,
                     for the better part of the last decade. My interest in technology evolved into a passion for web design. When I 
                     was introduced to <span>CSS</span> and <span>JavaScript</span> and the creative possibilities it possessed, there was basically no turning back. 
                     A love affair with <span>UI/UX</span> design was soon to follow. Since that time, whether working on school projects, interning in 
                     New York City, or working independently, I've tried to push the envelope, make my mark, and fulfill my creative potential.
                </p> */}
                <p id="second-about">I enjoy creating things that live on the internet, whether that be websites, applications, or anything inbetween. 
                My goal is to always build pixel-perfect products that provide an exceptional user experience.
                 </p>
                 <p id="second-about">Though I specialize in front-end development, and feel most comfortable working with HTML/CSS/JavaScript/React.js, I also have experience using Python on the backend with frameworks such as flask, and enjoy creating data visualizations using D3.js.</p>
                </div>
            </div>
            <EducationExperience></EducationExperience>
            <Footer></Footer>
            </>
        )
    }
}