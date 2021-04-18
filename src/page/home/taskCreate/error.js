import React, { Fragment } from "react";
import { Button } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
const Error = ({ errorMsg, resetStep }) => {
  return (
    <Fragment>
      <div className="  mt-5 flex flex-1  flex-col justify-center items-center  h-60">
        <ErrorIcon
          className=" text-red-600"
          style={{ height: 120, width: 120 }}
        />
        <br />
        <span className=" text-4xl">{errorMsg}</span>
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
          Try Again
        </Button>
      </div>
    </Fragment>
  );
};

export default Error;
