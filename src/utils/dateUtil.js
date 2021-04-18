export const convertFromDateTimeToCron = (datetime) => {
  return (
    datetime.second().toString() +
    " " +
    datetime.minute().toString() +
    " " +
    datetime.hour().toString() +
    " " +
    datetime.date().toString() +
    " " +
    (datetime.month() + 1).toString() +
    " ? " +
    datetime.year().toString()
  );
};

export const convertFromTimeToCron = (time) => {
  return (
    time.second().toString() +
    " " +
    time.minute().toString() +
    " " +
    time.hour().toString() +
    " ? * * *"
  );
};

export const convertFromTimeAndWeekToCron = (time, weeks) => {
  let cronExp =
    time.second().toString() +
    " " +
    time.minute().toString() +
    " " +
    time.hour().toString() +
    " ? * ";
  weeks.forEach(({ value }, index) => {
    cronExp += value;
    if (index !== weeks.length - 1) cronExp += ",";
  });
  cronExp += " *";
  return cronExp;
};

export const convertDateToStr = (datetime) => {
  return (
    datetime.year().toString() +
    "/" +
    (datetime.month() + 1).toString() +
    "/" +
    datetime.date().toString() +
    " " +
    datetime.hour().toString() +
    ":" +
    datetime.minute().toString()
  );
};
