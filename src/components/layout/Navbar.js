import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import {connect} from 'react-redux'

const Navbar = (props) => {
  const {auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile = {profile}/> : <SignedOutLinks />

  return (
    <React.Fragment>
      <nav className = "nav nav-wrapper grey darken-3">
        <div className = "container row">
          <div className="col l3 s12">
            <Link to = '/' className = "brand-logo">My Website</Link>
          </div>
          <div className = "col l8 offset-l3 right hide-on-med-and-down">
            {links}
          </div>
          <div className = "col s3 m3 hide-on-large-only left ">
            <div className = "row">
              <a href="#" class="sidenav-trigger" data-target="mobile-links">
                <i class="material-icons">menu</i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)