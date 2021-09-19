import React, { Component } from "react";
import axios from 'axios';
export default class Login extends Component {

    constructor(){
        super()
        this.state ={
            email:'',
            password: ''
        }
    // Setting up functions
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){

        e.preventDefault()
        const studentObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:3000/register', studentObject)
        .then(res => 
            console.log(res.data)
        );

        this.setState({ email: '', password: '' })
       
        this.props.history.push('/create-student')

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
                <h3>Sign In</h3>

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

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>
          
        );
    }
}