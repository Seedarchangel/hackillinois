import React, { Component } from 'react'
import { Image, List, Menu, Button, Input, Dropdown, Card, Label, Segment, Table, Message , Loader, Header, Icon, Statistic} from 'semantic-ui-react'
import {Redirect, Link } from 'react-router-dom'
import axios from "axios"

import styles from './project.css'

const sample_project = {
    description: "This is a sample project",
    name: "project",
    repo: "https:\/\/github.com/xiangc2/Hackillinois_frontend.git",
    total_task: 100,
    task_finished: 23,
    task_in_progress: 12,
    task_unassigned: 11,
    task: null
}

class Project extends Component{

    constructor(props){
		super(props);
		this.state={
            project: sample_project,
            activeItem: 'Details'
	    };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render(){
        return(
            <div className="all">
                <div className="navbar">
                    <Segment inverted size="mini">
                        <Menu size='small' inverted secondary>
                            <Menu.Item header className="navbar_header">{"Project > "+this.state.project.name}</Menu.Item>
                            <Menu.Item position="right" name='Overview' active={this.state.activeItem === 'Overview'} onClick={this.handleItemClick} />
                            <Menu.Item name='Details' active={this.state.activeItem === 'Details'} onClick={this.handleItemClick} />
                            <Menu.Item name='Sign Out' active={this.state.activeItem === 'Sign Out'} onClick={this.handleItemClick} />
                        </Menu>
                    </Segment>
                </div>
                <div className="main">
                    <div className="title">
                        <Header color="blue" as='h2'>
                            <Icon color="grey" name='tasks'/>
                            <Header.Content>
                                {"Details"}
                                <Header.Subheader>
                                    {this.state.project.name}
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </div>
                </div>
                <div className="details">
                    <div className="description">
                        <Header>Description</Header>
                        <p className="text">{this.state.project.description}</p>
                    </div>
                    <Menu fluid widths={4}>
                        <Menu.Item name={'total'}>
                            <a>Total Tasks</a>
                            <Label color='orange'>{this.state.project.total_task}</Label>
                        </Menu.Item>
                        <Menu.Item name={'Unassigned'}>
                            <a>Unassigned Tasks</a>
                            <Label color='yellow'>{this.state.project.task_unassigned}</Label>
                        </Menu.Item>
                        <Menu.Item name={'Finished'}>
                            <a>Finished Tasks</a>
                            <Label color='olive'>{this.state.project.task_finished}</Label>
                        </Menu.Item>
                        <Menu.Item name={'In-progress'}>
                            <a>In-progress Tasks</a>
                            <Label color='green'>{this.state.project.task_in_progress}</Label>
                        </Menu.Item>
                    </Menu>
                    <div className="task_list">

                    </div>
                </div>
                <div className="statistic">

                </div>
            </div>
        );
    }

}

export default Project
