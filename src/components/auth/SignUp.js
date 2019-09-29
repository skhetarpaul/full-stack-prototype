import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../store/actions/authActions'
import Checkbox from './termsAndConditions';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CheckboxGenre from './CheckboxGenre'

class SignUp extends Component {
  state = {
    email : '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: '',
    contact: '',
    startDate: new Date(),
    years: 0,
    value: ''
    //isChecked: true,//checkbox for checking terms and conditions
  }

  handleDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.password !== this.state.confirmPassword) {
      //message.error("The passwords doesn't match")
      alert("Your password doesn't match")
       return false; // The form won't submit
    } else {
      this.props.signUp(this.state)
    }
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id] : e.target.value
    })
  }

  handleConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value })
  }

  render() {
    const {auth, authError} = this.props;
    if(auth.uid) return <Redirect to = '/' />
    return (
       <React.Fragment>
      <div className = "section container">
        <form onSubmit = {this.handleSubmit} className = "white">
        <h5 className = "grey-text text-darken-2">Sign Up</h5>
          <br/>

          <div className = "row">
            <div className = "input-field col s12 l5 ">
              <label htmlFor = "firstName">First Name</label>
              <input type = "text" id = "firstName" onChange = {this.handleChange}/>
            </div>
            <div className = "input-field col s12 l5 offset-l1">
              <label htmlFor = "lastName">Last Name</label>
              <input type = "text" id = "lastName" onChange = {this.handleChange}/>
            </div>
          </div>
          
          <div className = "row">
            <div className = "s12 m8 l10">
              <label htmlFor = "startDate">Birth date<br/></label>
                <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleDateChange}
                      showTimeSelect
                      dateFormat="Pp"
                  />
            </div>
          </div>
          
          <div className = "input-field">
            <label htmlFor = "email">Email</label>
            <input type = "text" id = "email" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = "password">Password</label>
            <input type = "password" id = "password" onChange = {this.handleChange}/>
          </div>

          <div className = "input-field">
            <label htmlFor = "password">Confirm Password</label>
            <input type = "password" id = "password" onChange = {this.handleConfirmPassword}/>
          </div>
          <div className = "row">
            <div className = "input-field col s12 l4">
              <label htmlFor = "years">Experience in years</label>
              <input type = "number" id = "years" onChange = {this.handleChange}/>
            </div>
          </div>
           <div className = "row">
            <div className = "input-field">
              <label htmlFor = "contact">Telephone Number</label>
              <div className = "col s12 l6">
                <input type = "tel" name = "phone" id = "contact" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" onChange = {this.handleConfirmPassword}/>
              </div>
            </div>
                <div className = "col s12 l4 offset-l2">
                  <span>Format: 123-45-678</span>
                </div>
           </div>
           
          
          <div className = "input-field">
            <button className = "btn blue lighten-3 z-depth-0">Sign Up</button>
            <div className = "red-text center">
              {authError ? <p>{authError}</p>: null}
            </div>
          </div> 
        </form>
      </div>
       </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
