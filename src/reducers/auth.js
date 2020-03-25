const auth = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {user: action.payload};
    default:
      return state;
  }
};

export default auth;
