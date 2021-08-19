
import React, { useState, useEffect } from 'react'
import { callApi } from 'src/apis/Apis';
import {
  CCard,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,

} from '@coreui/react'
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
// import {useForm} from 'react-hook-form';

const StaffDetail = (props) => {

  /* Code */
  const [roles, setRoles] = useState([]);

  useEffect(() => {
   callApi('get', 'listRoles')
      .then(response => { setRoles(response.data) })
      .catch(error =>{
        if(error.response.data.status == 403){
          history.push("/error");
        }})
  }, []);

  let history = useHistory();

  const staffDetail = props.location.state.staff;

  const [staff, setStaff] = useState({
    id: staffDetail.id,
    fullName: staffDetail.fullName,
    passWord: staffDetail.passWord,
    address: staffDetail.address,
    mail: staffDetail.mail,
    phone: staffDetail.phone,
    dateOfBirth: staffDetail.dateOfBirth,
    status: staffDetail.status,
    roleId: staffDetail.roleId,
    createdDate: staffDetail.createdDate,
    createBy: staffDetail.createBy,
    modifiedDate: new Date(),
    modifiedBy: localStorage.getItem("name")
  });

  const roleEdit = roles.filter(item => item.id != staffDetail.roleId);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
    console.log('staff ',staff)
  }

  const getValueSelect = () => {
    var select = document.getElementById('select')
    setStaff({ ...staff, roleId: [Number(select.value)] })
    console.log('select ', select.value)
    console.log('staff ở selct ', staff)
  }

  var data = JSON.stringify(staff);
  const updateStaff = () => {
    callApi('put', `staffs/${staffDetail.id}`, data)
      .then(response => {
        swal({
          title: "Tốt lắm!",
          text: "Cập nhật nhân viên thành công!",
          icon: "success",
          timer: 2000
        });
        history.goBack() })
      .catch(error => { console.log(error) })
  }
  /* End - Code */

  /* Validation */

// const { register, handleSubmit, formState: { errors } } = useForm();
// const tagViewError = (messageError) => {
//   return(
//     <p style = {{color: "red"}}><i class="fas fa-exclamation-triangle" style = {{color: "#b40404", marginRight: "10px"}}></i><span>{messageError}</span></p>
//     )
//   }

/* End - Validation */

  return (
    <div>
      <div>
        <h3>Chỉnh sửa thông tin nhân viên</h3>
        <hr />
        <div className="" style={{ backgroundColor: "white" }}>
        <div className="row">
          <div className="col-lg-6">
            <CCard>
              <CCardBody>
                <CFormGroup>
                  <CLabel>Họ và tên</CLabel>
                  <CInput
                    defaultValue={staffDetail.fullName}
                    name="fullName"
                    placeholder="Nhập họ và tên"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Address</CLabel>
                  <CInput
                    defaultValue={staffDetail.address}
                    name="address"
                    placeholder="Nhập địa chỉ"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Email</CLabel>
                  <CInput
                    defaultValue={staffDetail.mail}
                    name="mail"
                    placeholder="Nhập email"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Số điện thoại</CLabel>
                  <CInput
                    defaultValue={staffDetail.phone}
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="company">Ngày sinh</CLabel>
                  <CInput
               
                    defaultValue={staffDetail.dateOfBirth}
                    name="dateOfBirth"
                    placeholder="Nhập ngày sinh"
                    onChange={onHandleChange}
                  />
                </CFormGroup>

                <CFormGroup>
                  <CLabel htmlFor="vat">Trạng thái</CLabel>
                  <CInput
                    defaultValue={staffDetail.status}
                    name="status"
                    onChange={onHandleChange} />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </div>
          <div className="col-lg-6 mx-auto">
            <CCard>

              <CCardBody>

                <CFormGroup>
                  <CLabel htmlFor="vat">Vai trò</CLabel>
                  <select className="custom-select" id="select" onClick={getValueSelect}>
                  <option value={staffDetail.roleId} key={staffDetail.roleId}>{staffDetail.roleName}</option>
                    {roleEdit.map(item => {
                      return (
                        <option value={item.id} key={item.id}>{item.name}</option>
                      )
                    })}
                  </select>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="company">Ngày tạo</CLabel>
                  <CInput
                    defaultValue={staffDetail.createdDate}
                    name="createdDate"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Người tạo</CLabel>
                  <CInput
                    defaultValue={staffDetail.createBy}
                    name="createBy"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Ngày cập nhật</CLabel>
                  <CInput
                    defaultValue={staffDetail.modifiedDate}
                    name="modifiedDate"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <CFormGroup>
                  <CLabel>Người cập nhật</CLabel>
                  <CInput
                    defaultValue={staffDetail.modifiedBy}
                    name="modifiedBy"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
          </div>
        </div>

        <div style={{ marginLeft: "950px", padding: "20px 0px" }}>
          <button
            onClick={() => {history.goBack()}}
            className="btn btn-light"
            style={{ marginLeft: "10px", padding: "7px 20px" }}
          >
            Hủy
          </button>
          <button
            className="btn btn-success"
            onClick={updateStaff}
            style={{ marginLeft: "10px", padding: "7px 20px", backgroundColor: "#0089ff", borderColor: "#0089ff"  }}
          >
            Lưu
          </button>
        </div>

      </div>
    </div>
    </div>
  )
}

export default StaffDetail
