import React from 'react'

import '../../styles/work/filter-tabs.css'

export default class FilterTabs extends React.Component {

    state = {
        projects: []
    }
    
    componentDidMount() {
        this.setState({
            projects: this.props.projects
        })
    }

    render() {
        return (
            <div className="filter-wrappers">
                <div className="filter-tab active-filter-tab first-tab">
                    All
                </div>
                <div className="filter-tab">Web Dev</div>
                <div className="filter-tab">UI/UX</div>
                <div className="filter-tab last-tab">Data Viz</div>
            </div>
        )
    }
}