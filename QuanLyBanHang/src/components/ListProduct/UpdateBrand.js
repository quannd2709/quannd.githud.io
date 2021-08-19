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
  import { ApiQuan, createCategory, createSupplier, getSupplier } from "src/apis/Product";


function UpdateBrand({isShowUpdateBrand ,setBrandUpdate},props) {

    const handleClose=()=>{
        setBrandUpdate(false);
    }
    // const [id] = useState(props.match.params.id);
    console.log("ccccccccccccccc",props)
    const [message,setMesage] =useState({
     code: "",
    name: "",
    phone: "",
    email: "",
  
    });
    const [code, setCode] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");
    const[supplier,setSupplier]=useState([])

    useEffect(() => {
        ApiQuan('get',`suppliers`).then((res) => {
           setSupplier(res.data);
           console.log(res.data);
         });
       }, []);
     
    //    const cancel = () => {
    //      props.history.push("/supplier");
    //    };
   
    //    const deleteSupplier = (id) => {
    //      swal({
    //        title: "bạn có muốn xóa nhà cung cấp?",
    //        icon: "warning",
    //        buttons: true,
    //        dangerMode: true,
    //      })
    //      .then((willDelete) => {
    //        if (willDelete) {
    //          ApiQuan('delete',`suppliers/${id}`).then(() => {
    //            setSupplier(supplier.filter((item) => item.id !== id))
    //            props.history.push("/supplier");
    //          });
            
    //          swal("xóa thành công!", {
    //            icon: "success",
    //          });
    //        } else {
    //          swal("nhà cung cấp chưa được xóa!");
    //        }
    //      });
        
    //    };
     
   
     
    //    useEffect(() => {
    //      ApiQuan('get',`suppliers/${id}`).then((res) => {
    //        setCode(res.data.code);
    //        setName(res.data.name);
    //        setEmail(res.data.email);
    //        setAddress(res.data.address);
    //        setPhone(res.data.phone);
    //        setDescription(res.data.description)
    //      });
    //    }, []);
    //    const updateSupplier = (e) => {
    //      e.preventDefault();
    //      let supplier = {
    //        code: code,
    //        name: name,
    //        email: email,
    //        address: address,
    //        phone: phone,
    //        description: description,
    //      };
      
    //       var data = JSON.stringify(supplier)
    //      Swal.fire({
    //        title: 'bạn có muốn thay đổi nhà cung cấp?',
    //        showCancelButton: true,
    //        confirmButtonText: `lưu`,
    //      }).then((result) => {
          
    //        if (result.isConfirmed) {
    //          ApiQuan('put',`suppliers/${id}`,data).then((res) => {
    //            console.log("aaaa")
    //           });
    //          Swal.fire('đã lưu!', '', 'success')
    //        } 
    //      })
   
    //      UpdateSuppliers(supplier, id).then((res) => {
    //       console.log("aaaa")
    //      });
    //    };
     
       const changeCode = (event) => {
         setCode(event.target.value);
       };
       const changeName = (event) => {
         setName(event.target.value);
       };
   
       const changeDescription = (event) => {
         setDescription(event.target.value);
       };
       const changeEmail = (event) => {
         setEmail(event.target.value);
       };
       const changeAddress = (event) => {
         setAddress(event.target.value);
       };
       const changePhone = (event) => {
         setPhone(event.target.value);
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
         }
     
         const changeonBlurPhone = (event)=>{
           // var a = new RegExp("^[0-9]*$")
     
           if((/((09|03|07|08|05)+([0-9]{8})\b)/.test(event.target.value)==false)){
             setMesage({
               phone:"Số điện thoại không hợp lệ"
             })
           }
           else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
             setMesage({
               phone:" Số lượng sản phẩm không được để trống"
             })
           }
           else{
             setMesage({
               phone:""
             })
           }
         }
     
         const changeonBlurEmail = (event)=>{
          
     
           if((/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(event.target.value)==false)){
             setMesage({
               email:"Email ko hợp lệ"
             })
           }
           else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
             setMesage({
               email:" Email không được để trống"
             })
           }
           else{
             setMesage({
               email:""
             })
           }
         }
     
    
    return (
        <>
        <Modal show={isShowUpdateBrand} onHide={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Cập nhật cung cấp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <CRow>
          <CCol xs="12">
            <CCard>
            <CCardBody>
                  <CFormGroup>
                    <CLabel htmlFor="company">Mã</CLabel>
                    <CInput name="code" onChange={changeCode} value={code}  onBlur={changeonBlur}/>
                   
                    <span style={{color:"red"}}> {message.code}</span>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="vat">Tên</CLabel>
                    <CInput
                      name="name"
                      placeholder="DE1234567890"
                      onChange={changeName}
                      value={name}
                      onBlur={changeonBlurName}
                    
                    />
                     <span style={{color:"red"}}> {message.name}</span>
                  </CFormGroup>
                  <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    id="vat"
                    placeholder="Số điện thoại"
                    value={phone}
                    onChange={changePhone}
                    onBlur={changeonBlurPhone}
                  />

                  <span style={{color:"red"}}> {message.phone}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Địa chỉ</CLabel>
                  <CInput
                    id="vat"
                   value={address}
                    onChange={changeAddress}
                  />
                  {/* <span style={{color:"red"}}> {message.price}</span> */}
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                  value={email}
                  onChange={changeEmail}
                  onBlur={changeonBlurEmail}
                  />
                  <span style={{color:"red"}}> {message.email}</span>
                </CFormGroup>
                </CCardBody>
              </CCard>
        </CCol>

       </CRow>
          </Modal.Body>
          
          <Modal.Footer>
            <button variant="secondary" onClick={handleClose} >
              Close
            </button>
            <button variant="primary"  >
            {/* onClick={saveSupplier} */}
              Save Changes
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}

export default UpdateBrand;
   