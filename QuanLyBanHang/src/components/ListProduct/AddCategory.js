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


function AddCategory({isShowCategory ,setCategoryies}) {

    const handleClose=()=>{
        setCategoryies(false);
    }
    const [message, setMesage] = useState({
        code: "",
        name: "",
      },[]);
      const [code, setCode] = useState("");
      const [name, setName] = useState("");
    
      const saveCategory = (e) => {
        e.preventDefault();
        let category = {
          code: code,
          name: name,
  
        };
      
    var data = JSON.stringify(category)
    
        ApiQuan('post',`categories`,data).then((item) => {
          
        Swal.fire({
          icon: 'success',
          title: 'đã đạo thêm loại sản phẩm',
          showConfirmButton: false,
          timer: 1500
        })
        setCategoryies(false)
        });
      };
    
      const changeonBlur = (event)=>{
        if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
            setMesage({
              code:" * Mã không được để trống"
            })
          }
          else{
            setMesage({
              code:""
            })
          }
        }
    
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

   
          const changeCode = (event) => {
            setCode(event.target.value);
          };
        
          const changeName = (event) => {
            setName(event.target.value);
          };
        
    
    return (
        <>
        <Modal show={isShowCategory} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Thêm Loại sản phẩm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <CRow>
          <CCol xs="12">
           
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput
                    name="code"
                    placeholder="Nhập Mã"
                    onChange={changeCode}
                      onBlur={changeonBlur}
                  />
                  <span style={{color:"red"}}> {message.code}</span>
                </CFormGroup>
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
                  onClick={saveCategory}
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

export default AddCategory;
   