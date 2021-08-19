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
import { header } from "src/components/Customer/data";
import axios from "axios";
function TotalCustomerByYear() {
  const headers = header;
  const [year, setYear] = useState();
  const [listYear, setListYear] = useState([]);
  const [totalByYear, setTotalByYear] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [pageNo, setPageno] = useState(1);
  const getListYear = async () => {
    const API_listYear =
      "http://localhost:8080/customers/getYearCreateCustomer";
    axios
      .get(API_listYear, { headers })
      .then((response) => {
        setListYear(response.data);
        //       console.log("list Year: ", listYear);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDataByYear = async () => {
    var API_Statistics = `http://localhost:8080/customers/count?year=${year}`;
    // console.log("API: ", API_Statistics);
    axios.get(API_Statistics, { headers }).then((response) => {
      setTotalByYear(response.data);
      setPageno(0);
      console.log("response:  " + response.data);
    });
  };
  const getDataTable = async () => {
    if (pageNo === 1) {
      setDataTable(totalByYear.slice(0, 6));
      console.log("data page1:   ", dataTable);
    } else {
      setDataTable(totalByYear.slice(6, 12));
      console.log("data page2:   ", dataTable);
    }
  };
  function handleChangeYear() {
    let y = document.getElementById("year");
    setYear(y.value);
    getDataByYear();
  }
  useEffect(() => {
    getDataByYear();
  }, [year]);

  useEffect(() => {
    getDataTable();
  }, [pageNo]);

  useEffect(() => {
    getListYear();
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div>
      <CRow>
        <CCard className="col-lg-9">
          <CCardHeader className="text-center font-weight-bold">
            Lượng lượng Khách hàng mới theo tháng
          </CCardHeader>
          <CFormGroup></CFormGroup>
          <select
            id="year"
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
                <option
                  value={item}
                  key={item}
                  //  defaultValue={{ value: "", label: "Tìm kiếm Giới tính" }}
                >
                  {item}
                </option>
              );
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

        <CCard className="col-lg-3">
          <table
            className="table table-striped text-center"
            style={{ lineHeight: "1.2" }}
          >
            <thead style={{ border: "none !important" }}>
              <tr className="row">
                <th className="col-4">Tháng</th>
                <th className="col-8">Số lượng</th>
              </tr>
            </thead>
            <tbody style={{ border: "none !important" }}>
              {totalByYear.map((item, index) => {
                return (
                  <tr className="row">
                    <td className="col-4"> {index + 1}</td>
                    <td className="col-8">{item}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {/* <CPagination
            align="center"
            addListClass="some-class"
            activePage={pageNo}
            pages={2}
            onActivePageChange={setPageno}
          /> */}
        </CCard>
      </CRow>
    </div>
  );
}

export default TotalCustomerByYear;
