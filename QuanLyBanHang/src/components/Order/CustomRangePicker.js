import React from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/src/stylesheets/datepicker.scss";
import "./scss/CustomRangePicker.scss"
const CustomRangePicker = () => {
    const selectionRange = {
        key: 'selection',
      }
     const  handleSelect= (ranges)=>{
        console.log(ranges);
      
      }
    return (
        
       <div className = "customer-date-picker">
           <div className = "date-picker-2">   
           <DatePicker
            placeholderText = "Ngày bắt đầu"
            />
               </div>
               <div className = "date-picker-2">   
           <DatePicker 
            placeholderText = "Ngày kết thúc"
           />
               </div>
       </div>

    );
}

export default CustomRangePicker;
