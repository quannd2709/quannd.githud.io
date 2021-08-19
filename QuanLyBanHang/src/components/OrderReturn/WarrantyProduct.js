import { CButton } from '@coreui/react';
import React from 'react';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const WarrantyProduct = ({createdDate,isShow, setShow}) => {
    console.log("ishow:",isShow);
    const history = useHistory();
    const getRedirect =()=>{
        history.push("/return");
    }

    const getSelect = ()=>{
        setShow(false);
    }
    return (
        <Modal 
        backdrop="static"
        show={isShow}
        scrollable="auto"
        onHide={getRedirect}
        dialogClassName = "list-order-1"
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Hết hạn đổi trả </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p style = {{fontWeight:"500"}}>Hóa đơn được tạo:{createdDate} </p>
         <p style = {{fontWeight:"450"}}> Thời gian đổi trả là 30 ngày, sản phẩm đã hết hạn đổi trả.
             Ấn thoát để trở về
         </p>
         
        </Modal.Body>
        <Modal.Footer>
        <CButton color="primary" onClick = {getRedirect} >
        Thoát
      </CButton>
        </Modal.Footer>
      </Modal>
    );
}

export default WarrantyProduct;
