import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi } from "src/apis/ApiCaller";
import { JwtContext } from "src/context/JwtContext";
import "./css/Login.css";

const token = "Bearer";

const Logins = () => {
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
  const handleSubmit = () => {
    console.log(category);
    callApi("login", "POST", category).then((response) => {
      if (response.status !== 200) {
        alert("tài khoản mật khẩu không chính xác");
        return;
      }
      response.json().then((data) => {
        alert("thao tác thành công");
        console.log("response:", data);
        reactLocalStorage.set("token", data.token);
        reactLocalStorage.set("name", data.fullName);
        reactLocalStorage.set("id", data.id);
        setJwt(data.token);
        console.log("login:", jwt);
        history.push("/404");
      });
    });
  };
  return (
    <div>
      <div className="container">
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
      </div>
    </div>
  );
};

export default Logins;
