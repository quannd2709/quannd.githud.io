import { CButton } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { FormatMoney } from "src/helpers/FormatMoney";
import "./scss/SaleDiscount.scss";

const SaleDiscount = ({
  isShowDiscount,
  setIsShowDiscount,
  setDismount,
  total,
  setTypeDiscount,
  isCheckTypeDiscount,
  dismount
}) => {
  const handleClose = () => {
    setIsstate(isCheckTypeDiscount);
    setIsShowDiscount(false);
    setDiscount(dismount);
  }
  const [discount, setDiscount] = useState(0);
  const [isState, setIsstate] = useState(true);
  const getPercent = () => {
    setIsstate(false);
    setDiscount(0);
  };

  const getMoney = () => {
    setIsstate(true);
    setDiscount(0);
  };

  const getInputValue = (e) => {
    let val = e.target.value;
    console.log("e là", val);
    if (!isState) {
      let exp = /^\d{1,2}\.?\d*$/;
      val = val.replace(/,/g, "");
      if (exp.test(val)) {
        if (val > 100) {
          setDiscount(20);
        } else {
          console.log("ok");
          // setDismount (val);
          setDiscount(val);
        }
      } else {
        console.log("not ok");
        // setDismount(0);
        setDiscount(0);
      }
     
    } else {
      val = val.replace(/,/g, "");
      let exp = /^\d+$/;
      if (exp.test(val)) {
        setDiscount(FormatMoney(val));
      } else {
        setDiscount(0);
      }
    
    }

    console.log("giá trị dismount:", val);
  };

  const submit = () => {
    if(isState){
      //when select money
      console.log("vào select money");
      if (discount > total) {
        console.log("chiết khấu lớn hơn tổng tiền");
      }else{
        setTypeDiscount(true);
        setIsstate(true);  
          setDismount(discount);     
        setIsShowDiscount(false);
      }
    }else{
      console.log("vào %");
      setIsstate(false);
      setTypeDiscount(false);
        setDismount(discount);
      setIsShowDiscount(false);
    }
  
   
  };
  useEffect(() => {
    setDiscount(dismount);
    setIsstate (isCheckTypeDiscount);
    console.log("discount:type discount",isState);
  }, []);
  return (
    <div className="modal-90w">
      <Modal
        // size = "sm"
        show={isShowDiscount}
        scrollable="true"
        onHide={handleClose}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Chiết khấu đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="add-discount">
            <div className="discount-select">
              <span> Chiết khấu thường</span>
              <div className="btn-select-1">
                <button
                  style={{
                    backgroundColor: !isState ? "#0964cf" : "white",
                    color: !isState ? "white" : "black",
                  }}
                  onClick={getPercent}
                >
                  %
                </button>
                <button
                  style={{
                    backgroundColor: isState ? "#0964cf" : "white",
                    color: isState ? "white" : "black",
                  }}
                  onClick={getMoney}
                >
                  Giá trị
                </button>
              </div>
              <input
                type="text"
                value={FormatMoney(new Number(discount))}
                onChange={getInputValue}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <CButton color="secondary" onClick={handleClose}>
            Thoát{" "}
          </CButton>
          <CButton color="primary" onClick={submit}>
            Áp dụng
          </CButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SaleDiscount;
