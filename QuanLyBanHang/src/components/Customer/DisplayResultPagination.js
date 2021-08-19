import React, { useEffect } from "react";
import Select from "react-select";
import { dataRecord } from "./data";
import "./st.css";
function DisplayResultPagination({
  page,
  setPage,
  limit,
  setLimit,
  totalElements,
}) {
  console.log("heheh", totalElements);
  useEffect(() => {
    setPage(page < 0 ? 1 : page);
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <div className="row  font-italic ">
      <span style={{ paddingTop: "10px" }}>Hiển thị &nbsp;</span>
      <div style={{ maxHeight: "34px", minWidth: "80px" }}>
        <Select
          options={dataRecord}
          placeholder="Chọn số bản ghi hiển thị"
          defaultValue={{ value: 5, label: "5" }}
          onChange={(e) => {
            setPage(1);
            setLimit(e.value);
          }}
        />
      </div>

      <div style={{ paddingTop: "10px" }}>
        <span>&nbsp; kết quả : Từ &nbsp;</span>&nbsp;
        {(page - 1) * limit + 1} &nbsp;<span>đến </span>&nbsp; {page * limit}
        &nbsp;
        <span>&nbsp; trên tổng </span> {totalElements}{" "}
      </div>
    </div>
  );
}

export default DisplayResultPagination;
