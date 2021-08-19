import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { dataGender, dataAge } from "./data";
import { CCol, CRow, CFormGroup, CInput, CButton } from "@coreui/react";
function NavBar({ setGender, setAge, setSearch, setPage }) {
  const handleChange = (e) => {
    if (e.key === "Enter") {
      setPage(1);
      setSearch(e.target.value);
    }
  };

  return (
    <>
      <CRow>
        <CCol xs="5" className="px-0" sm="5">
          <CFormGroup>
            <CInput
              style={{ border: "none", borderRadius: "3px 0 0 3px" }}
              className="mr-sm-6"
              placeholder="Tìm kiếm theo Tên, Email, Số ĐT của khách hàng..."
              size="md"
              onKeyPress={handleChange}
            />
          </CFormGroup>
        </CCol>
        <CCol
          xs="1"
          sm="1"
          style={{
            padding: 0,
            margin: 0,
          }}
        >
          {/* <CButton
            style={{
              margin: 0,
              border: "none",
              backgroundColor: "white",
              borderRadius: "0 3px 3px 0",
            }}
            onClick={() => {
              setPage(1);
              setSearch(document.getElementsByTagName("input")[0].value);
            }}
          >
            <i
              class="fas fa-search"
              style={{ color: "#0089ff", fontSize: "19px" }}
            ></i>
          </CButton> */}
        </CCol>
        <CCol xs="3" sm="2">
          <Select
            name="gender"
            options={dataGender}
            placeholder="Chọn Giới tính"
            defaultValue={{ value: "", label: "Tìm kiếm Giới tính" }}
            onChange={(e) => {
              setPage(1);
              setGender(e.value);
            }}
          />
        </CCol>
        <CCol xs="3" sm="2">
          <Select
            name="gender"
            options={dataAge}
            placeholder="Chọn độ tuổi"
            defaultValue={{ value: "", label: "Tìm kiếm Độ tuổi" }}
            onChange={(e) => {
              setPage(1);
              setAge(e.value);
            }}
          />
        </CCol>
        <CCol xs="3" sm="2">
          <Link to="customer/new" className="text-decoration-none">
            <CButton block style={{ backgroundColor: "#0089ff" }}>
              Thêm mới
            </CButton>
          </Link>
        </CCol>
      </CRow>
    </>
  );
}

export default NavBar;
