import React, { useContext } from "react";
import { SalerContext } from "src/context/JwtContext";
import "./scss/FirstContent.scss";
const FirstContent = ({ setIsShowProducts }) => {
  const { isFocus, setFocus } = useContext(SalerContext);
  const setShowProduct = () => {
    console.log("helllo");
    setIsShowProducts(true);
    setFocus(true);
  };
  return (
    <div className="wrap-first-content">
      <div className="wrap-first-content-1">
        <div className="first-content-icon">
          <img src="https://lh3.googleusercontent.com/5BVdoW8_TfhsdCl4UDm58TTnPrAoELir9-XvvqE3g7MOlTGJVc6oVQ-ikfmttatz88vdNWSYvTevMrxe-1HAmXmFVb9FlWOHHLfkgIsYfmh7MxmhxXDbdzZVPM3fPsSp_eevI8X9zw=w2400" />
        </div>
        <div className="btn-add-product" onClick={setShowProduct}>
          <span> Thêm sản phẩm ngay</span>
        </div>
      </div>
    </div>
  );
};

export default FirstContent;
