import React, { useContext, useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import ModalHeaders from "./ModalHeaders";
import OrderTable from "./OrderTable";
import { CPagination } from "@coreui/react";
import { Modal } from "react-bootstrap";
import ReturnOrder from "../OrderReturn/ReturnOrder";
import './scss/OrderModal.scss'
import NewNotOrder from "src/helpers/NewNotOrder";
const OrderModal = ({show, setShow}) => {
  const [totalPage,setTotalPage] = useState(5);
  const [isShow, setIsShow] = useState(true);
  const { jwt } = useContext(JwtContext);
  const acc = reactLocalStorage.getObject("acc");
  const [isCheck, setIsCheck] = useState(false);
  console.log(acc);
  const [orderPageable, setOrderPageAble] = useState({
    page: 1,
    limit: 10,
    inputOrder: "",
    orderTime: "",
  });
  const handleClose = () => {
    setIsShow(false);
    setShow(false);
  }

  const [listOrder, setListOrder] = useState([]);
 
  const getPage = (page) =>{
    console.log("trang:",page);
    if(page==0){
     
      page = 1;
    }
    setOrderPageAble({...orderPageable, page:page});
  }
  
  useEffect(() => {
    console.log("useeffect:" + orderPageable);
    console.log(acc.token);
    callApi("order", "post", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
       
        if(data.resultItem.length==0){
          setIsCheck(true);
        }else{
          setListOrder(data.resultItem);
          setIsCheck(false);
        }
        // alert("thao tác thành công");
        console.log("list order", data);
        setTotalPage(Math.ceil(data.totalItem/orderPageable.limit));
      });
    });
  }, [orderPageable,show]);

  /**
   * filter and search order
   */

  const getInput = (e) => {
    let { name, value } = e.target;
    console.log(name + value);
    setOrderPageAble({ ...orderPageable, [name]: value });
    console.log(orderPageable);
  };

  const getDate = (startedTime,endedTime) => {
    setOrderPageAble({
      ...orderPageable,
      startedTime:startedTime,
      endedTime:endedTime
    });
  };
  console.log();

  return (
    
      <Modal 
        show={isShow}
        scrollable="auto"
        onHide={handleClose}
        dialogClassName = "list-order-1"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Chọn đơn để trả hàng</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <ModalHeaders inputs={getInput} getDate={getDate} />
          {
            !isCheck 
            ?
            <OrderTable type = "return "lists={listOrder} />
            :
            <NewNotOrder />
          }
          
         
        </Modal.Body>
        <Modal.Footer>
          <CPagination
            doubleArrows={true}
            activePage={orderPageable.page}
            pages={totalPage}
            onActivePageChange={getPage}
          />
        </Modal.Footer>
      </Modal>
    
  );
};

export default OrderModal;
