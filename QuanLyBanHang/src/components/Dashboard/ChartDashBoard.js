import React from 'react';
import {
    CChartBar
  } from '@coreui/react-chartjs'
  import {
    CCard,
    CCardBody,
    CCardGroup,
    CCardHeader
  } from '@coreui/react'
  import { DocsLink } from 'src/reusable'

const ChartDashBoard = (props) => {
    const{list}=props;
    const items = list.map(item =>item.price);
    console.log(items);
    const fields = list.map(item =>{
      var d  = new Date(item.createdDate);
      var option = {day:"numeric",month:"2-digit"};
      return  d.toLocaleDateString("ja-JP", option);
    }) 
    console.log("ngày :",fields);
     
  
   
    return (
      
        <CCardBody >
        <CChartBar
            datasets={[
              {
                 label: 'Biểu đồ doanh thu',
                backgroundColor: '#f87979',
                data: items
              }
            ]}
            labels={fields}
            options={{
              tooltips: {
                enabled: true
              }
            }}
          />
           </CCardBody>
           
     
    );
}

export default ChartDashBoard;
