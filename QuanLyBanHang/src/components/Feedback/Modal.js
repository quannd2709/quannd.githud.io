import React, { useState } from "react";
import "../../apis/css.scss";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CPagination,
  CModalHeader,
  CModalTitle,
} from "@coreui/react";
function Modal({
  modal,
  setModal,
  page,
  totalPage,
  setPage,
  customers,
  feedback,
  setFeedback,
  setName,
}) {
  const [cus, setCus] = useState();
  const renderTodo = customers.map((customer) => {
    return (
      <>
        <tr
          className="row alig"
          style={{
            backgroundColor: "white",
            hover: { cursor: "pointer" },
            //color: "gray",
          }}
          onClick={(e) => {
            e.target.parentNode.style.backgroundColor = "#0089ff";
            setCus(customer.name);
            setFeedback({
              ...feedback,
              customerId: customer.id,
              customerName: customer.customerName,
            });
          }}
          key={customer.id}
        >
          <td className="col-4">{customer.name}</td>
          <td className="col-3">{customer.phone}</td>
          <td className="col-5">{customer.email}</td>
        </tr>
      </>
    );
  });
  return (
    <>
      <CModal show={modal} onClose={setModal}>
        <CModalHeader closeButton>
          <CModalTitle>Chọn Khách hàng</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <table
            className=" table table-striped table-bordered"
            style={{ border: "none" }}
          >
            <thead>
              <tr className="row">
                <th className="col-4">Tên KH</th>
                <th className="col-3">Số ĐT</th>
                <th className="col-5">Email</th>
              </tr>
            </thead>
            <tbody>{renderTodo}</tbody>
          </table>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={page}
            pages={totalPage}
            onActivePageChange={setPage}
          />
        </CModalBody>
        <CModalFooter>
          <CButton
            color="primary"
            onClick={() => {
              console.log("cus now: ", cus);
              setName(cus);
              setFeedback({ ...feedback, customerName: cus });
              console.log("feedback", feedback);
              setModal(false);
            }}
          >
            Chọn
          </CButton>{" "}
          <CButton
            color="secondary"
            onClick={() => {
              setCus("");
              setModal(false);
            }}
          >
            Hủy bỏ
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
}

export default Modal;
