import React, { useState } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import {
  convertFromTimeToCron,
  convertFromTimeAndWeekToCron,
  convertDateToStr,
} from "../../../utils/dateUtil";
import taskService from "../../../service/task";
import StepConnector from "@material-ui/core/StepConnector";
import Check from "@material-ui/icons/Check";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Start from "./start";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Finish from "./finish";
import Error from "./error";
import {useTranslation} from "react-i18next"
import {getCurrentLang} from "../../../utils/langUtil"
import "moment/locale/zh-hk";
const TaskCreate = () => {
  const QontoConnector = withStyles({
    alternativeLabel: {
      top: 10,
      left: "calc(-50% + 16px)",
      right: "calc(50% + 16px)",
    },
    active: {
      "& $line": {
        borderColor: "#784af4",
      },
    },
    completed: {
      "& $line": {
        borderColor: "#784af4",
      },
    },
    line: {
      borderColor: "#eaeaf0",
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

  const QontoStepIcon = (props) => {
    const { active, completed } = props;
    return (
      <div
        className={`h-10 flex items-center pb-4 justify-center top-20 ${
          active ? " text-purple-500" : "text-gray-300"
        }`}
      >
        {completed ? (
          <Check className="text-purple-500" />
        ) : (
          <div
            className={`w-4 h-4  rounded-full  ${
              active ? " bg-purple-500" : "bg-gray-300"
            }`}
          />
        )}
      </div>
    );
  };
  const steps = [
    "start",
    "taskNameEnter",
    "taskDetailEnter",
    "taskDateEnter",
    "taskFreqEnter",
    "reminderDateEnter",
    "finish"
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [taskName, setTaskName] = useState("");
  const [taskDetail, setTaskDetail] = useState("");
  const [taskDate, setTaskDate] = useState(moment());
  const [taskOption, setOption] = useState("day");
  const [oneOffexecutionTime, setOneOffExecutionDate] = useState(moment());
  const [dailyExecutionTime, setDailyExecutionTime] = useState(moment());
  const [isFinished, setIsFinished] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const {t} = useTranslation();
  const weekOptions = [
    {
      label: "mon",
      value: "mon",
      checked: true,
    },
    {
      label: "tue",
      value: "tue",
      checked: true,
    },
    {
      label: "wed",
      value: "wed",
      checked: true,
    },
    {
      label: "thu",
      value: "thu",
      checked: true,
    },
    {
      label: "fri",
      value: "fri",
      checked: true,
    },
    {
      label: "sat",
      value: "sat",
      checked: true,
    },
    {
      label: "sun",
      value: "sun",
      checked: true,
    },
  ];
  const [weeks, setWeeks] = useState(weekOptions);

  const goToNextStep = (e) => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const goToPrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onChangeTaskName = (name) => {
    setTaskName(name);
  };

  const onChangeTaskDetail = (detail) => {
    setTaskDetail(detail);
  };

  const onChangeTaskDate = (date) => {
    setTaskDate(date);
  };

  const onChangeTaskOption = (option) => {
    setOption(option);
  };

  const onChangeOneOffExecutionTime = (date) => {
    setOneOffExecutionDate(date);
  };

  const onChangeDailyExecutionTime = (time) => {
    setDailyExecutionTime(time);
  };
  const submitNewTask = async (e) => {
    e.preventDefault();
    let dailyExecutionTimeStr = null;
    let oneOffExecutionTimeStr = null;
    const taskDateStr = convertDateToStr(taskDate);
    switch (taskOption) {
      case "week":
        const weekWithChecked = weeks.filter(({ checked }) => checked === true);
        dailyExecutionTimeStr = convertFromTimeAndWeekToCron(
          dailyExecutionTime,
          weekWithChecked
        );
        break;
      case "once":
        oneOffExecutionTimeStr = convertDateToStr(oneOffexecutionTime);
        break;
      case "day":
      default:
        dailyExecutionTimeStr = convertFromTimeToCron(dailyExecutionTime);
        break;
    }
 
    try {
      const { data } = await taskService.createTask(
        taskName,
        taskDetail,
        taskDateStr,
        dailyExecutionTimeStr,
        oneOffExecutionTimeStr
      );
      if (data) {
        setIsFinished(true);
      }
    } catch (error) {
      setIsFinished(false);
      if (error.response.data.message) {
        setErrorMsg(error.response.data.message);
      } else {
        setErrorMsg("Failed to connect to server");
      }
    }
    goToNextStep();
  };

 

  const resetStep = () => {
    setActiveStep(1);
    setErrorMsg("");
    if (isFinished) {
      setTaskName("");
      setTaskDetail("");
      setTaskDate(moment());
      setOption("day");
      setWeeks(weekOptions);
      setDailyExecutionTime(moment());
      setOneOffExecutionDate(moment());
      setIsFinished(false);
    }
  };

  const handleWeekChange = (event) => {
    setWeeks((prevWeek) => {
      const newWeekList = prevWeek.map((week) => {
        if (week.value === event.target.value)
          return { ...week, checked: event.target.checked };
        return week;
      });
      return newWeekList;
    });
  };

  const content = () => {
    switch (activeStep) {
      default:
      case 0:
        return <Start goToNextStep={goToNextStep} />;
      case 1:
        return (
          <Step1
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            onChangeTaskName={onChangeTaskName}
            taskName={taskName}
          />
        );
      case 2:
        return (
          <Step2
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            onChangeTaskDetail={onChangeTaskDetail}
            taskDetail={taskDetail}
          />
        );
      case 3:
        return (
          <Step3
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            onChangeTaskDate={onChangeTaskDate}
            taskDate={taskDate}
          />
        );
      case 4:
        return (
          <Step4
            goToNextStep={goToNextStep}
            goToPrevStep={goToPrevStep}
            onChangeTaskOption={onChangeTaskOption}
            taskOption={taskOption}
          />
        );
      case 5:
        return (
          <Step5
            submitNewTask={submitNewTask}
            goToPrevStep={goToPrevStep}
            onChangeTaskOption={onChangeTaskOption}
            taskOption={taskOption}
            weeks={weeks}
            dailyExecutionTime={dailyExecutionTime}
            oneOffExecutionTime={oneOffexecutionTime}
            onChangeDailyExecutionTime={onChangeDailyExecutionTime}
            onChangeOneOffExecutionTime={onChangeOneOffExecutionTime}
            handleWeekChange={handleWeekChange}
          />
        );
      case 6:
        if (isFinished) return <Finish resetStep={resetStep} />;
        return <Error errorMsg={errorMsg} resetStep={resetStep} />;
    }
  };

  const currentLang = getCurrentLang();
  moment.locale(currentLang);
  return (
    <div className="flex flex-1 flex-col">
      <svg />
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{t("taskCreate."+label)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className="px-32">
        <MuiPickersUtilsProvider
          libInstance={moment}
          utils={MomentUtils}
          locale={currentLang}
        >
          {content()}
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default TaskCreate;
