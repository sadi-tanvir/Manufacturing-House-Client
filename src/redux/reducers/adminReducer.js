import {
  SET_ADMIN,
  FALSE_ADMIN
} from "../actions/types";

const initialState = {
  isAdmin: false
};

const adminReducer = (state = initialState, action) => {
  if (action.type === SET_ADMIN) {
    return {
      ...state,
      isAdmin: true
    };
  }else if (action.type === FALSE_ADMIN) {
    return {
      ...state,
      isAdmin: false
    };
  }  else {
    return {
      ...state,
    };
  }
};

export default adminReducer;
