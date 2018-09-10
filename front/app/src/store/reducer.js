// Initial State
const initialState = {
  user: 'guest',
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOAD_HOME_DATA':
      return {
        ...state,
        news: action.data.news,
        leagueTable: action.data.league,
      };
    case 'LOAD_HEADER_DATA':
      return {
        ...state,
        menus: action.data.menus,
      };
    case 'LOGIN':
      return {
        ...state,
        user: 'user',
        username: action.data.data.user.user_login,
        email: action.data.data.user.user_email,
      };
    case 'CHECK_LOGIN':
      return {
        ...state,
        user: 'user',
        username: action.data.username,
        email: action.data.email,
      };
    default:
      return state;
  }
};

// Actions creators
export const loadHomeData = data => ({
  type: 'LOAD_HOME_DATA',
  data,
});

export const loadHome = () => ({
  type: 'LOAD_HOME',
});

export const loadHeaderData = data => ({
  type: 'LOAD_HEADER_DATA',
  data,
});

export const loadHeader = () => ({
  type: 'LOAD_HEADER',
});

export const login = data => ({
  type: 'LOGIN',
  data
})

export const checkLogin = data => ({
  type: 'CHECK_LOGIN',
  data
})
