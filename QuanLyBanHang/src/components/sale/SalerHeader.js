import React, { useContext, useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Link } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import {
  JwtContext,
  LayoutContext,
  SalerContext,
} from "src/context/JwtContext";
import { closeFullscreen, openFullscreen } from "src/helpers/FullScreen";
import SalerContent from "./SalerContent";
import "./scss/SalerHeader.scss";

const OrderHeader = () => {
  // ------------------------------- useState-------------------------------------------

  const { jwt } = useContext(JwtContext);
  const { isShow, setProducts, setIsShowProducts, isFocus, setFocus } =
    useContext(SalerContext);
  const { setShow } = useContext(LayoutContext);
 const [isFullScreen, setFullScreen] = useState(false);
  const orderPageable = {
    page: 1,
    limit: 7,
  };

  //--------------------------------useEffect-------------------------------------------
  useEffect(() => {
    callApi(`api/v1/find-all`, "POST", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
        setProducts(data);
      });
    });
    if(isFocus){
      getFocus();
    }
    setFocus(false);
   
  }, [isFocus]);
  // ----------------------------------functions----------------------------------------------
  /**
   *
   * @param {*} e
   * get character from input form
   */
  const getInputKey = (e) => {
    setShow(false);
    let val = e.target.value;
    // console.log("order-header-value input form:", val);
    callApiNotJwt(`api/v1/productSearchByKeys?keyword=${val}`, "Get", jwt).then(
      (response) => {
        if (response.status !== 200) {
          alert("thao tác thất bại");
          return;
        }
        response.json().then((data) => {
          console.log(data);
          setProducts(data);
        });
       
      }
    );
  };

  const getFocus =()=>{
    document.getElementById("input-id").focus();
  }

  const IsShowProduct = () => {
    callApi("api/v1/find-all", "POST", orderPageable, jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log("products:", data);
        setProducts(data);
      });
    });
    setIsShowProducts(true);
    console.log("ishow:");
  };

  const returnHome = () => {
    setShow(!isShow);
  };
  // -------------------fullScreen----------------
  const openFullScreen =()=>{
    openFullscreen();
    setFullScreen(true);
  }

  const closeFullScreens =(e)=>{
    e.preventDefault();
    closeFullscreen();
    setFullScreen(false);
    
    
  }

  return (
    <div className="wrapper-header">
      <div className="header-left">
        <div className="header-left-input">
          <div className="icon">
            <i className="fas fa-search" />
          </div>
          <input
            autoComplete = "off"
            id="input-id"
            type="text"
            onFocus={IsShowProduct}
            onChange={(e) => getInputKey(e)}
            placeholder="Thêm sản phẩm vào đơn"
          />
        </div>
      </div>
      <div className="header-right">
        <div className="header-right-staff">
          <div className="header-right-staff-1">
            <span>
              <i className="far fa-user"></i>
            </span>
            <span>{reactLocalStorage.get("name")}</span>
          </div>
        </div>
        <div className="header-right-utils">
          <div className="header-right-utils-1">
            <div className="utils-full-screen">
              {
                !isFullScreen ?
                <i className="fas fa-expand-arrows-alt fa-lg" onClick = {openFullScreen}></i>
                :
                <i class="fas fa-compress-arrows-alt fa-lg" onClick = {closeFullScreens}></i>
              }
            
             
              <Link to="/dashboard">
                <i className="fas fa-home fa-lg" onClick={returnHome}></i>
              </Link>
              <button> Phím tắt </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHeader;
