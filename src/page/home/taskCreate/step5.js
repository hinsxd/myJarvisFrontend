import React from "react";
import {
  KeyboardDateTimePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers";
import { Button } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DoneIcon from "@material-ui/icons/Done";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {useTranslation} from "react-i18next"
import moment from "moment";

const Step5 = ({
  goToPrevStep,
  submitNewTask,
  weeks,
  taskOption,
  dailyExecutionTime,
  oneOffExecutionTime,
  onChangeDailyExecutionTime,
  onChangeOneOffExecutionTime,
  handleWeekChange,
}) => {
  const {t} = useTranslation();
  const checkInputsValid = () => {
    if(taskOption === "day"){
      if(dailyExecutionTime !== null ){
        return false;
      }
    }
    if(taskOption === "week"){
      const weeksWithChecked = weeks.filter(({checked}) => checked === true);
      if(dailyExecutionTime !== null  && weeksWithChecked.length > 0){
        return false;
      }
    }
    if(taskOption === "once"){
      if(oneOffExecutionTime !== null && oneOffExecutionTime > moment()){
        return false;
      }
    }
    return true;
  }
  return (
    <form onSubmit={submitNewTask}>
      {taskOption === "once" ? (
        <div className="mt-5 flex flex-1 flex-col justify-center items-center h-60">
          <span className=" text-3xl ">
            {t("taskCreate.taskOneOffReminderDateQuestion")}
          </span>
          <br />
          <br />
          <KeyboardDateTimePicker
            id="oneOffExecutionTime"
            className="w-2/3"
            value={oneOffExecutionTime}
            placeholder={t("taskCreate.reminderDateEnter")}
            onChange={(date) => onChangeOneOffExecutionTime(date)}
            minDate={new Date()}
            format=" hh:mm DD/MM/yyyy"
            error={false}
            helperText={null}
          />
        </div>
      ) : (
        <div className="mt-5 flex flex-1 flex-col justify-center items-center h-60">
          <span className="text-3xl">
            {t("taskCreate.taskDailyReminderDateQuestion")}
          </span>
          <br />
          {taskOption === "week" ? (
            <FormGroup
              aria-label="taskWeeks"
              name="taskWeeks"
              className=" h-40 w-2/3"
            >
              {weeks.map(({ value, label, checked }) => {
                return (
                  <FormControlLabel
                    value={value}
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={(event) => {
                          handleWeekChange(event);
                        }}
                        name={label}
                      />
                    }
                    label={t("common."+label)}
                    key={value}
                  />
                );
              })}
            </FormGroup>
          ) : (
            <div />
          )}
          <br />
          <KeyboardTimePicker
            id="dailyExecutionTime"
            className="w-2/3"
            value={dailyExecutionTime}
            placeholder={t("taskCreate.reminderDateEnter")}
            onChange={(date) => onChangeDailyExecutionTime(date)}
            mask="__:__ _M"
            error={false}
            helperText={null}
          />
        </div>
      )}
      <br />
      <br />
      <div className=" mx-6 flex flex-1 flex-row  justify-between">
        <Button
          variant="contained"
          color="secondary"
          className="w-32 h-16"
          onClick={() => goToPrevStep()}
          startIcon={<ArrowBackIcon />}
        >
          {t("common.prevStep")}
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="w-32 h-16"
          type="submit"
          endIcon={<DoneIcon />}
          disabled={checkInputsValid()}
        >
          {t("common.finish")}
        </Button>
      </div>
    </form>
  );
};

export default Step5;
