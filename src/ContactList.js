import React, { Component } from 'react';
import ContactCard from './ContactCard';

export class ContactList extends Component {
    render() {
        let { contacts, deleteContact } = this.props;

        let contactCards = contacts.map((c, i) => (
            <ContactCard contact={c} key={i} deleteContact={deleteContact} />
        ));

        return (
            <>
                <h3>Contact list</h3>
                {contactCards}
            </>
        );
    }
}

export default ContactList;
