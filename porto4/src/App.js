import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './components/PageTabs';
import About from './components/about/About'
import Resume from './components/about/Resume'
import Work from './components/work/Work'
import Test from './components/test'
import Hmm from './components/hmm'
import Vynd from './components/Vynd'
import OutboundTransmissions from './components/OutboundTransmissions'

import map from './assets/thumbnails/map.svg'
import wealth from './assets/thumbnails/realwealth.svg'
import heddit from './assets/thumbnails/heddit.svg'
import food from './assets/thumbnails/food.svg'
import trello from './assets/thumbnails/trello.svg'
import drones from './assets/thumbnails/drones.svg'
import quentin from './assets/thumbnails/quentin.svg'
import spirit from './assets/thumbnails/spirit.svg'
import vynd from './assets/thumbnails/vynd.svg'
import launchpad from './assets/thumbnails/launchpad.svg'
import tpm from './assets/thumbnails/tpm.svg'
import transmission from './assets/thumbnails/transmission.svg'

import './styles/work/test-card.css'

class App extends React.Component {
  tpmBlurb = 
  <p>
    As part of my internship with <a href="https://clearingcustody.fidelity.com/app/item/RD_9883092/integration-xchange.html" className="fidelity-span" target="_blank">Fidelity Investments</a>, I helped redesign Fidelity's Third-Party Marketplace, an online store for Fintech integrations with over 2000 annual users.
  </p>

  wineBlurb = 
  <p>
    I led design on a <a href="https://www.nsf.gov/news/special_reports/i-corps/" target="_blank" className="wine-blurb">NSF I-Corps</a> funded project to gamify the winery & wine event experience.
  </p>

