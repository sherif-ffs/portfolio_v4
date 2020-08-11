import React from 'react'
import Anime from "@mollycule/react-anime";
import animejs, { AnimeInstance } from "animejs";
import '../../styles/work/project-card.css'
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Link } from 'react-router-dom';

export default class ProjectCard extends React.Component {
    render() {
        console.log('this.props: ', this.props)
        return (
            <div className="project-card-wrapper">
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

                    <h1>{this.props.name}</h1>
                    <div className="tags-wrapper">
                        {this.props.tags.map((tag, index) => {
                            if (index == this.props.tags.length - 1) {
                                return(
                                    <p className="tag">{tag} </p>
                                )
                            } else {
                                return(
                                    <p className="tag">{tag},</p>
                                )
                            }
                        })}
                    </div>
                    <p className="card-blurb">{this.props.blurb}</p>
                    <div className="links-wrapper">
                        {this.props.github && this.props.live  ? 
                        <>
                        <a href={this.props.live} target="_blank"><LaunchIcon className="icon" fontSize="medium"></LaunchIcon></a>
                        <a href={this.props.github} target="_blank"><GitHubIcon className="icon second-icon" fontSize="medium"></GitHubIcon></a>
                        </>
                        : 
                        this.props.github ? 
                        <>
                        <a href={this.props.github} target="_blank"><GitHubIcon className="icon" fontSize="medium"></GitHubIcon></a>
                        <LaunchIcon className="icon second-icon hidden-icon" fontSize="medium"></LaunchIcon>
                        </>
                        :
                        <Link to={`projects/${this.props.project}`} className="view-case">
                            <p className="view-case-study">View Case Study</p> 
                        </Link>
                        }
                    </div>
            </div>
        )
    }
}