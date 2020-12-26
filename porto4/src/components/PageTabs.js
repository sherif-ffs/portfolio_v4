import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../resumes/resume_web_v2.pdf'
import newResume from '../resumes/sherif_resume_design.pdf'

import '../styles/pageTabs.css'
export default class PageTabs extends React.Component {
  state = { 
    currentPage: '/',
    isMobile: false
  }

  isActiveTab(tabName) {
    return (tabName === this.state.currentPage) ? 'nav-link active' : 'nav-link';
  }

  onTabClick(event, tabName) {
    this.setState({ currentPage: tabName })
  }

  render () {
      return (
        <ul className='nav page-tabs'>
          <h1 className="nav-title">
            <Link className={this.isActiveTab('/')} id="nav-title" to="/"
            onClick={event => this.onTabClick(event, '/')}
            style={{ textDecoration: 'none' }}
            >
              S
          </Link>    
          {/* <img src={young}></img> */}
          </h1>
          <div className="nav-item-wrapper">
              <li className='nav-item'>
                  <Link className={this.isActiveTab('/')} to="/"
                          onClick={event => this.onTabClick(event, '/')}
                          style={{ textDecoration: 'none' }}
                          >
                      Work
                  </Link>
              </li>
              <li className='nav-item'>
                  <Link className={this.isActiveTab('/about')} to="/about"
                          onClick={event => this.onTabClick(event, '/about')}
                          style={{ textDecoration: 'none' }}
                          >
                      About
                  </Link>
              </li>
              <li className='nav-item'>
                  {/* <Link className={this.isActiveTab('/resume')} to={resume}
                          onClick={event => this.onTabClick(event, {resume})}
                          style={{ textDecoration: 'none' }}
                          >
                      Resume
                  </Link> */}
                  <a href={newResume} target="_blank" rel="noopener noreferrer" className="resume-link">Resume</a>
              </li>
          </div>
        </ul>
      ) 
  }

};

// export default PageTabs;