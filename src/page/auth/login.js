import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { loginAction } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const authMessageBox = useSelector((state) => state.authMessageBox);

  const renderMessageBar = () => {
    const { type, message } = authMessageBox;
    //console.log("re-render MessageBar");
    switch (type) {
      default:
        return null;
      case "success":
        return <Alert severity="success">{t(message)}</Alert>;
      case "error":
        return <Alert severity="error">{t(message)}</Alert>;
    }
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(loginAction(username, password));
  };

  const isInputValid = username.trim() !== "" && password.trim() !== "";


  return (
    <form
      className=" flex flex-1 flex-col mx-4 my-4 "
      onSubmit={login}
      noValidate
    >
      <div className="h-40">
        {renderMessageBar()}
        <TextField
          className=" w-11/12"
          required
          id="username"
          label={t("auth.username")}
          placeholder={t("auth.enterUsername")}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <br />
        <TextField
          className=" w-11/12"
          required
          id="password"
          label={t("auth.password")}
          placeholder={t("auth.enterPassword")}
          type="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        disabled={isInputValid}
      >
        {t("auth.login")}
      </Button>
    </form>
  );
};

export default Login;
