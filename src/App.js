import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main/Main';
import TitleText from './components/TitleText/TitleText';
// import {__values} from 'tslib';
import ContactInfo from './components/ContactInfo/ContactInfo';
import GuestName from './components/GuestName/GuestName';
import Modal from './components/Modal/Modal';

// TODO: Import files with CSS as entire folder

class App extends React.Component {

    constructor(props) {
        super();
        this.announcementArray = [
          "Hello",
          "Hola",
          "Bonjour",
          "Hallo",
          "Ciao",
          "Zdravo",
          "Hei",
          "Salve",
          "שלום",
          "Привет",
          "Γειά σου",
          "Xin chào",
          "नमस्ते",
          "你好",
          "여보세요",
          "こんにちは",
          "slav",
          "مرحبا",
          "Cześć",
        //   "Olá"
          "Goodbye"
          ];
        this.state = {
            announcement: '',
            guestName: '',
            modalIsOpen: true,
            showGuestName: false
        }

        this.handleInputChange = this
            .handleInputChange
            .bind(this);

        this.setAnnouncement = this
            .setAnnouncement
            .bind(this);

        this.handleModal = this
            .handleModal
            .bind(this);
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.setAnnouncement(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            showGuestName: !this.state.showGuestName
        })
    }

    // randomVal(arr) {

    // }
    setAnnouncement() {
      if (this.state.guestName && this.state.showGuestName) {
        let currentAnnouncement = this
        .announcementArray
        .shift();
        console.log(currentAnnouncement);
            if (currentAnnouncement === "Goodbye") {
                return this.setState({
                    announcement: '',
                    showGuestName: false
                })
            }
        return this.setState({announcement: currentAnnouncement});       
      }
    }

    setQuote() {
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
                <ContactInfo/>
                <Modal handleModal={this.handleModal} show={this.state.modalIsOpen}>
                    <GuestName handleInputChange={this.handleInputChange}/>
                </Modal>
                <TitleText
                    announcement={this.state.announcement}
                    guestName={this.state.guestName}
                    showGuestName={this.state.showGuestName}/>
            </Main>
        )
    };
}

export default App;
