import React from 'react'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../../styles/work/test-card.css'
import { Link } from 'react-router-dom';

export default class TestCard extends React.Component {

    render() {
        return (
            <div className="card-wrapper" id={this.props.position}>
                <div className="card-content">
                    <h1>{this.props.name}</h1>
                    <div className="tags-wrapper">
                        {/* {this.props.tags.map((tag, index) => {
                            if (index == this.props.tags.length - 1) {
                                return(
                                    <p className="tag">{tag} </p>
                                )
                            } else {
                                return(
                                    <p className="tag">{tag},</p>
                                )
                            }
                        })} */}
                        <p className="project-tag">{this.props.tags[0]}, {this.props.tags[1]}, {this.props.tags[2]} {this.props.tags[3] ? `, ${this.props.tags[3]}` : null}</p>
                    </div>
                    {/* <p> */}
                        {this.props.id == 10 
                        ? <p className="blurb">Inspired by the team at <a href="https://paravelinc.com/work/tmfo/" id="paravel" target="_blank">Paravel</a> I decided to copy their "The Many Faces Of" series and make a fanpage of sorts for my favorite director, Quentin Tarantino</p> 
                        : <p className="blurb">{this.props.blurb}</p> 
                        }
                    {/* </p> */}
                    <div className="card-content-links">
                    {this.props.github && this.props.live  ? 
                        <>
                        <a href={this.props.live} target="_blank"><LaunchIcon className="icon" fontSize="large"></LaunchIcon></a>
                        <a href={this.props.github} target="_blank"><GitHubIcon className="icon second-icon" fontSize="large"></GitHubIcon></a>
                        </>
                        : 
                        this.props.github ? 
                        <>
                        <a href={this.props.github} target="_blank"><GitHubIcon className="icon" fontSize="large"></GitHubIcon></a>
                        <LaunchIcon className="icon second-icon hidden-icon" fontSize="large"></LaunchIcon>
                        </>
                        :
                        <Link to={`projects/${this.props.project}`} className="view-case">
                            <p className="view-case-study">View Case Study</p> 
                        </Link>
                        }
                    </div>
                </div>
                <div className="card-image" >
                    {/* <img src={map}></img> */}
                    {
                    this.props.github && this.props.live 
                    ? <a href={this.props.live} target="_blank">
                        <div className="thumbnail">
                            <img src={this.props.thumbnail}></img>
                        </div>
                    </a>
                    : this.props.github 
                    ? <a href={this.props.github} target="_blank">
                        <div className="thumbnail">
                            <img src={this.props.thumbnail}></img>
                        </div>
                    </a>
                    : <Link to={`projects/${this.props.project}`}>
                        <div className="thumbnail">
                            <img src={this.props.thumbnail}></img>
                        </div>
                     </Link>
                }
                </div>
            </div>
        )
    }
}