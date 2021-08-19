
import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea
} from '@coreui/react'
import { callApi } from 'src/apis/Apis';
import { useHistory } from 'react-router-dom';

const RoleDetail = (props) => {

let history = useHistory();

const roleDetail = props.location.state.role;

const [role, setRole] = useState({
    id: roleDetail.id,
    name: roleDetail.name,
    notes: roleDetail.notes,
    createdDate: roleDetail.createdDate,
    createBy: roleDetail.createBy,
    modifiedDate: new Date(),
    modifiedBy: localStorage.getItem('name')
});

const onHandleChange = (e) => {
    const {name, value} = e.target;
    setRole({ ...role, [name] : value });
}

var data = JSON.stringify(role);

const updateRole = () => {
  callApi('put', `roles/${roleDetail.id}`, data)
  .then(response => { history.goBack() })
  .catch(error => {console.log(error)})
}

  return (
    <div>
 <div>
    <h3>Chỉnh sửa vai trò</h3>
    <hr />
        <div className="row">
          <div className="col-lg-6">
            <CCard>
              <CCardBody> 
               
                <CFormGroup>
                  <CLabel>Tên vai trò</CLabel>
                  <CInput
                    defaultValue = {roleDetail.name}
                    name="name"
                    placeholder="Nhập vai trò"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
          
                <CFormGroup>
                  <CLabel htmlFor="vat">Ghi chú</CLabel>
                  <CTextarea
                    defaultValue = {roleDetail.notes}
                    name = "notes"       
                    placeholder="Nhập ghi chú"
                    onChange={onHandleChange}
                  />
                </CFormGroup>
                <button className="btn btn-danger btn-light" type="reset" style={{ marginLeft: "10px" }}  onClick={() => {history.goBack()}}>Hủy</button>
                <button className="btn btn-success"  style={{ marginLeft: "10px", backgroundColor: "#0089ff" }} onClick = {updateRole}>Lưu</button>
             
              </CCardBody>
            </CCard>
         </div>
        </div>  
        </div>
    </div>
  )
}

export default RoleDetail
