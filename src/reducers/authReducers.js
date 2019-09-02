const initState = {
  authError: null
};

const authReducers = (state = initState, action) => {
  switch(action.type) {
    case 'LOGIN_SUCCESS': 
    return{
      ...state,
      authError: null
    }
    case 'LOGIN_ERROR': 
        return {
          ...state,
          authError: 'Login failed'
        }

    case 'SIGNOUT_SUCCESS': 
    console.log('successfully signed out')
    return {
      ...state,
    }

    case 'SIGNUP_SUCCESS': 
    console.log('successfully signed up')
    return {
      ...state,
      authError: null
    }

    case 'SIGNUP_ERROR': 
    console.log('Couldnt sign up')
    return {
      ...state,
      authError: action.err.message
    }

    default: return {
      ...state
    }

  }
}

export default authReducers;