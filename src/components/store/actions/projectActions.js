export const createProject = (project) => {
  return  (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile
    const authId = getState().firebase.auth.uid
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authId,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT',
        project
      });
    })
    // .catch((err) => {
    //   dispatch({type: 'ERR_PROJECT',err})
    // })
    
  }
}
