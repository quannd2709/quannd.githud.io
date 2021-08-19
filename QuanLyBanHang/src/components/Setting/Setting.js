
import React from 'react'
import {Link} from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from  '@coreui/react'
import CIcon from '@coreui/icons-react'


const Setting = () => {

  return (
    <>
     <h1 style = {{ color: "#464545", fontSize: "25px", marginTop: "-15px" , marginBottom: "25px"}}>Cấu hình</h1>      
      <CRow>
        <CCol xs="12" sm="6" md="4">
          <CCard style = {{ height: "150px"}}>
            <CCardHeader>
            <Link to = "/settings/staffs" style = {{textDecoration: "none"}}>  <span style = {{ color: "#321fdb", fontWeight: "bold", fontSize: "16px" }}>Quản lý nhân viên</span></Link>
              <div className="card-header-actions">
              <CIcon name="cil-people" className="float-right"/>
              </div>
            </CCardHeader>
            <CCardBody>
              Tạo và quản lý tất cả tài khoản của nhân viên
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard style = {{ height: "150px"}}>
            <CCardHeader>
            <Link to = "/settings/roles" style = {{textDecoration: "none"}}><span style = {{ color: "#321fdb", fontWeight: "bold", fontSize: "16px" }}>Phân quyền vai trò</span> </Link> 
              <div className="card-header-actions">
                <CIcon name="cil-sun" className="float-right"/>
              </div>
            </CCardHeader>
            <CCardBody>
              Tạo, phân quyền và quản lý các vai trò của cửa hàng
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" sm="6" md="4">
          <CCard style = {{ height: "150px"}}>
            <CCardHeader>
            <span style = {{ color: "#321fdb", fontWeight: "bold", fontSize: "16px" }}>Thông tin cửa hàng</span>
              <div className="card-header-actions">
                <CIcon name="cil-check" className="float-right"/>
              </div>
            </CCardHeader>
            <CCardBody>
              Thông tin liên hệ và địa chỉ của cửa hàng
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Setting
