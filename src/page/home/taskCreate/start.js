import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {useTranslation} from "react-i18next"
const Start = ({ goToNextStep }) => {
  const {t} = useTranslation();
  return (
    <Fragment>
      <div className="  mt-5 flex flex-1 justify-center items-center  h-60">
        <span className=" text-6xl font-bold">{t("taskCreate.createNewTask")}</span>
      </div>
      <br />
      <br />
      <div className=" mx-6 flex flex-1 flex-row justify-end">
        <Button
          variant="contained"
          color="primary"
          className=" w-32 h-16"
          onClick={() => goToNextStep()}
          endIcon={<ArrowForwardIcon />}
        >
          {t("common.start")}
        </Button>
      </div>
    </Fragment>
  );
};

export default Start;
