import React, { useState, useRef } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { reactLocalStorage } from "reactjs-localstorage";
import { dataGender } from "./data";
 import "./st.css";
//import DateTimePicker from 'react-datetime-picker';
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CRow,
} from "@coreui/react";
import { useHistory } from "react-router-dom";
function CustomerNew() {
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const history = useHistory();
  const APIPost = "http://localhost:8080/customers";

  const [customer, setCustomer] = useState({
    createdDate: new Date(),
    modifiedDate: new Date(),
    createBy: reactLocalStorage.get("name"),
    modifiedBy: "",
    status: "on",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCustomer({ ...customer, [name]: value });
    console.log(customer);
  };
  function getGender(e) {
    const value = e.value;
    setCustomer({ ...customer, gender: value });
  }
  function ResetForm() {
    const inputs = document.getElementsByTagName("input");
    console.log("input", inputs);
    for (const input of inputs) {
      input.value = "";
    }
    document.getElementsByTagName("textarea")[0].value = "";
  }
  const createCustomer = () => {
    console.log("this is cate", customer);

    axios
      .post(APIPost, customer, { headers })
      .then((response) => {
        ResetForm();
        Swal.fire("Good job!", "Thêm mới thành công", "success");
        setCustomer({
          createdDate: new Date(),
          modifiedDate: new Date(),
          createBy: reactLocalStorage.get("name"),
          modifiedBy: "",
          status: "on",
        });
        history.push({
          pathname: "/customer/detail",
          state: { customer}
      });
      })
      .catch(function (error) {
        if (error.response) {
          Swal.fire({
            icon: "error",
            title: "Warning" + error.response.status,
            text: "Error: " + error.response.data,
            // footer: '<a href="">Why do I have this issue?</a>',
          });
          console.log("data", error.response.data);
          console.log("status", error.response.status);
          console.log("header", error.response.headers);
        }
      });
  };

  const { register, handleSubmit, formState: { errors } } = useForm();

  return (
    <div>
      <div className="row">
        <div className=" card col-lg-8 offset-2 align-center">
          <CCard style={{ border: "none" }}>
            <CCardHeader style={{ fontWeight: "bold" }}>
              Thêm mới Khách hàng
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="name">Tên</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <CInput
                    {...register("name", {
                      required: true,
                      maxLength: 20,
                      minLength: 3,
                    })}
                    name="name"
                    placeholder="Tên khách hàng"
                    onChange={handleChange}
                  />
                  {errors.name?.type === "required" && (
                  <p>Không được để trống</p>
                )}
                  {errors.name?.type === "maxLength" && (
                    <p>Độ dài không được vượt quá 20 kí tự</p>
                  )}
                  {errors.name?.type === "minLength" && (
                    <p>Độ dài không được ít hơn 3 kí tự</p>
                  )}
      
                </CFormGroup>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="gender">Giới tính</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <Select
                    name="gender"
                    options={dataGender}
                    placeholder="Chọn Giới tính"
                    defaultValue={{ value: "Nam", label: "Nam" }}
                    onChange={getGender}
                  />
                </CFormGroup>
              </CRow>
              <CRow>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="phone">Số điện thoại</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <CInput
                    {...register("phone", {
                      required: true,
                      maxLength: 11,
                      minLength: 10,
                      // valueAsNumber: true,
                    })}
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    pattern="0[0-9]{9}"
                    onChange={handleChange}
                  />
                  {errors.phone?.type === "maxLength" && (
                    <p>Độ dài không được vượt quá 11 kí tự</p>
                  )}
                  {errors.phone?.type === "minLength" && (
                    <p>Độ dài không được ít hơn 10 kí tự</p>
                  )}
                  {/* {errors.phone?.type === "valueAsNumber" && (
                    <p>Yêu cầu phải nhập vào là số</p>
                  )} */}
                </CFormGroup>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="email">Email</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <CInput
                    {...register("email", {
                      required: true,
                      maxLength: 50,
                      minLength: 5,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    })}
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  {errors.email?.type === "required" && (
                    <p>Không được để trống</p>
                  )}
                  {errors.email?.type === "maxLength" && (
                    <p>Độ dài không được vượt quá 50 kí tự</p>
                  )}
                  {errors.email?.type === "minLength" && (
                    <p>Độ dài không được ít hơn 5 kí tự</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p>Email Không đúng định dạng</p>
                  )}
                </CFormGroup>
              </CRow>
              <CRow>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="address">Địa chỉ</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <CInput
                    {...register("address", {
                      required: true,
                      maxLength: 50,
                      minLength: 5,
                    })}
                    name="address"
                    placeholder="Địa chỉ"
                    onChange={handleChange}
                  />
                  {errors.address?.type === "required" && (
                    <p>Không được để trống</p>
                  )}
                  {errors.address?.type === "maxLength" && (
                    <p>Độ dài không được vượt quá 50 kí tự</p>
                  )}
                  {errors.address?.type === "minLength" && (
                    <p>Độ dài không được ít hơn 5 kí tự</p>
                  )}
                </CFormGroup>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="birthday">Ngày sinh</CLabel>   <span style={{ color: "red", fontWeight: "bolder" }}>*</span>
                  <CInput
                    {...register("dateOfBirth", {
                      required: true,
                    })}
                    name="dateOfBirth"
                    type="date"
                    max={new Date().toISOString().slice(0, 10)}
                    placeholder="Ngày sinh"
                    onChange={handleChange}
                  />
                  {errors.dateOfBirth?.type === "required" && (
                    <p>Không được để trống</p>
                  )}
                </CFormGroup>
              </CRow>
              <CRow>
                <CFormGroup className="col-12">
                  <CLabel htmlFor="note">
                    Thông tin bổ sung về khách hàng
                  </CLabel>
                  <CTextarea
                    // {...register("note", {
                    //   required: true,
                    //   maxLength: 250,
                    // })}
                    style={{ height: "100px" }}
                    name="note"
                    placeholder="Ghi chú thông tin Khách hàng"
                    onChange={handleChange}
                  />
                  {/* {errors.note?.type === "required" && (
                    <p>Không được để trống</p>
                  )}
                  {errors.note?.type === "maxLength" && (
                    <p>Độ dài không được vượt quá 250 kí tự</p>
                  )} */}
                </CFormGroup>
              </CRow>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={ResetForm}
            style={{
              marginLeft: "10px",
              float: "right",
              backgroundColor: "#0089ff",
            }}
          >
            Hủy bỏ
          </button>
        </div>
        <div className="col-6">
          <button
           
            className="btn btn-success"
            onClick={handleSubmit(createCustomer)}
            style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
          >
            Thêm mới
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomerNew;
