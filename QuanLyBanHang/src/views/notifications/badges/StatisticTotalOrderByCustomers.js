import React, { useState, useEffect } from "react";
import { CChartBar } from "@coreui/react-chartjs";
import DisplayResultPagination from "src/components/Customer/DisplayResultPagination";
import {
  CCard,
  CPagination,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCardHeader,
  CRow,
} from "@coreui/react";
import { header } from "src/components/Customer/data";
import axios from "axios";
function StatisticTotalOrderByCustomers() {
  const headers = header;
  const [pageNo, setPageNo] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [totalRecord, setTotalRecord] = useState();
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(5);
  const getTotalPage = () => {
    const API_getTotalPage = "http://localhost:8080/customers/countAllRecord";
    axios
      .get(API_getTotalPage)
      .then((response) => {
        console.log("response", response.data);
        setTotalRecord(response.data);
        setTotalPage(totalRecord / limit);
      })
      .catch((error) => {
        console.log("error:  " + error);
      });
  };
  const getData = async () => {
    const API = `http://localhost:8080/customers/statistics?pageNo=${
      pageNo - 1
    }&limit=${limit}`;
    axios
      .get(API, { headers })
      .then((response) => {
        setData(response.data);
        console.log("list Data now: ", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getTotalPage();
    // return () => {
    //   cleanup
    // }
  }, []);
  useEffect(() => {
    getData();
    // return () => {
    //   cleanup
    // }
  }, [pageNo, limit]);
  console.log("list Data now: ", data);
  return (
    <div className="row">
      <CCard style={{}} className="col-12">
        <CCardHeader className="font-weight-bolder text-center">
          Thống kê Mua sắm Khách hàng
        </CCardHeader>
        <table
          className=" table table-striped table-bordered "
          style={{ border: "none" }}
        >
          <thead>
            <tr>
              <th>Tên</th>
              <th>Số ĐT</th>
              <th>Email</th>
              <th>Address</th>
              <th>Ngày bắt đầu</th>
              <th>Ngày gần nhất</th>
              <th>Tổng số đơn</th>
              <th>Tổng số tiền</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                  <td>{item[4]}</td>
                  <td>{item[5]}</td>
                  <td>{item[6]}</td>
                  <td>{item[7]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <CRow className="row">
          <CPagination
            className="col-5 mx-0 px-3"
            addListClass="some-class"
            activePage={pageNo}
            pages={2}
            onActivePageChange={setPageNo}
          />
          <div className="col-6 right">
            <DisplayResultPagination
              page={pageNo}
              setPage={setPageNo}
              limit={limit}
              setLimit={setLimit}
              totalElements={totalRecord}
            ></DisplayResultPagination>
          </div>
        </CRow>
      </CCard>
      {/* <CDropdown className="m-1 float-right offset-8">
        <CDropdownToggle color="secondary" size="sm">
          Bản ghi
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem header>Chọn số bản ghi hiển thị</CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 3);
              setLimit(3);
            }}
          >
            5
          </CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 8);
              setLimit(8);
            }}
          >
            8
          </CDropdownItem>
          <CDropdownItem
            onClick={() => {
              setPageNo(1);
              setTotalPage(totalRecord / 10);
              setLimit(10);
            }}
          >
            10
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown> */}
    </div>
  );
}

export default StatisticTotalOrderByCustomers;
