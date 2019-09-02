const initState = {
  projects : [{id: '1', title: 'Project 1', content: 'blah blah blah!!!'},
  {id: '2', title: 'Project 2', content: 'blah blah blah!!!'},
  {id: '3', title: 'Project 3', content: 'blah blah blah!!!'}]
};

const projectReducers = (state = initState, action) => {
  if(action.type === 'CREATE_PROJECT') {  
    console.log('action created',action.project)
  }
  return state
}

export default projectReducers