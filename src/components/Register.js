import React, { Component } from "react";
import axios from 'axios';
export default class SignUp extends Component {

    constructor(props){
        super(props)
        this.state ={
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }

               // Setting up functions
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLasttName = this.onChangeLasttName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


    }

    onSubmit(e){
        e.preventDefault()
        const studentObject = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:3000/register', studentObject)
        .then(res => 
            console.log(res.data)
        );

        this.setState({ firstname: '', lastname: '' , email: '', password: '' })
        this.props.history.push('/sign-in')
    }     
    
     onChangeFirstName(e) {
        this.setState({firstname: e.target.value})
      }
    
      onChangeLasttName(e) {
        this.setState({lastname: e.target.value})
      }
    
      onChangeEmail(e) {
        this.setState({email: e.target.value})
      }

      onChangePassword(e) {
        this.setState({password: e.target.value})
      }


    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" value={this.state.firstname} 
                onChange={this.onChangeFirstName} placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control"  value={this.state.lastname} 
                onChange={this.onChangeLasttName} placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={this.state.email} 
                onChange={this.onChangeEmail} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"  value={this.state.password} 
                onChange={this.onChangePassword} placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                 
            </form>
        );
    }
}