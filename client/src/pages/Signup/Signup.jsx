import React from 'react';

import './Signup.css'

class Signup extends React.Component {
    state = {
        username: ''
    }

    handleChange(event){
        this.setState({
            username: event.target.value
        })
    }
    
    render(){
        return (
            <div className='Signup'>
                <form>
                    <label htmlFor="username">Username:</label>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange.bind(this)}
                    />
                </form>
            </div>
        )
    }
}
export default Signup
