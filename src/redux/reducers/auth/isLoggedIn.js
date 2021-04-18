import { LOGINON, LOGINOFF } from "../../actions/auth";

const initStatus = false;

const isLoggedIn = (state = initStatus, actions) => {
  switch (actions.type) {
    case LOGINON: {
      return true;
    }
    case LOGINOFF: {
      return false;
    }
    default: {
      return state;
    }
  }
};

export default isLoggedIn;
