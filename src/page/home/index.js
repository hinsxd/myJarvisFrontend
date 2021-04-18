import React from "react";
import { useTranslation } from "react-i18next"
const Index = () => {
  const {t} = useTranslation();
  return (
    <div className=" flex flex-1  flex-col items-center justify-center">
      <span className=" text-6xl font-bold">{t("home.title",{name:"My Jarvis"})}</span>
      <br />
      <span className=" text-4xl">{t("home.subtitle")}</span>
      <br />
      <span className=" text-lg">By Peter Cheng</span>
    </div>
  );
};
export default Index;
