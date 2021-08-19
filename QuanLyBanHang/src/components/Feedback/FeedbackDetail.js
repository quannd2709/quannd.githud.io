import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CRow,
  CSwitch,
} from "@coreui/react";
function FeedbackDetail(props) {
  const fb = props.location.state.feedback;
  const [feedback, setFeedback] = useState(fb);
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const [sw, setSw] = useState(false);
  const handleChangeSlove = () => {
    setSw(!sw);
    const s = sw ? "ok" : "pendding";
    setFeedback({ ...feedback, slove: s });
    console.log(feedback);
  };
  function updatefeedback() {
    setFeedback({
      ...feedback,
      modifiedDate: new Date().toISOString(),
      modifiedBy: reactLocalStorage.get("name"),
    });
    const API = `http://localhost:8080/feedback/${feedback.id}`;
    console.log("Object Update:   ", feedback);
    console.log("Url_ApI: ", API);
    axios
      .put(API, feedback, { headers })
      .then((resp) => {
        if (resp.status === 200) {
          Swal.fire("Good job!", "Cập nhập thông tin thành công!", "success");
        } else {
          console.log("Status not 200", resp);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Warning",
          text: "Error:" + error,
        });
      });
  }
  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
  }, [sw]);
  return (
    <div>
      <div className="row">
        <CCardHeader style={{ fontWeight: "bolder" }}>
          Thông tin Khách hàng
        </CCardHeader>
      </div>
      <div className="row">
        <div className=" card col-lg-6">
          <CCard style={{ border: "none" }}>
            <CCardHeader>Thông tin Khách hàng</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="name">Tên</CLabel>
                <CInput
                  name="name"
                  disabled
                  placeholder="Tên khách hàng"
                  defaultValue={feedback.customerName}
                />
              </CFormGroup>
              <CRow>
                <CFormGroup className="col-6">
                  <CLabel htmlFor="tittle">Tiêu đề</CLabel>
                  <CInput
                    name="tittle"
                    type="text"
                    disabled
                    placeholder="Tiêu đề"
                    defaultValue={feedback.tittle}
                  />
                </CFormGroup>
                <CFormGroup className="col-6">
                  <CRow style={{ paddingTop: "30px", paddingLeft: "50px" }}>
                    <CLabel
                      htmlFor="status"
                      style={{ paddingTop: "5px", fontWeight: "bold" }}
                    >
                      Trạng thái
                    </CLabel>
                    <CSwitch
                      style={{ paddingLeft: "100px" }}
                      name="status"
                      className={"mx-1"}
                      size="lg"
                      shape={"pill"}
                      color={"info"}
                      labelOn={"\u2713"}
                      labelOff={"\u2715"}
                      onChange={handleChangeSlove}
                      defaultChecked={feedback.slove === "ok" ? true : false}
                    />
                  </CRow>
                </CFormGroup>
              </CRow>

              <CFormGroup>
                <CLabel htmlFor="note">Ý kiến Khách hàng</CLabel>
                <CTextarea
                  style={{ height: "120px" }}
                  name="content"
                  disabled
                  placeholder="Ý kiến Khách hàng"
                  defaultValue={feedback.content}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
        <div className=" card col-lg-6 mx-auto">
          <CCard style={{ border: "none" }}>
            <CCardHeader>Lịch sử</CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="createdDate">Ngày tạo</CLabel>
                <CInput
                  name="createdDate"
                  type="date"
                  disabled
                  placeholder="Ngày tạo"
                  defaultValue={new Date(feedback.createdDate)
                    .toISOString()
                    .slice(0, 10)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="createBy">Người tạo</CLabel>
                <CInput
                  name="createBy"
                  disabled
                  placeholder="Người tạo"
                  defaultValue={feedback.createdBy}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedDate">Ngày chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedDate"
                  type="date"
                  disabled
                  placeholder="UpdateTime"
                  defaultValue={new Date(feedback.modifiedDate)
                    .toISOString()
                    .slice(0, 10)}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="modifiedBy">Người chỉnh sửa gần nhất</CLabel>
                <CInput
                  name="modifiedBy"
                  disabled
                  placeholder="modifiedBy"
                  defaultValue={feedback.modifiedBy}
                />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            className="btn btn-primary"
            onClick={updatefeedback}
            style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}
          >
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDetail;
