import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import axios from "axios";
import FeedBackItem from "./FeedBackItem";
import { CPagination, CRow, CFormGroup } from "@coreui/react";
import DisplayResultPagination from "./../Customer/DisplayResultPagination";
import { dataSlove } from "../Customer/data";
function FeedBackList() {
  const [totalElements, setTotalElements] = useState(0);
  const [feedbacks, setfeedbacks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [slove, setSlove] = useState("");
  const [search, setSearch] = useState({});

  useEffect(() => {
    setfeedbacks([]);
    let URL = "";
    if (slove.length > 0 && search.length > 0) {
      URL = `http://localhost:8080/feedbacks/search?customerName=${search}&slove=${slove}`;
    } else if (slove.length > 0) {
      URL = `http://localhost:8080/feedbacks?slove=${slove}`;
    } else if (search.length > 0) {
      URL = `http://localhost:8080/feedbacks/search?customerName=${search}&pageNo=${
        currentPage - 1
      }&limit=${limit}`;
    } else {
      URL = `http://localhost:8080/feedbacks/page?pageNo=${
        currentPage - 1
      }&limit=${limit}`;
    }
    console.log("this URL: ", URL);

    axios
      .get(URL)
      .then((response) => {
        setfeedbacks(response.data.content);
        setTotalPages(response.data.totalPages);
        setTotalElements(response.data.totalElements);
      })
      .catch((error) => console.log("error" + error));
  }, [currentPage, search, limit, slove]);
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setCurrentPage(1);
      setSearch(e.target.value);
      console.log("Search ", search);
    }
  };
  return (
    <div>
      <div style={{ display: "flex" }} className="row">
        <div className="col-3">
          <h3>Ý kiến Khách hàng</h3>
        </div>{" "}
        {/* Search */}
        <div
          style={{ marginLeft: "20px", marginRight: "10px" }}
          className="col-4"
        >
          <input
            type="text"
            placeholder="Search by name"
            style={{
              height: "34px",
              width: "289px",
              padding: "10px 15px 10px 15px",
              border: "none",
            }}
            onKeyPress={handleChange}
          />
          <button
            onClick={handleChange}
            style={{
              padding: "1px 10px 0px 10px",
              height: "34px",
              border: "none",
              backgroundColor: "white",
            }}
          >
            <i
              class="fas fa-search"
              style={{ color: "green", fontSize: "19px" }}
            ></i>
          </button>
        </div>
        {/*End -  Search */}
        <div className="col-2" style={{ marginRight: "30px" }}>
          <Select
            name="solve"
            options={dataSlove}
            placeholder=""
            defaultValue={{ value: "", label: "Lọc trạng thái" }}
            onChange={(e) => {
              setCurrentPage(1);
              setSlove(e.value);
              console.log("object", slove);
            }}
          />
        </div>
        <div style={{ margin: "0px" }} className="col-2">
          <Link to="/feedback/new">
            <button
              style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
              className="btn btn-success"
            >
              Thêm mới Ý kiến
            </button>
          </Link>
        </div>
      </div>

      <hr />
      <table
        className=" table table-striped table-bordered"
        style={{ backgroundColor: "white" }}
      >
        <thead>
          <tr>
            <th>Stt</th>
            <th>Khách hàng</th>
            <th>Tiêu đề</th>
            <th>Trạng thái</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((item, index) => {
            return (
              <FeedBackItem
                feedback={item}
                key={item.id}
                index={index}
              ></FeedBackItem>
            );
          })}
        </tbody>
      </table>
      <CRow>
        <CFormGroup className="col-2">
          <CPagination
            activePage={currentPage}
            pages={totalPages}
            onActivePageChange={setCurrentPage}
          />
        </CFormGroup>
        <CFormGroup className="col-6 offset-1">
          <DisplayResultPagination
            page={currentPage}
            setPage={setCurrentPage}
            limit={limit}
            setLimit={setLimit}
            totalElements={totalElements}
          ></DisplayResultPagination>
        </CFormGroup>
      </CRow>
      <br></br>
    </div>
  );
}

export default FeedBackList;
