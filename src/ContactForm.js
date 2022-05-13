import React, { Component } from 'react';

export class ContactForm extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        avatar: '',
    };

    changeHandler = (evt) => {
        let { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    submitHandler = (evt) => {
        evt.preventDefault();

        if (this.state.name.trim().length === 0) {
            alert('Name is mandatory');
            return;
        }

        this.props.addContact(this.state);
        this.setState({
            name: '',
            email: '',
            phone: '',
            avatar: '',
        });
    };

    render() {
        return (
            <>
                <h3>Add a new contact</h3>
                <form onSubmit={this.submitHandler}>
                    <div className='mb-3'>
                        <label for='name' className='form-label'>
                            Name
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            className='form-control'
                            onChange={this.changeHandler}
                            value={this.state.name}
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='email' className='form-label'>
                            Email address
                        </label>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            onChange={this.changeHandler}
                            value={this.state.email}
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='phone' className='form-label'>
                            Phone number
                        </label>
                        <input
                            type='tel'
                            id='phone'
                            name='phone'
                            className='form-control'
                            onChange={this.changeHandler}
                            value={this.state.phone}
                        />
                    </div>
                    <div className='mb-3'>
                        <label for='avatar' className='form-label'>
                            Picture/Avatar URL
                        </label>
                        <input
                            type='avatar'
                            id='avatar'
                            name='avatar'
                            className='form-control'
                            onChange={this.changeHandler}
                            value={this.state.avatar}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        Submit
                    </button>
                </form>
            </>
        );
    }
}

export default ContactForm;
