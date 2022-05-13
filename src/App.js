import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

import contacts from './contacts';

export class App extends Component {
    state = { contacts };

    addContact = (contact) => {
        let { contacts } = this.state;
        
        let currentMaxId = Math.max(...contacts.map((c) => c.id));
        contact.id = currentMaxId + 1;

        contacts.push(contact);
        this.setState({ contacts });
    };

    deleteContact = (id) => {
        let { contacts } = this.state;
        let index = contacts.findIndex((c) => c.id === id);
        if (index !== -1) {
            contacts.splice(index, 1);
            this.setState({ contacts });
        }
    };

    render() {
        return (
            <>
                <div className='container'>
                    <div className='alert alert-primary'>
                        <h1>Addressbook app - v1.0</h1>
                    </div>

                    <div className='row'>
                        <div className='col-5'>
                            <ContactForm addContact={this.addContact} />
                        </div>
                        <div className='col-7'>
                            <ContactList
                                contacts={this.state.contacts}
                                deleteContact={this.deleteContact}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
