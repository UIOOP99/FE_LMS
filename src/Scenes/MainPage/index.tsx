import React from "react";
import ExamCard from "./components/ExamCard";

const index = () => {
  return (
  <div>
    <p>this is a main page</p>

    <ExamCard ExamName="طراحی نرم‌افزار شی‌گرا" ExamDate = "۱۳۹۹/۸/۷" ExamTime ="۱۳:۳۰" ExamStatus="هنوز برگزار نشده‌است"/>
    

  </div>
  
  );
};

export default index;
