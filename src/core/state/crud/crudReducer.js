export const initialState = {};

const crudReducer = (state = initialState, action) => ({
  ...state,
  [action.endpoint]: action,
});

export default crudReducer;
