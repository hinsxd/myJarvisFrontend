import { STORE_USER_INFO } from "../../actions/auth";

const initUserInfo = {};

const userInfo = (state = initUserInfo, actions) => {
  switch (actions.type) {
    case STORE_USER_INFO: {
      return actions.content;
    }
    default: {
      return state;
    }
  }
};

export default userInfo;
