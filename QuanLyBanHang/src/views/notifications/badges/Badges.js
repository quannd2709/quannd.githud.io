import React, { useState, useEffect } from "react";
import {
  CChartBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CFormGroup,
  CCardHeader,
  CDataTable,
  CBadge,
} from "@coreui/react";
import TotalCustomerByYear from "./TotalCustomerByYear";
import TotalCustomerByMonth from "./TotalCustomerByMonth";
import StatisticTotalOrderByCustomers from "./StatisticTotalOrderByCustomers";
function Badges() {
  return (
    <div>
      <TotalCustomerByYear></TotalCustomerByYear>
      <hr />
      <TotalCustomerByMonth></TotalCustomerByMonth>
      <hr />

      <StatisticTotalOrderByCustomers></StatisticTotalOrderByCustomers>
    </div>
  );
}

export default Badges;

{
  /* <CCard>
        <CCardHeader>Simple Table</CCardHeader>
        <CCardBody>
          <CDataTable
            items={totalByYear}
            fields={fields}
            itemsPerPage={5}
            pagination
          />
        </CCardBody>
      </CCard> */
}

{
  /* <CCard>
        <CCardHeader>Chọn Năm</CCardHeader>
        <CFormGroup></CFormGroup>
        <select
          id="year"
          className="form-control"
          placeholder="Chọn năm"
          aria-label="Default select example"
          onChange={handleChangeYear}
        >
          {listYear.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>

        <select
          id="selectm"
          className="form-control"
          placeholder="Chọn tháng"
          aria-label="Default select example"
          onChange={handleChangeMonth}
        >
          {dataMonth.map((item) => {
            return <option value={item}>{item}</option>;
          })}
        </select>
        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: "Lượng Khách Hàng",
                backgroundColor: "#f87979",
                data: totalByMonth,
              },
            ]}
            labels={dataDay}
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>

        <CCard>
          <CCardHeader>Doughnut Chart</CCardHeader>
          <CCardBody>
            <CChartDoughnut
              datasets={[
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10],
                },
              ]}
              labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>

         <CCard>
          <CCardHeader>Line Chart</CCardHeader>
          <CCardBody>
            <CChartLine
              datasets={[
                {
                  label: "Data One",
                  backgroundColor: "rgb(228,102,81,0.9)",
                  data: [30, 39, 10, 50, 30, 70, 35],
                },
                {
                  label: "Data Two",
                  backgroundColor: "rgb(0,216,255,0.9)",
                  data: [39, 80, 40, 35, 40, 20, 45],
                },
              ]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>Pie Chart</CCardHeader>
          <CCardBody>
            <CChartPie
              datasets={[
                {
                  backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
                  data: [40, 20, 80, 10],
                },
              ]}
              labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
              options={{
                tooltips: {
                  enabled: true,
                },
              }}
            />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>Polar Area Chart</CCardHeader>
          <CCardBody>
            <CChartPolarArea
              datasets={[
                {
                  label: "My First dataset",
                  backgroundColor: "rgba(179,181,198,0.2)",
                  pointBackgroundColor: "rgba(179,181,198,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "rgba(179,181,198,1)",
                  pointHoverBorderColor: "rgba(179,181,198,1)",
                  data: [65, 59, 90, 81, 56, 55, 40],
                },
                {
                  label: "My Second dataset",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  pointBackgroundColor: "rgba(255,99,132,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "rgba(255,99,132,1)",
                  pointHoverBorderColor: "rgba(255,99,132,1)",
                  data: [28, 48, 40, 19, 96, 27, 100],
                },
              ]}
              options={{
                aspectRatio: 1.5,
                tooltips: {
                  enabled: true,
                },
              }}
              labels={[
                "Eating",
                "Drinking",
                "Sleeping",
                "Designing",
                "Coding",
                "Cycling",
                "Running",
              ]}
            />
          </CCardBody>
        </CCard>

        <CCard>
          <CCardHeader>Radar Chart</CCardHeader>
          <CCardBody>
            <CChartRadar
              datasets={[
                {
                  label: "2019",
                  backgroundColor: "rgba(179,181,198,0.2)",
                  borderColor: "rgba(179,181,198,1)",
                  pointBackgroundColor: "rgba(179,181,198,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(179,181,198,1)",
                  tooltipLabelColor: "rgba(179,181,198,1)",
                  data: [65, 59, 90, 81, 56, 55, 40],
                },
                {
                  label: "2020",
                  backgroundColor: "rgba(255,99,132,0.2)",
                  borderColor: "rgba(255,99,132,1)",
                  pointBackgroundColor: "rgba(255,99,132,1)",
                  pointBorderColor: "#fff",
                  pointHoverBackgroundColor: "#fff",
                  pointHoverBorderColor: "rgba(255,99,132,1)",
                  tooltipLabelColor: "rgba(255,99,132,1)",
                  data: [28, 48, 40, 19, 96, 27, 100],
                },
              ]}
              options={{
                aspectRatio: 1.5,
                tooltips: {
                  enabled: true,
                },
              }}
              labels={[
                "Eating",
                "Drinking",
                "Sleeping",
                "Designing",
                "Coding",
                "Cycling",
                "Running",
              ]}
            />
          </CCardBody>
        </CCard>
    </CCardGroup>
  );
}
export default CustomerReport;
*/
}
//
// import {
//   CBadge,
//   CButton,
//   CCard,
//   CCardBody,
//   CCardFooter,
//   CCardHeader,
//   CCol,
//   CRow
// } from '@coreui/react'
// import { DocsLink } from 'src/reusable'

