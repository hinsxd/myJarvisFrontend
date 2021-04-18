import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import {useTranslation} from "react-i18next"
import Button from '@material-ui/core/Button';
import {getCurrentLang} from "../utils/langUtil"
const Topbar = ({
  username,
  onPressMenu,
  accountPopUpOpen,
  openAccountPopUp,
  closeAccountPopUp,
  logOut,
}) => {
  const {t, i18n} = useTranslation();
  const currentLang = getCurrentLang();
  return (
    <AppBar className=" h-10">
      <Toolbar className=" h-10 flex flex-row items-center justify-between  bg-gray-900">
        <IconButton
          edge="start"
          color="inherit"
          onClick={onPressMenu}
          style={{ outline: "none" }}
        >
          <MenuIcon />
        </IconButton>

        <span style={{ fontSize: 20, fontWeight: "bold" }}>My Jarvis</span>

        <div className=" flex flex-row items-center">
          <Typography variant="h6" noWrap>
            {username}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            style={{ outline: "none" }}
            onClick={openAccountPopUp}
          >
            <AccountCircle className=" ml-2" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={accountPopUpOpen}
            keepMounted
            open={Boolean(accountPopUpOpen)}
            onClose={closeAccountPopUp}
            className=" my-10"
          >
            <MenuItem onClick={logOut}>
              <ListItemIcon>
                <MeetingRoomIcon />
              </ListItemIcon>
              <span className="font-bold">{t("auth.logout")}</span>
            </MenuItem>
            <div className=" flex flex-1 flex-row items-center justify-between">
              <Button onClick={()=>i18n.changeLanguage("zh")}>
                  <span className={`text-lg ${currentLang==="zh"?" font-bold ":""}`}>中</span>
              </Button>
              <span className="text-lg">|</span>
              <Button onClick={()=>i18n.changeLanguage("en")}>
                  <span className={`text-lg ${currentLang!== "zh"?" font-bold ":""}`}>ENG</span>
              </Button>
            </div>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};
export default Topbar;
