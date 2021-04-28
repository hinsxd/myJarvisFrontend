import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useSelector, useDispatch } from "react-redux";
import { registerUserAction, showAuthErrorBox } from "../../redux/actions/auth";
import { useTranslation } from "react-i18next"

const EMAIL_REGEXP = new RegExp("^\\w+@([a-z]+\\.)+[a-z]{2,4}$");

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const authMessageBox = useSelector((state) => state.authMessageBox);
  const {t} = useTranslation();
  const renderMessageBar = () => {
    const { type, message } = authMessageBox;
    switch (type) {
      default:
        return null;
      case "success":
        return <Alert severity="success">{t(message)}</Alert>;
      case "error":
        return <Alert severity="error">{t(message)}</Alert>;
    }
  };

  const signup = (e) => {
    e.preventDefault();
    dispatch(registerUserAction(username, email, password));
  };

  const isInputValid =
    username.trim() !== "" &&
    password.trim() !== "" &&
    EMAIL_REGEXP.test(email.trim());

  return (
    <form
      className=" flex flex-1 flex-col mx-4 my-4 "
      onSubmit={signup}
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
          id="email"
          label={t("auth.email")}
          placeholder={t("auth.enterEmail")}
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <br />
        <TextField
          className=" w-11/12"
          required
          id="password"
          label={t("auth.password")}
          placeholder={t("auth.password")}
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
        disabled={!isInputValid}
      >
        {t("auth.signUp")}
      </Button>
    </form>
  );
};

export default Register;
