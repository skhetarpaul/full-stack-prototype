import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

const ProjectDetails = (props) => {
  const {project, auth} = props;
  if(!auth.uid) return <Redirect to = '/signin' />
  console.log('project is ,',project);
  if(project) {
      return(
      <div className = "container section project-details">
      <div className = "card z-depth-0">
        <div className ="card-content">
          <span className = "card-title">{project.title}</span>
          <p>{project.content}
          </p>
        </div>
        <div className = "card-action lighten-3 grey-text">
          <div> Posted by {project.authorFirstName + ' ' } { project.authorLastName}</div>
          <div>September 4, 2019</div>
        </div>
      </div>
    </div>
    )
  }
  else {
   return( <div className = "container center">
      <p>Loading Project details...</p>
    </div>)
  }
  //console.log(props)

}

const mapStateToProps = (state, ownProps) => {
  console.log('props are',ownProps);
  console.log('state is ',state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}
// export default ProjectDetails
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(ProjectDetails)


