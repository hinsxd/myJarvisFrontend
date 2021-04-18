import {
  SHOW_ERROR_BOX,
  SHOW_SUCCESS_BOX,
  CLEAR_BOX,
} from "../../actions/auth";

const initBox = { type: null, message: "" };

const authMessageBox = (state = initBox, action) => {
  switch (action.type) {
    case SHOW_SUCCESS_BOX: {
      return {
        type: "success",
        message: action.content,
      };
    }
    case SHOW_ERROR_BOX: {
      return {
        type: "error",
        message: action.content,
      };
    }
    case CLEAR_BOX: {
      return initBox;
    }
    default: {
      return state;
    }
  }
};

export default authMessageBox;
