
import React from 'react'
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CFormGroup,
  CCardHeader
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import axios from 'axios';

const Login = () => {

  const { jwt, setJwt } = useContext(JwtContext);
  const history = useHistory();
  const [category, setCategory] = useState({ phone: "", passWord: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
    console.log('bình ', category);
  };
  /**
   * get jwt from db
   * set jwt into cookie
   * set context
   */
   var data = JSON.stringify(category);
   var config = {
    method: "POST",
    url: `http://localhost:8080/login`,
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  const handleSubmit = () => {
    console.log(category);
    // callApi("login", "POST", category).then((response) => {
      axios(config)
      .then((response) => {
        alert("Đăng nhập thành công");
        console.log("response:", data);
        reactLocalStorage.set("token", response.data.token);
        reactLocalStorage.set("name", response.data.fullName);
        setJwt(data.token);
      history.push("/dashboard");
    })
    .catch(function (error) {
      alert("Tài khoản hoặc mật khẩu không chính xác");
      console.log(error);
    });

  };



  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">

          {/* <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username"vname = "username" autoComplete="username" onChange= {handleChange} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name = "password" placeholder="Password" autoComplete="current-password" onChange = {handleChange}/>
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4" onClick = {getUser}>Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.</p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1} >Register Now!</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol> */}

          <CCol xs="12" sm="5">
            <CCard>

              <div style={{ backgroundColor: "#3c4b64", padding: "20px 0" }}>
                <div style={{ backgroundColor: "#3c4b64", width: "176.53px", height: "63.7px", margin: "0 auto" }}>
                  <img src="/avatars/logo.png" alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>

              <CCardBody>
                <CForm action="" method="post">
                  <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput  name="phone" placeholder="Tài khoản" autoComplete="name" onChange={handleChange} />
                    </CInputGroup>
                  </CFormGroup>

                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" name="passWord" placeholder="Mật khẩu" autoComplete="current-password" onChange={handleChange} />
                    </CInputGroup>
                  </CFormGroup>
                  <CRow style={{ marginBottom: "12px" }}>
                    <CCol xs="6">
                      <CButton color="success" className="px-4" onClick={handleSubmit}>Đăng nhập</CButton>
                    </CCol>
                    <CCol xs="6" className="text-right">
                      <CButton color="link" className="px-0">Quên mật khẩu?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>

        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
