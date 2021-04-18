import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import DoneIcon from "@material-ui/icons/Done";
import { useTranslation } from "react-i18next";
const Finish = ({ resetStep }) => {
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className="  mt-5 flex flex-1  flex-col justify-center items-center  h-60">
        <DoneIcon
          className=" text-green-600 "
          style={{ height: 120, width: 120 }}
        />
        <br />
        <span className=" text-6xl font-bold">{t("common.finished")}</span>
      </div>
      <br />
      <br />
      <div className=" mx-6 flex flex-1 flex-row justify-end">
        <Button
          variant="contained"
          color="primary"
          className=" w-32 h-16"
          onClick={() => resetStep()}
        >
          {t("common.tryAgain")}
        </Button>
      </div>
    </Fragment>
  );
};

export default Finish;
