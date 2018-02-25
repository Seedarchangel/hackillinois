import React, { Component } from 'react'
import { Image, List, Menu, Button, Input, Dropdown, Card, Label, Segment, Table, Message , Loader, Header, Icon, Form} from 'semantic-ui-react'
import {Redirect, Link, Router, browserHistory, hashHistory } from 'react-router-dom'
import axios from "axios"

import styles from './task.css'

const sample_project = {
    description: "This is a sample project",
    name: "task",
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

    handleItemClick = (e, { name }) =>{
        if(name == "Details"){
            console.log("hi!")
            this.context.router.history.push({
                pathname: '/project',
                state: {project: this.state.project}
            })
        }
        this.setState({ activeItem: name })
    }

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
                            <Icon color="grey" name='cloud upload'/>
                            <Header.Content>
                                {"Create Project"}
                            </Header.Content>
                        </Header>
                    </div>
                </div>
                <Form>
                    <Form.Input fluid label='Project Name' placeholder='' />
                    <Form.Input fluid label='Github Repo' placeholder='' />
                    <Form.TextArea label='Description' placeholder='Tell us something about your project...' />
                    <Button secondary type='submit'>Back</Button>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </div>
        );
    }

}

export default Graph
