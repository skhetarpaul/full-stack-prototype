import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../store/actions/authActions'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
  state = {
    email : '',
    password: ''
  }
  

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState ({
      [e.target.id] : e.target.value
    })
  }
  render() {
    const {auth} = this.props;
    if(auth.uid) return <Redirect to = '/' />
    const {authError} = this.props;
    return (
      <div className = "container">
        <form onSubmit = {this.handleSubmit} className = "white">
          <h5 className = "grey-text text-darken-2">Sign In</h5>
          <div className = "input-field">
            <label htmlFor = "email">Email</label>
            <input type = "text" id = "email" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = "password">Password</label>
            <input type = "password" id = "password" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <button className = "btn blue lighten-3 z-depth-0">Log In</button>
            <div className = "center red-text">
            {authError ? <p> {authError}</p> : null}
          </div>
          </div>
          
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)