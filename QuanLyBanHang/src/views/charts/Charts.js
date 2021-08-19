import React from "react";
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
  CInput,
  CLabel,
} from "@coreui/react";
import { header, dataMonth, dataDay } from "src/components/Customer/data";
import { useState, useEffect } from "react";
import axios from "axios";
const Charts = () => {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [month, setMonth] = useState();
  const [totalByYear, setTotalByYear] = useState([]);
  const [totalByMonth, setTotalByMonth] = useState([]);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
        console.log("list Year: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataByYear = async () => {
    var API_Statistics = `http://localhost:8080/customers/count?year=${year}`;
    console.log("API: ", API_Statistics);
    axios.get(API_Statistics, { headers }).then((response) => {
      setTotalByYear(response.data);
      console.log("response:  " + response.data);
    });
  };
  const getDataByMonth = async () => {
    var API_Statistics = `http://localhost:8080/customers/count2?year=${year}&month=${month}`;
    console.log("API: ", API_Statistics);
    axios.get(API_Statistics, { headers }).then((response) => {
      setTotalByMonth(response.data);
      console.log("response:  " + response.data);
    });
  };
  function handleChangeYear() {
    let y = document.getElementById("year");
    setYear(y.value);
    getDataByYear();
  }
  function handleChangeMonth() {
    let item = document.getElementById("month");
    setMonth(item.value);
  }
  useEffect(() => {
    getListYear();
    getDataByYear();
    getDataByMonth();
  }, [year, month]);
  console.log("list Year Binhf: ", listYear);

  return (
    <CCardGroup columns className="cols-2">
      <CCard>
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

        <CCardBody>
          <CChartBar
            datasets={[
              {
                label: "Lượng Khách Hàng",
                backgroundColor: "#f87979",
                data: totalByYear,
              },
            ]}
            labels="months"
            options={{
              tooltips: {
                enabled: true,
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CCard>
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
      {/*
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
      </CCard> */}
    </CCardGroup>
  );
};

export default Charts;
