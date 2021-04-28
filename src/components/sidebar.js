import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {useTranslation} from "react-i18next"
const SideMenu = ({ onCloseMenu, isMenuOpen, switchPage }) => {
  const {t} = useTranslation();

  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={onCloseMenu}>
      <div onKeyDown={onCloseMenu} className="w-56">
        <ListItem button onClick={() => switchPage("home")} className="mt-2">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary={t("menu.home")} />
        </ListItem>
        <ListItem
          button
          onClick={() => switchPage("taskCreate")}
          className="mt-2"
        >
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText primary={t("menu.taskCreate")} />
        </ListItem>
      </div>
    </Drawer>
  );
};

export default SideMenu;
