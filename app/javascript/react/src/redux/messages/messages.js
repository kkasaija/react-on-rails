const baseURL = "http://127.0.0.1:3000/api/v1/";

const initialState = {
  message: '',
};

// Actions
export const getMessage = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_MESSAGE' });
  await fetch(`${baseURL}messages`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
      })
      .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

// Reducer

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHING_MESSAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_MESSAGE':
      return {
        ...state,
        loaded: false,
        message: action.payload.message.greeting,
      };
    default:
      return state;
  }
};

export default messageReducer;