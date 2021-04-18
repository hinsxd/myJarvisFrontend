import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../style/output.css";
import { ButtonGroup, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import Register from "./auth/register";
import Login from "./auth/login";
import { useTranslation } from "react-i18next";
import { getCurrentLang } from "../utils/langUtil";
import { useDispatch } from "react-redux";
import { clearAuthBox } from "../redux/actions/auth";
//import LogoImg from "../image/logo.jpg"

const Auth = () => {
  const history = useHistory();
  const [page, setPage] = useState("login");
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const currentLang = getCurrentLang();
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Auth Page: ", isLoggedIn);
    if (isLoggedIn) {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  const { t, i18n } = useTranslation();

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      default:
        return <Login />;
    }
  };

  const changeLang = () => {
    if (currentLang === "en") {
      i18n.changeLanguage("zh");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const changeView = (view) => {
    setPage(view);
    dispatch(clearAuthBox());
  };

  return (
    <div className="h-screen flex  flex-col  justify-center items-center ">
      <span className="font-bold text-5xl">My Jarvis</span>
      <br />
      <div className=" h-1/2 w-1/3 mt-5 ">
        <div className="flex flex-1 flex-row justify-end  mx-1 my-2">
          <Button
            color="inherited"
            variant="contained"
            className=" h-14  w-16 "
            onClick={() => {
              changeLang();
            }}
          >
            {currentLang === "en" ? "中" : "ENG"}
          </Button>
        </div>
        <div className="border-black  rounded-md  border-2  ">
          <ButtonGroup
            color="primary"
            variant="contained"
            className="w-full h-20"
          >
            <Button
              className="w-1/2"
              color="primary"
              variant={`${page === "login" ? "contained" : "outlined"}`}
              onClick={() => {
                changeView("login");
              }}
            >
              {t("auth.login")}
            </Button>
            <Button
              className="w-1/2"
              color="primary"
              variant={`${page === "register" ? "contained" : "outlined"}`}
              onClick={() => {
                changeView("register");
              }}
            >
              {t("auth.register")}
            </Button>
          </ButtonGroup>
          {renderPage()}
        </div>
      </div>
    </div>
  );
};

export default Auth;