// const Badges = () => {
//   return (
//     <CRow>
//       <CCol xs="12" md="6">
//         <CCard>
//           <CCardHeader>
//             Badges
//             <DocsLink name="CBadge"/>
//           </CCardHeader>
//           <CCardBody>
//             <h1>Example heading <CBadge color="secondary">New</CBadge></h1>
//             <h2>Example heading <CBadge color="secondary">New</CBadge></h2>
//             <h3>Example heading <CBadge color="secondary">New</CBadge></h3>
//             <h4>Example heading <CBadge color="secondary">New</CBadge></h4>
//             <h5>Example heading <CBadge color="secondary">New</CBadge></h5>
//             <h6>Example heading <CBadge color="secondary">New</CBadge></h6>
//           </CCardBody>
//           <CCardFooter>
//             <CButton color="secondary">
//               Notifications <CBadge color="primary" shape="pill" style={{ position: 'static' }}>9</CBadge>
//             </CButton>
//           </CCardFooter>
//         </CCard>
//       </CCol>
//       <CCol xs="12" md="6">
//         <CCard>
//           <CCardHeader>
//             Badges
//             <small> contextual variations</small>
//           </CCardHeader>
//           <CCardBody>
//             <CBadge className="mr-1" color="primary">Primary</CBadge>
//             <CBadge className="mr-1" color="secondary">Secondary</CBadge>
//             <CBadge className="mr-1" color="success">Success</CBadge>
//             <CBadge className="mr-1" color="danger">Danger</CBadge>
//             <CBadge className="mr-1" color="warning">Warning</CBadge>
//             <CBadge className="mr-1" color="info">Info</CBadge>
//             <CBadge className="mr-1" color="light">Light</CBadge>
//             <CBadge className="mr-1" color="dark">Dark</CBadge>
//           </CCardBody>
//         </CCard>
//         <CCard>
//           <CCardHeader>
//             Badges
//             <small> pill badges</small>
//           </CCardHeader>
//           <CCardBody>
//             <CBadge className="mr-1" color="primary" shape="pill">Primary</CBadge>
//             <CBadge className="mr-1" color="secondary" shape="pill">Secondary</CBadge>
//             <CBadge className="mr-1" color="success" shape="pill">Success</CBadge>
//             <CBadge className="mr-1" color="danger" shape="pill">Danger</CBadge>
//             <CBadge className="mr-1" color="warning" shape="pill">Warning</CBadge>
//             <CBadge className="mr-1" color="info" shape="pill">Info</CBadge>
//             <CBadge className="mr-1" color="light" shape="pill">Light</CBadge>
//             <CBadge className="mr-1" color="dark" shape="pill">Dark</CBadge>
//           </CCardBody>
//         </CCard>
//         <CCard>
//           <CCardHeader>
//             Badges
//             <small> links</small>
//           </CCardHeader>
//           <CCardBody>
//             <CBadge className="mr-1" href="#" color="primary">Primary</CBadge>
//             <CBadge className="mr-1" href="#" color="secondary">Secondary</CBadge>
//             <CBadge className="mr-1" href="#" color="success">Success</CBadge>
//             <CBadge className="mr-1" href="#" color="danger">Danger</CBadge>
//             <CBadge className="mr-1" href="#" color="warning">Warning</CBadge>
//             <CBadge className="mr-1" href="#" color="info">Info</CBadge>
//             <CBadge className="mr-1" href="#" color="light">Light</CBadge>
//             <CBadge className="mr-1" href="#" color="dark" shape="pill">Dark</CBadge>
//           </CCardBody>
//         </CCard>
//       </CCol>
//     </CRow>
//   )
// }

// export default Badges

// {/* <CCol xs="12" lg="6">
//   <CCard>
//     <CCardHeader>
//       Striped Table
//     </CCardHeader>
//     <CCardBody>
//     <CDataTable
//       items={usersData}
//       fields={fields}
//       striped
//       itemsPerPage={5}
//       pagination
//       scopedSlots = {{
//         'status':
//           (item)=>(
//             <td>
//               <CBadge color={getBadge(item.status)}>
//                 {item.status}
//               </CBadge>
//             </td>
//           )

//       }}
//     />
//     </CCardBody>
//   </CCard>
// </CCol> */}
