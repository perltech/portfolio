import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/Main/Main';
import TitleText from './components/TitleText/TitleText';
// import {__values} from 'tslib';
import ContactInfo from './components/ContactInfo/ContactInfo';
import GuestName from './components/GuestName/GuestName';
import Modal from './components/Modal/Modal';
import ProgrammerQuote from './components/ProgrammerQuote/ProgrammerQuote';

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
            "Slav",
            "مرحبا",
            "Cześć",
            //   "Olá"
            "Goodbye"
        ];

        this.ProgrammerQuote = [
            {"Bjarne Stroustrup": `If you ever think you've come to a simple solution, you've underestimated the complexity of the problem`},
            {nextQuote: "quoteText"}
        ];

        this.state = {
            announcement: '',
            guestName: '',
            modalIsOpen: true,
            showGuestName: false,
            quote: '',
            showQuote: false
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
        //TODO: Sync timers
        this.timerAnnouncement = setInterval(() => this.setAnnouncement(), 1000);
        this.timerQuote = setInterval(() => this.setQuote(), 5000);
    }

    componentWillUnmount() {
        clearInterval(this.timerAnnouncement);
        clearInterval(this.timerQuote);
    }

    handleInputChange(event) {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleModal() {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
            showGuestName: !this.state.showGuestName,
            showQuote: !this.state.showQuote
        })
    }
    setAnnouncement() {
        if (this.state.guestName && this.state.showGuestName) {
            let currentAnnouncement = this
                .announcementArray
                .shift(),
                finalAnnouncment = this.announcementArray[this.announcementArray.length - 1];
            if (currentAnnouncement === finalAnnouncment) {
                // TODO: Unmount announcement timer
                return this.setState({announcement: '', showGuestName: false})
            }
            return this.setState({announcement: currentAnnouncement});
        }
    }

    setQuote() {
        let currentQuote = this
            .ProgrammerQuote
            .shift();
        this
            .ProgrammerQuote
            .push(currentQuote);
        return this.setState({quote: currentQuote});
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
                <ProgrammerQuote quote={this.state.quote} showQuote={this.state.showQuote}/>
            </Main>
        )
    };
}

export default App;
