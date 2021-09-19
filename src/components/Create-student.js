import React, { Component } from "react";
import axios from 'axios';
export default class CreateStudent extends Component {



    constructor(props){
        super(props)

         // Setting up functions
    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);


            this.state = {
                name: '',
                email: '',
                rollno: ''
            }
    }
    onSubmit(e){
        e.preventDefault()
        const studentObject = {
            name: this.state.name,
            email: this.state.email,
            rollno: this.state.rollno
        };
        axios.post('http://localhost:3000/posts', studentObject)
        .then(res => 
            console.log(res.data)
        );

        this.setState({ name: '', email: '', rollno: '' })
    }     
    
     onChangeStudentName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeStudentEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeStudentRollno(e) {
        this.setState({rollno: e.target.value})
      }
    
 
    render() { 
        return ( 
            <form onSubmit={this.onSubmit}>
            <h3>Create Student</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" value={this.state.name} 
                onChange={this.onChangeStudentName}
                placeholder="Enter Nname" />
            </div>

         

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" value={this.state.email}
                onChange={this.onChangeStudentEmail}
                placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="number" className="form-control" value={this.state.rollno} 
                onChange={this.onChangeStudentRollno}
                placeholder="Enter Roll Number" />
            </div>

            <button type="submit" className="btn btn-primary  mt-3">Create Student</button>
             
        </form>
        )
    }
}
 
 