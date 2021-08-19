
import React, { useState, useEffect } from 'react'
import {
  CCard,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,

} from '@coreui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {useForm} from 'react-hook-form';
import { callApi } from 'src/apis/Apis';
import swal from 'sweetalert';

const AddStaff = () => {

  /* Code */
  let history = useHistory();

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    callApi('get', 'listRoles')
      .then(response => { setRoles(response.data) })
      .catch(error => {
        console.log('error', error.response.status)
        if(error.response.data.status == 403){
          history.push("/error");
        }
      }
        )
  }, []);

  
  const [staff, setStaff] = useState({ createdDate: new Date(), createBy: localStorage.getItem("name"), roleId: [1], status: "Đang làm việc" })

  const getValueSelect = () => {
    var select = document.getElementById('select')
    setStaff({ ...staff, roleId: [Number(select.value)] })
    console.log('select ', select.value)
    console.log('staff ở selct ', staff)
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
    console.log('data ', staff)
  }

  var data = JSON.stringify(staff);
  var config = {
    method: 'post',
    url: `http://localhost:8080/admin/staffs`,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
    },
    data: data
  };

const [errorCheckUnique, setErrorCheckUnique] = useState();
  const createStaff = () => {
    axios(config)
      .then(response => { 
        swal({
          title: "Tốt lắm!",
          text: "Thêm nhân viên thành công!",
          icon: "success",
          timer: 2000
        });
        history.goBack() })
      .catch(function (error) {

        if(error.response.data.status == 403){
          history.push("/error");
        }

        if(error.response){
          setErrorCheckUnique(error.response.data);
          console.log("ahihi:",error.response.data)
        }
   
      });
  }

  /* End - Code */

/* Validation */

const { register, handleSubmit, formState: { errors } } = useForm();
const tagViewError = (messageError) => {
  return(
    <p style = {{color: "red"}}><i class="fas fa-exclamation-triangle" style = {{color: "#b40404", marginRight: "10px"}}></i><span>{messageError}</span></p>
    )
  }

/* End - Validation */

  return (
    <div>
      <h3>Thêm mới nhân viên</h3>
      <hr />
      <div className="" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className=" col-lg-6">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <CLabel>Họ và tên</CLabel>
                  <CInput
                    {...register("fullName", { required: true })}
                    name="fullName"
                    placeholder="Nhập họ và tên"
                    onChange={onHandleChange}               
                  />
                  {/* {errors.fullName?.type === 'required' && <p style = {{color: "red"}}>Họ tên không được bỏ trống</p>} */}
                  {errors.fullName?.type === 'required' && tagViewError("Họ tên không được bỏ trống")}
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="company">Ngày sinh</CLabel>
                  <CInput
                  {...register("dateOfBirth", { required: true })}
                    type="date"
                    name="dateOfBirth"
                    max = {new Date().toISOString().slice(0,10)}
                    placeholder="Nhập ngày sinh"
                    onChange={onHandleChange}
                  />
                  {errors.dateOfBirth?.type === 'required' && tagViewError("Ngày sinh không được bỏ trống") }
                </CFormGroup>

                <CFormGroup>
                  <CLabel>Address</CLabel>
                  <CInput
                    {...register("address", { required: true })}
                    /* LƯU Ý QUAN TRỌNG TÔI GẶP LỖI: 
                      {...register("binhAddress", { required: true })}
                      nếu đặt là binhAddress khác với name = "address" thì sẽ gặp lỗi
                    */
                    name="address"
                    placeholder="Nhập địa chỉ"
                    onChange={onHandleChange}
                  />
                  {errors.address?.type === 'required' && tagViewError("Địa chỉ không được bỏ trống")}
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                    {...register("mail", { required: true, pattern: /^\w+@+\w+(\.\w+){1,2}$/ })}
                    name="mail"
                    placeholder="Nhập email"
                    onChange={onHandleChange}
                  />
                  {errors.mail?.type === 'required' && tagViewError("Email không được bỏ trống")}
                  {errors.mail?.type === 'pattern' && tagViewError("Email không đúng định dạng")}
                </CFormGroup>


              </CCardBody>
            </CCard>
          </div>

          <div className=" col-lg-6">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    // {...register("phone", { required: true, pattern: /^0[0-9]{9}$/ })}
                    {...register("phone", { required: true, pattern: /^0\d{9}$/})}
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    onChange={onHandleChange}
                  />
                  {errors.phone?.type === 'required' && tagViewError("Số điện thoại không được bỏ trống")}
                  {errors.phone?.type === 'pattern' && tagViewError("Số điện thoại không đúng định dạng")}
                  {errorCheckUnique == null? "" : tagViewError("Số điện thoại không được trùng")}
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Mật khẩu</CLabel>
                  <CInput
                    {...register("passWord", { required: true, minLength: 6, maxLength: 20 })}
                    name="passWord"
                    placeholder="Nhập mật khẩu"
                    onChange={onHandleChange}
                  />
                  {errors.passWord?.type === 'required' && tagViewError("Mật khẩu không được bỏ trống")}
                  {errors.passWord?.type === 'minLength' && tagViewError("Mật khẩu ít nhất 6 kí tự")}
                  {errors.passWord?.type === 'maxLength' && tagViewError("Mật khẩu không vượt quá 20 kí tự")}
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Vai trò</CLabel>
                  <select className="custom-select" id="select" onClick={getValueSelect} >
                    {roles.map(item => {
                      return (
                        <option value={item.id} >{item.name}</option>
                      )
                    })}
                  </select>
                </CFormGroup>

              </CCardBody>
            </CCard>
          </div>
        </div>
        <div style={{ marginLeft: "950px", padding: "20px 0px" }}>
          <button
            type="reset"
            className="btn btn-light"
            style={{ marginLeft: "10px", padding: "7px 20px" }}
          >
            Hủy
          </button>
          <button
            className="btn btn-success"
            onClick={handleSubmit(createStaff)}
            style={{ marginLeft: "10px", padding: "7px 20px", backgroundColor: "#0089ff" }}
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddStaff


  /* LƯU Ý QUAN TRỌNG TÔI GẶP LỖI: 
1.  Các {...register("address", { required: true })} phải đặt trước các sự kiện -> nếu ko sẽ gặp lỗi,
yên tâm nhất là để nó trên đầu rồi mới đến các
thuộc tính và event của input

2.   {...register("binhAddress", { required: true })}
    nếu đặt là binhAddress khác với name = "address" thì sẽ gặp lỗi
  */