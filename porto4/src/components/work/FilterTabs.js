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
            <>
                <h1 className="selected-work">Selected Work 👇</h1>
                <div className="filter-wrappers">
                    <div className="filter-tab active-filter-tab first-tab" onClick={e => this.props.reset(e)}>
                        All ({this.props.projects.length})
                    </div>
                    <div className="filter-tab second-tab" onClick={e => this.props.filterWebDev(e)}>
                        Web Development ({this.props.projects.filter(project => project.type == 'web development').length})
                    </div>
                    <div className="filter-tab third-tab" onClick={e => this.props.filterDesigns(e)}>
                        Design ({this.props.projects.filter(project => project.type == 'design').length})
                    </div>
                    <div className="filter-tab last-tab" onClick={e => this.props.filterDataViz(e)}>
                        Data Visualization ({this.props.projects.filter(project => project.type == 'data viz').length})
                    </div>
                </div>
            </>
        )
    }
}