import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main/Main';
import TitleText from './components/TitleText/TitleText';
import {__values} from 'tslib';
import GuestName from './components/GuestName/GuestName';

class App extends React.Component {

    constructor(props) {
        super();
        this.announcementArray = ["Hello", "Bonjour", "Bienvenue"];
        this.state = {
            announcement: '',
            guestName: ''
        }
        this.setAnnouncement = this
            .setAnnouncement
            .bind(this);

        this.handleInputChange = this
            .handleInputChange
            .bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setAnnouncement(), 1000);
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    setAnnouncement() {
        // Get first announcement
        let currentAnnouncement = this
            .announcementArray
            .shift();
        // Send announcement to the back after it's been used
        this
            .announcementArray
            .push(currentAnnouncement);
        return this.setState({announcement: currentAnnouncement});
    }

    render() {
        return (
            <Main>
                <GuestName handleInputChange={this.handleInputChange}/>
                <TitleText
                    announcement={this.state.announcement}
                    guestName={this.state.guestName}/>
            </Main>
        )
    };
}

export default App;
