import React from 'react';
import axios from 'axios';

import './Signup.css'

class Signup extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        console.log("username: " + this.state.username)

        axios.post('/', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response)
            
            if (response.data) {
                console.log('successful sign up!')
                this.setState({
                    redirectTo: '/login'
                })
            }
            else {
                console.log('Sign up failed :(')
            }

        })
        .catch(err => {
            console.log('Sign up server error')
            console.log(err)
        })
    }
    
    render(){
        return (
            <div className='Signup'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                    <label htmlFor="username">Password:</label>
                    <input 
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange.bind(this)}
                    />
                    
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default Signup
