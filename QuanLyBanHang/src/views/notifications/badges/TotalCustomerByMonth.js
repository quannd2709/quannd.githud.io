import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CFormGroup,
  CCardHeader,
  CPagination,
  CRow,
} from "@coreui/react";
import { header, dataMonth, dataDay } from "src/components/Customer/data";
import axios from "axios";

function TotalCustomerByMonth() {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [month, setMonth] = useState();
  const [pageNo, setPageno] = useState(1);
  const [dataTable, setDataTable] = useState([]);
  const [totalByMonth, setTotalByMonth] = useState([]);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
        console.log("list Year in 2: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function handleChangeYear() {
    let item = document.getElementById("y");

    setYear(item.value);
    console.log("this year: " + year);
  }
  function handleChangeMonth() {
    let item = document.getElementById("month");

    setMonth(item.value);
    console.log("this month: " + month);
  }
  const getDataTable = async () => {
    console.log("totalMonth", totalByMonth);
    setDataTable(totalByMonth.slice((pageNo - 1) * 12, pageNo * 12));
    console.log("data page1:   ", dataTable);
  };
  const getDataByMonth = async () => {
    // if (year !== (null | undefined) && month !== (null | undefined))

    // console.log("API: ", API_Statistics);
    if (year !== (undefined | null) && month !== (undefined | null)) {
      var API_Statistics = `http://localhost:8080/customers/count2?month=${month}&year=${year}`;
      axios.get(API_Statistics, { headers }).then((response) => {
        setTotalByMonth(response.data);
        console.log("response:  " + response.data);
      });
    }
  };

  useEffect(() => {
    getListYear();
    // return () => {
    //   cleanup
    // }
  }, []);
  useEffect(() => {
    getDataTable();
  }, [pageNo]);

  useEffect(() => {
    //    getListYear();
    getDataByMonth();
  }, [year, month]);

  console.log("list Year Binhf: ", listYear);
  return (
    <div>
      <CRow>
        <CCard className="col-9">
          <CCardHeader className="text-center font-weight-bold">
            Thống kê lượng Khách hàng theo ngày
          </CCardHeader>
          <CRow>
            <div className="col-5 offset-1">
              <select
                id="y"
                className="form-control"
                placeholder="Chọn năm"
                aria-label="Default select example"
                onChange={handleChangeYear}
              >
                <option selected disabled>
                  Select year
                </option>
                {listYear.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-5">
              <select
                id="month"
                className="form-control"
                placeholder="Chọn tháng"
                aria-label="Default select example"
                onChange={handleChangeMonth}
              >
                <option selected disabled>
                  Select month
                </option>
                {dataMonth.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </CRow>
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
        <CCard className="col-3" style={{}}>
          <table
            className="table table-striped text-center"
            style={{ lineHeight: "1.2" }}
          >
            <thead style={{ border: "none !important" }}>
              <tr>
                <th>Ngày</th>
                <th>Số lượng </th>
              </tr>
            </thead>
            <tbody style={{ border: "none !important" }}>
              {dataTable.map((item, index) => {
                return (
                  <tr key={index}>
                    <td> {12 * (pageNo - 1) + (index + 1)}</td>
                    <td>{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={pageNo}
            pages={3}
            onActivePageChange={setPageno}
          />
        </CCard>
      </CRow>
    </div>
  );
}

export default TotalCustomerByMonth;
