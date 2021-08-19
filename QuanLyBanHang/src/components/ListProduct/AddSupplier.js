import React from 'react';
import { Modal } from 'react-bootstrap';
import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CFormGroup,
    CInput,
    CLabel,
    CRow,
    CTextarea,
    CButton
  } from "@coreui/react";
  import Swal from 'sweetalert2'
  import { useEffect, useState } from "react";
  import { ApiQuan  } from "src/apis/Product";


function AddSupplier({isShowSupplier ,setSuppliers}) {

    const handleClose=()=>{
        setSuppliers(false);
    }
    const [message, setMesage] = useState({
        name: "",
      },[]);
    
      const [name, setName] = useState("");
      const [createdDate, setCreateDate] = useState("");

      const saveBrand = (e) => {
        e.preventDefault();
        let brands = {
          name: name,
          createdDate: createdDate,
        };
      
    var data = JSON.stringify(brands)
    
        ApiQuan('post',`brands`,data).then((item) => {
          
        Swal.fire({
          icon: 'success',
          title: 'đã đạo thêm nhãn hàng',
          showConfirmButton: false,
          timer: 1500
        })
        setSuppliers(false)
        }).catch((error)=>{
          if (error.response.data.mess == "error : name not null") {
            console.log("ccc");
            Swal.fire({
              icon: "error",
              title: "tên không được để chống",
              showConfirmButton: false,
              timer: 1500,
            });
          }

        })
      };
  
    
        const changeonBlurName = (event)=>{
         if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
            setMesage({
              name:" Tên không được để trống"
            })
          }
          else{
            setMesage({
              name:""
            })
          }
        };

      
          const changeName = (event) => {
            setName(event.target.value);
          };
       
        
          const changeCreateDate = (event) => {
            setCreateDate(event.target.value);
          };
        
    
    return (
        <>
        <Modal show={isShowSupplier} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Thêm Nhãn hàng</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <CRow>
          <CCol xs="12">
          
              <CCardBody>
          
                <CFormGroup>
                  <CLabel htmlFor="vat">Tên <span style={{ color: "red" }}>*</span></CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhập tên"
                    onChange={changeName}
                      onBlur={changeonBlurName}
                  />
                  <span style={{color:"red"}}> {message.name}</span>
                </CFormGroup>
              </CCardBody>
            
          </CCol>
       </CRow>
          </Modal.Body>
          <Modal.Footer>
          <CRow>
          <CCol >
            <CRow>
              <CCol >
                <CButton block color="secondary" onClick={handleClose}>
                 Hủy
                </CButton>
              </CCol>
              <CCol >
                <CButton
                  style={{ background: "#0089ff" }}
                  onClick={saveBrand}
                >
                  Lưu
                </CButton>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default AddSupplier;
   