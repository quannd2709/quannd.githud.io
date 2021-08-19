import React, { useEffect, useState } from "react";
import "./scss/Report.scss";
import SelectedReport from "./SelectedReport";
import "react-day-picker/lib/style.css";
import DatePicker from "react-datepicker";
import ReportTableOfTime from "./reportTable/ReportTableOfTime";
import ReportTableOfOrder from "./reportTable/ReportTableOfOrder";
const Report = () => {
  var labels = ['Doanh thu theo thời gian', 'Doanh thu theo sản phẩm','Doanh thu theo đơn hàng']
  const now = new Date();
  const nows = new Date();
  now.setMonth(now.getMonth()-12+1);
  const [startedTime,setStartedTime] = useState(now);
  const [endedTime, setEndedTime] = useState(nows);
  const [stateOption,setStateOption] = useState(1);
  const [isCheck,setIsCheck] = useState(false);
  function getLabel(isState){
    if(isState===1) return labels[0];
    if(isState===2)return labels[1];
    if(isState===3)return labels[2];
  }

  
  const getStartedDate = (date) => {
    if (date != null) {
      console.log("ngày đầu :", date.toLocaleDateString("ja-JP"));
      setStartedTime(date);
      // setTimeStartSearch(date.toLocaleDateString("ja-JP", option));
    }
  };

  const getEndDate = (date) => {
    if (date != null) {
      setEndedTime(date);
    }
  };
  return (
    <div className="report-wrap">
      <div className="report-option">
        <SelectedReport stateOption = {stateOption} setStateOption = {setStateOption} />
      </div>
      <div className="report-content-wrap">
        <div className="report-content-header">
          <div className="header-label">  
            {getLabel(stateOption)}
          </div>
          <div className="header-input-timer">
            <div className="header-input-timer-1">
                <span>Ngày bắt đầu</span>
              <DatePicker 
              selected = {startedTime}
              onChange={getStartedDate}
              />
            </div>
            <div className="header-input-timer-2">
                <span>Ngày kết thúc</span>
              <DatePicker
                selected = {endedTime}
                onChange={getEndDate}
              />
            </div>
          </div>
        </div>
        <div className="report-content-body">
          <div className="report-content-body-chart"></div>
          <div className="report-content-body-table">
              {stateOption ==1? <ReportTableOfTime startedTime = {startedTime} endedTime = {endedTime} /> :""}
             {stateOption == 3? <ReportTableOfOrder startedTime = {startedTime} endedTime = {endedTime}  />:""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
