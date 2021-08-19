import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import {
  CButton,
  CCard,
  CCardBody,
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";
// import "./css/Login.css";

const token = "Bearer";

const Login = () => {
  const { jwt, setJwt } = useContext(JwtContext);
  const history = useHistory();
  const [category, setCategory] = useState({ phone: "", passWord: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setCategory({ ...category, [name]: value });
  };
  /**
   * get jwt from db
   * set jwt into cookie
   * set context
   */
  // const handleSubmit = () => {
  //   console.log(category);
  //   callApi("login", "POST", category).then((response) => {
  //     if (response.status !== 200) {
  //       alert("tài khoản mật khẩu không chính xác");
  //       return;
  //     }
  //     response.json().then((data) => {
  //       alert("thao tác thành công");
  //       console.log("response:", data);
  //       reactLocalStorage.set("token", data.token);
  //       reactLocalStorage.set("name", data.fullName);
  //       setJwt(data.token);
  //       console.log("login:", jwt);
  //       history.push("/home");
  //     });
  //   });
  // };

  var data = JSON.stringify(category);
  var config = {

   method: "POST",
   url: `http://localhost:8080/login`,
   headers: {
     'Content-Type': 'application/json'
   },
   data: data
 };

 const handleSubmit = (e) => {
   e.preventDefault();
    console.log(category);
    // callApi("login", "POST", category).then((response) => {
      axios(config)
      .then((response) => {
        console.log("response:", data);
        reactLocalStorage.set("token", response.data.token);
        reactLocalStorage.set("name", response.data.fullName);
        setJwt(data.token);
        window.location.reload("http://localhost:3000/dashboard");
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
     

          {/* <div className="container">
        <div className="login-form">
          <div className="main-div">
            <form id="formLogin" name="formLogin">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  id="userName"
                  placeholder="Tên đăng nhập"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="passWord"
                  className="form-control"
                  id="password"
                  placeholder="Mật khẩu"
                  onChange={handleChange}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div> */}

          <CCol xs="12" sm="5">
            <CCard>
              <div style={{ backgroundColor: "#3c4b64", padding: "20px 0" }}>
                <div
                  style={{
                    backgroundColor: "#3c4b64",
                    width: "176.53px",
                    height: "63.7px",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src="/avatars/logo.png"
                    alt=""
                    style={{ maxWidth: "100%" }}
                  />
                </div>
              </div>

              <CCardBody>
                <CForm action="" method="post">
                  <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        name="phone"
                        placeholder="Tài khoản"
                        autoComplete="name"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                  </CFormGroup>

                  <CFormGroup>
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-asterisk" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        name="passWord"
                        placeholder="Mật khẩu"
                        autoComplete="current-password"
                        onChange={handleChange}
                      />
                    </CInputGroup>
                  </CFormGroup>
                  <CRow style={{ marginBottom: "12px" }}>
                    <CCol xs="6">
                      <CButton
                        color="success"
                        className="px-4"
                        onClick={handleSubmit}
                      >
                        Đăng nhập
                      </CButton>
                    </CCol>
                    <CCol xs="6" className="text-right">
                      <CButton color="link" className="px-0">
                        Quên mật khẩu?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Login;
