export const initialState = {};

const authuserReducer = (state = initialState, action) => ({
  ...state,
  [action.endpoint]: action,
});

export default authuserReducer;
