import React, { Fragment } from "react";
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useTranslation } from "react-i18next";
import moment from "moment";
const Step3 = ({ goToPrevStep, goToNextStep, onChangeTaskDate, taskDate }) => {
  const {t} = useTranslation();
  const checkInputsValid = () => {
    if(taskDate !== null && taskDate > moment()){
      return false;
    }
    return true;
  }
  return (
    <Fragment>
      <div className="mt-5 flex flex-1 flex-col justify-center items-center h-60">
        <span className=" text-3xl ">{t("taskCreate.taskDateQuestion")}</span>
        <br />
        <br />
        <KeyboardDateTimePicker
          id="taskDate"
          className="w-2/3"
          value={taskDate}
          placeholder= {t("taskCreate.taskDateEnter")}
          onChange={(date) => onChangeTaskDate(date)}
          minDate={new Date()}
          format=" hh:mm DD/MM/yyyy"
          disablePast
          error={false}
          helperText={null}
        />
      </div>
      <br />
      <br />
      <div className=" mx-6 flex flex-1 flex-row  justify-between">
        <Button
          variant="contained"
          color="secondary"
          className=" w-32 h-16"
          onClick={() => goToPrevStep()}
          startIcon={<ArrowBackIcon />}
        >
          {t("common.prevStep")}
        </Button>
        <Button
          variant="contained"
          color="primary"
          className=" w-32 h-16"
          onClick={() => goToNextStep()}
          endIcon={<ArrowForwardIcon />}
          disabled={checkInputsValid()}
        >
          {t("common.nextStep")}
        </Button>
      </div>
    </Fragment>
  );
};

export default Step3;
