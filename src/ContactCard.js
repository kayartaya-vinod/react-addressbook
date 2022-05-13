import React, { Component } from 'react';

export class ContactCard extends Component {
    removeContact = (id) => {
        if (window.confirm('Are you sure to delete this?')) {
            let { deleteContact } = this.props;
            deleteContact(id);
        }
    };

    render() {
        let { contact } = this.props;

        return (
            <>
                <div className='card mb-3'>
                    <div className='row g-0'>
                        <div className='col-md-3'>
                            <img
                                style={{ maxHeight: '100px' }}
                                src={contact.avatar}
                                className='img-fluid rounded-start'
                                alt={contact.name}
                            />
                        </div>
                        <div className='col-md-8'>
                            <div className='card-body'>
                                <h5 className='card-title'>{contact.name}</h5>
                                <p className='card-text'>{contact.email}</p>
                                <p className='card-text'>{contact.phone}</p>
                            </div>
                        </div>
                        <div className='col-md-1 text-end'>
                            <button
                                className='btn text-danger btn-link'
                                style={{ textDecoration: 'None' }}
                                onClick={() => this.removeContact(contact.id)}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ContactCard;
