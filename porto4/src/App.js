import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageTabs from './components/PageTabs';
import About from './components/about/About'
import Resume from './components/about/Resume'
import Work from './components/work/Work'

class App extends React.Component {

  state = {
    projects: {

    }
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
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
