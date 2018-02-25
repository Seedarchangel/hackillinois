import React, { Component } from 'react'
import { Image, List, Menu, Button, Input, Dropdown, Card, Label, Segment, Table, Message , Loader, Header, Icon} from 'semantic-ui-react'
import {Redirect, Link } from 'react-router-dom'
import axios from "axios"

import styles from './user_home.css'

class UserHome extends Component{

    constructor(props){
		super(props);
		this.state={
            navbarMessage:'DashBoard',
            activeItem: 'Overview',
            Onshow: 'Projects',
            user: 'Xiang'
	    };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    handleOnshow    = (e, { name }) => this.setState({ Onshow:name })

    render(){
        return(
            <div className="all">
                <div className="navbar">
                    <Segment inverted size="mini"  className="navbar_seg">
                        <Menu size='small' inverted secondary>
                            <Menu.Item header className="navbar_header">{this.state.navbarMessage}</Menu.Item>
                            <Menu.Item position="right" name='Sign Out' active={true} onClick={this.handleItemClick} />
                        </Menu>
                    </Segment>
                </div>
                <div className="main">
                    <div className="title">
                        <Header color="blue" as='h2'>
                            <Icon color="black" name='browser' />
                            <Header.Content>
                                {this.state.user + "'s DashBoard"}
                                <Header.Subheader>
                                    View your project and tasks
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                    </div>
                    <Menu size='small' attached='top' tabular>
                        <Menu.Item name='Projects' active={this.state.Onshow === 'Projects'} onClick={this.handleOnshow} />
                        <Menu.Item name='In-process Tasks' active={this.state.Onshow === 'In-process Tasks'} onClick={this.handleOnshow} />
                        <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon={{ name: 'search', link: true }} placeholder={'Search '+ this.state.Onshow} />
                        </Menu.Item>
                        </Menu.Menu>
                    </Menu>
                    <Segment attached='bottom'>
                    </Segment>
                </div>
            </div>
        );
    }

}

export default UserHome
