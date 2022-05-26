import {
  IS_CHANGE
} from "../actions/types";

const initialState = {
  isChange: false
};

const globalReducer = (state = initialState, action) => {
  if (action.type === IS_CHANGE) {
    return {
      ...state,
      isChange: state.isChange ? false : true
    };
  }  else {
    return {
      ...state,
    };
  }
};

export default globalReducer;
