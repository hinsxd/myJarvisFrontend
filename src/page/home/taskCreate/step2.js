import React, { Fragment } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useTranslation } from "react-i18next";
const Step2 = ({
  goToPrevStep,
  goToNextStep,
  onChangeTaskDetail,
  taskDetail,
}) => {
  const {t} = useTranslation();

  const checkInputsValid = () => {
    const result = taskDetail.trim();
    if(result !== ""){
      return false;
    }
    return true;
  }
  return (
    <Fragment>
      <div className="mt-5 flex flex-1 flex-col justify-center items-center h-60">
        <span className=" text-3xl ">{t("taskCreate.taskDetailQuestion")}</span>
        <br />
        <br />
        <TextField
          id="taskName"
          className="w-2/3"
          value={taskDetail}
          onChange={(event) => {
            onChangeTaskDetail(event.target.value);
          }}
          label={t("taskCreate.taskDetail")}
          rows={5}
          multiline
          variant="outlined"
          required
        />
      </div>
      <br />
      <br />
      <div className="mx-6 flex flex-1 flex-row  justify-between">
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

export default Step2;
