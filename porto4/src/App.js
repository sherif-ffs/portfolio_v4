import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './components/PageTabs';
import About from './components/about/About'
import Resume from './components/about/Resume'
import Work from './components/work/Work'
import Test from './components/test'

import map from './assets/map.png'
class App extends React.Component {

  state = {
    projects: [
      {
        name: "We're #1",
        id: 1,
        type: 'data viz',
        tags: ['data vizualization', 'd3.js', 'svg', 'topojson'],
        github: 'https://github.com/sherif-ffs/we-are-number-1.github.io',
        live: 'https://sherif-ffs.github.io/we-are-number-1.github.io/',
        blurb: 'Comparing countries on 30+ different metrics.',
        thumbnail: map
      },
      {
        name: "Visualize the World's Wealth",
        type: 'data viz',
        id: 2,
        tags: ['data vizualization', 'd3.js', 'svg'],
        github: 'https://github.com/sherif-ffs/wealth.github.io',
        live: 'https://sherif-ffs.github.io/wealth.github.io/',
        blurb: 'There’s a lot of money in the world, I built this website to see who owns what.',
        thumbnail: ''
      },
      {
        name: "LaunchPad",
        type: 'design',
        id: 3,
        tags: ['ui/ux', 'figma', 'internship'],
        github: null,
        live: null,
        blurb: 'There’s a lot of money in the world, I built this website to see who owns what.',
        thumbnail: ''
      },
      {
        name: "You're Not Yelping",
        type: 'web development',
        id: 4,
        tags: ['web development', 'react.js', 'redux'],
        github: 'https://github.com/sherif-ffs/react-redux-yelp-clone',
        live: 'https://yourenotyelping.netlify.app/',
        blurb: 'Yelp clone built using React.js, Redux, Material UI, React-Router, and Map gl',
        thumbnail: ''
      },
      {
        name: "Third-Party Marketplace",
        type: 'design',
        id: 5,
        tags: ['ui/ux', 'figma', 'internship'],
        github: null,
        live: null,
        blurb: 'Third-Party Marketplace redesign.',
        thumbnail: ''
      },
      {
        name: "Heddit",
        type: 'web development',
        id: 6,
        tags: ['web development', 'flask', 'jinja2', 'python'],
        github: 'https://github.com/sherif-ffs/flask-reddit-clone',
        live: null,
        blurb: 'Reddit clone built using Flask, Jinja, and SQLAlchemy.',
        thumbnail: ''
      },
    ]
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <PageTabs />
          <div>
            <Route path="/" exact 
            render={(routeProps) => <Work {...routeProps} state={this.state} loading={this.state.loading} projects={this.state.projects} />}
            />
            <Route path="/about"
              render={(routeProps) => <About {...routeProps} state={this.state} loading={this.state.loading} />}
             />
             <Route path="/resume"
              render={(routeProps) => <Resume {...routeProps} />}
             />
             <Route path="/test" 
              render={(routeProps) => <Test {...routeProps} />}
              />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