  state = {
    projects: [
      {
        name: "We're #1",
        id: 1,
        position: 'one',
        type: 'data viz',
        tags: ['data visualization', 'd3.js', 'svg', 'topojson'],
        github: 'https://github.com/sherif-ffs/we-are-number-1.github.io',
        live: 'https://sherif-ffs.github.io/we-are-number-1.github.io/',
        blurb: "Website built using D3.js, svg, and topojson to compare countries and continents on 30+ metrics. Features include, an interactive heat-map, customizable bar-charts, and scatterplots to show correlation between certain metrics.",
        thumbnail: map,
        project: null,
        color: '#d3696f'
      },
      {
        name: "Visualize the World's Wealth",
        type: 'data viz',
        id: 2,
        tags: ['data visualization', 'd3.js', 'svg'],
        github: 'https://github.com/sherif-ffs/wealth.github.io',
        live: 'https://sherif-ffs.github.io/wealth.github.io/',
        blurb: 'There’s a lot of money in the world, I built this website to see which countries, regions, and percentiles own what.',
        thumbnail: wealth,
        project: null,
        color: '#d3696f'
      },
      // {
      //   name: "LaunchPad",
      //   type: 'design',
      //   id: 3,
      //   tags: ['ui/ux', 'figma', 'internship', 'google design sprint'],
      //   github: null,
      //   live: null,
      //   blurb: 'As part of my summer internship I participated in a two week google design sprint to improve the remote onboarding experience for new Fidelity UXD Hires.',
      //   thumbnail: launchpad,
      //   project: 'launchpad',
      //   color: '#d3696f'
      // },

      {
        name: "You're Not Yelping",
        type: 'web development',
        id: 4,
        tags: ['web development', 'react.js', 'redux'],
        github: 'https://github.com/sherif-ffs/react-redux-yelp-clone',
        live: 'https://yourenotyelping.netlify.app/',
        blurb: 'Yelp clone built using React.js, Redux, Material UI, React-Router, and React-Map-GL.',
        thumbnail: food,
        project: null,
        color: '#C0212E'
      },
      // {
      //   name: "Third-Party Marketplace",
      //   type: 'design',
      //   id: 5,
      //   tags: ['ui/ux', 'figma', 'internship'],
      //   github: null,
      //   live: null,
      //   // blurb: "As part of my internship with Fidelity Investments, I helped redesign Fidelity's Third-Party Marketplace, an online store for Fintech integrations with over 2000 annual users.",
      //   blurb: this.tpmBlurb,
      //   thumbnail: tpm,
      //   project: 'tpm',
      //   color: '#d3696f'
      // },
      {
        name: "Heddit",
        type: 'web development',
        id: 6,
        tags: ['web development', 'flask', 'jinja2', 'python'],
        github: 'https://github.com/sherif-ffs/flask-reddit-clone',
        live: null,
        blurb: 'Reddit clone built using Flask, Jinja, and SQLAlchemy.',
        thumbnail: heddit,
        project: null,
        color: '#d3696f'
      },
      // {
      //   name: "Outbound Transmissions",
      //   type: 'design',
      //   id: 7,
      //   tags: ['ui/ux', 'figma', 'internship'],
      //   github: null,
      //   live: null,
      //   blurb: 'As part of my summer internship I worked on the redesign of outbound transmissions manuals.',
      //   thumbnail: transmission,
      //   project: 'outbound',
      //   color: '#d3696f'
      // },
      // {
      //   name: "Vynd",
      //   type: 'design',
      //   id: 12,
      //   tags: ['design','figma'],
      //   github: null,
      //   live: null,
      //   // blurb: `I led design on a NSF I-Corps funded project to gamify the winery & wine event experience.`,
      //   blurb: this.wineBlurb,
      //   thumbnail: vynd,
      //   project: 'vynd',
      //   color: '#d3696f'
      // },
      {
        name: "Trello Clone",
        type: 'web development',
        id: 8,
        tags: ['web development', 'react.js', 'styled components'],
        github: 'https://github.com/sherif-ffs/react-trello-clone',
        live: 'https://is322-task-tracker.netlify.com/',
        blurb: 'Trello Clone I built using React.js, material-ui, styled components, and React-Beautiful-DnD.',
        thumbnail: trello,
        project: null,
        color: '#d3696f'
      },
      {
        name: "The Drone Program",
        type: 'data viz',
        id: 9,
        tags: ['data visualization', 'charts.js', 'sheets.js'],
        github: 'https://github.com/sherif-ffs/dronewar',
        live: 'https://the-drone-program.herokuapp.com/index.html',
        blurb: 'Historical data about every reported covert united states drone strike until the beginning of 2020.',
        thumbnail: drones,
        project: null,
        color: '#d3696f'
      },
      {
        name: "Quentin Tarantino",
        type: 'web development',
        id: 10,
        tags: ['web development','photoshop', 'html/css/js' ],
        github: 'https://github.com/sherif-ffs/quentin',
        live: 'https://quentin-tarantino.herokuapp.com/index.html',
        blurb: `Inspired by the team at https://paravelinc.com/ I decided to copy their "The Many Faces Of" series and make a fanpage of sorts for one of my favorite directors, Quentin Tarantino.`,
        thumbnail: quentin,
        project: null,
        color: '#d3696f'
      },
      {
        name: "Spirited Away Theme",
        type: 'web development',
        id: 11,
        tags: ['web development','vs-code extension', 'miscellaneous'],
        github: 'https://github.com/sherif-ffs/vscode-theme',
        live: 'https://sherif-ffs.github.io/spirited-away-site.github.io/',
        blurb: `VS Code theme loosely based on Studio Ghibli's Spirited Away.`,
        thumbnail: spirit,
        project: null,
        color: '#d3696f'
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
             <Route path="/projects/launchpad" 
              render={(routeProps) => <Test {...routeProps} />}
              />
              <Route path="/projects/tpm" 
              render={(routeProps) => <Hmm {...routeProps} />}
              />
              <Route path="/projects/Vynd" 
              render={(routeProps) => <Vynd {...routeProps} />}
              />
              <Route path="/projects/outbound"
              render={(routeProps) => <OutboundTransmissions {...routeProps} />}
              />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
