import React, { Component } from 'react'
import { Image, List, Menu, Button, Input, Dropdown, Card, Label, Segment, Table, Message , Loader, Header, Icon} from 'semantic-ui-react'
import {Redirect, Link } from 'react-router-dom'
import axios from "axios"

import styles from './graph.css'

const sample_project = {
    description: "This is a sample project",
    name: "graph",
    repo: "https:\/\/github.com/xiangc2/Hackillinois_frontend.git",
    total_task: 100,
    task_finished: 23,
    task_in_progress: 12,
    task_unassigned: 11,
    task: null
}

class Graph extends Component{

    constructor(props){
		super(props);
		this.state={
            project: sample_project,
            activeItem: 'Overview'
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
                            <Icon color="grey" name='sitemap' />
                            <Header.Content>
                                {"Dependency Chart"}
                                <Header.Subheader>
                                    {this.state.project.name}
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </div>
                </div>
                <div className="graph">
                //put graph here
                </div>
            </div>
        );
    }

}

export default Graph
