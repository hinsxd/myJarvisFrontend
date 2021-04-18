import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import {useTranslation} from "react-i18next"

const Step4 = ({
  goToPrevStep,
  goToNextStep,
  onChangeTaskOption,
  taskOption,
}) => {
  const taskOptions = [
    {
      label: "day",
      value: "day",
    },
    {
      label: "week",
      value: "week",
    },
    {
      label: "once",
      value: "once",
    },
  ];
  const {t} = useTranslation();
  return (
    <Fragment>
      <div className="mt-5 flex flex-1 flex-col justify-center items-center h-60">
        <span className=" text-3xl ">{t("taskCreate.taskOptionQuestion")}</span>
        <br />
        <br />
        <div className="flex flex-row w-2/3">
          <RadioGroup
            aria-label="taskOption"
            name="taskOption"
            className="w-2/3"
            value={taskOption}
            onChange={(event) => {
              onChangeTaskOption(event.target.value);
            }}
          >
            {taskOptions.map(({ value, label }) => {
              return (
                <FormControlLabel
                  value={value}
                  control={<Radio />}
                  label={t("common."+label)}
                  key={value}
                />
              );
            })}
          </RadioGroup>
        </div>
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
        >
          {t("common.nextStep")}
        </Button>
      </div>
    </Fragment>
  );
};

export default Step4;
