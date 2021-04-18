import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserInfoAction } from "../redux/actions/user";
import Index from "./home/index";
import TaskCreate from "./home/taskCreate/index";
import Topbar from "../components/topbar";
import SideBar from "../components/sidebar";
import authService from "../service/auth";

const Home = () => {
  const [currentView, setCurrentView] = useState("index");
  const [accountPopUpOpen, setAccountPopUpOpen] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const userInfo = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("HomePage: ", isLoggedIn, " userInfo", userInfo);
    dispatch(getUserInfoAction());
    if (!isLoggedIn) history.push("/auth");
  }, [isLoggedIn, history, dispatch]);

  const content = () => {
    switch (currentView) {
      case "index":
      default:
        return <Index />;
      case "taskCreate":
        return <TaskCreate />;
    }
  };

  const switchPage = (pageName) => {
    setCurrentView(pageName);
  };

  const openAccountPopUp = (event) => {
    setAccountPopUpOpen(event.currentTarget);
  };

  const closeAccountPopUp = () => {
    setAccountPopUpOpen(null);
  };

  const logOut = () => {
    authService.logout();
    history.push("/auth");
  };

  return (
    <div className="h-screen flex flex-1 flex-col rounded-none  ">
      <Topbar
        onPressMenu={() => setDrawerOpen(true)}
        username={userInfo.username ? userInfo.username : ""}
        accountPopUpOpen={accountPopUpOpen}
        openAccountPopUp={openAccountPopUp}
        closeAccountPopUp={closeAccountPopUp}
        logOut={logOut}
      />
      <div className=" flex flex-1 pt-20 px-8 pb-5">
        <SideBar
          onCloseMenu={() => setDrawerOpen(false)}
          switchPage={switchPage}
          isMenuOpen={drawerOpen}
        />
        {content()}
      </div>
    </div>
  );
};

export default Home;
