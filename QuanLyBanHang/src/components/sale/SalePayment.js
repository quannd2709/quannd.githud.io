import React, { useContext, useEffect, useState } from "react";
import SaleAddCustomer from "./SaleAddCustomer";
import "./scss/SalePayment.scss";
import { Modal } from "react-bootstrap";
import ModalDialog from "react-bootstrap/ModalDialog";
import { CButton } from "@coreui/react";
import { JwtContext, SalerContext } from "src/context/JwtContext";
import { FormatMoney } from "src/helpers/FormatMoney";
import { callApi, callApiNotJwt } from "src/apis/ApiCaller";
import List from "./List";
import SaleSearchCustomer from "./SaleSearchCustomer";
import SaleDiscount from "./SaleDiscount";
import InformNew from "src/helpers/InformNew";
import NewNotSearch from "src/helpers/NewNotSearch";
const SalePayment = ({ isShowCustomer, setIsShowCustomer }) => {
  const { jwt } = useContext(JwtContext);
  const [isShow, setIsShow] = useState(false);
  const { productOption, amountChange, setProductOption, getNews } =
    useContext(SalerContext);
  const handleClose = () => setIsShow(false);
  const [total, setTotal] = useState(0);
  const [MoneyOfCustomer, setMoneyOfCustomer] = useState(0);
  const [dismount, setDismount] = useState(0);
  const [givedMoney, setGivedMoney] = useState(0);
  const [lessMoney, setLessMoney] = useState(0);
  const [listCustomer, setCustomer] = useState([]);
  const [isCheck, setIsCheck] = useState(false);
  const [orderDto, setOrderDto] = useState();
  const [isShowInfor, setInforCustomer] = useState(false);
  const [inforCustomer, setInforBtn] = useState({
    id:1,name:"phuc",phone:"",email:""
  });
  const [isShowDiscount, setIsShowDiscount] = useState(false);
  const [isCheckTypeDiscount, setTypeDiscount] = useState(false);
  const [discountConverter, setDiscountConverter] = useState(0);

  // const [isShowCustomer, setIsShowCustomer] = useState(false);
  console.log("payment:", isShowCustomer);
  const addCustomer = () => {
    setIsShow(true);
  };
  console.log("mảng lựa chọn là", isCheckTypeDiscount);
  useEffect(() => {
    let val = 0;
    let discountCv = 0;
    console.log("payment-value of dismount:", dismount);
    for (const ob of productOption) {
      val += ob["amount"] * ob["price"];
    }
    setTotal(val);
    console.log("tổng :", val);
    if (isCheckTypeDiscount) {
      setDiscountConverter(dismount);
      discountCv = dismount;
    } else {
      setDiscountConverter((dismount * val) / 100);
      discountCv = (dismount * val) / 100;
    }
    setMoneyOfCustomer(val - discountCv);
    setGivedMoney(val - discountCv);
    if (MoneyOfCustomer - givedMoney < 0) {
      setLessMoney(0);
    } else {
      setLessMoney(MoneyOfCustomer - givedMoney);
    }

    if (productOption.length == 0) {
      setDismount(0);
      setMoneyOfCustomer(0);
    }
    console.log("sale-payment-productOption", productOption);
    var orderDetailDtos = productOption.map((item) => {
      console.log("item.amount * item.priceProduct", item.price);
      return {
        price: item.amount * item.price,
        productId: item.id,
        quanlity: item.amount,
        // dismount: dismount,
      };
    });
    console.log("ttkh----------",inforCustomer);
    setOrderDto({
      customerId: inforCustomer.id,
      discount: discountCv,
      price: total,
      orderDetailDtos: orderDetailDtos,
    });
   
  }, [
    productOption,
    total,
    amountChange,
    dismount,
    isCheckTypeDiscount,
    isShowCustomer,
    isCheck,
    
  ]);

  const getMoneyOfCustomer = (e) => {
    console.log("gt", typeof e.target.value);
    let val = e.target.value;
    val = val.replace(/,/g, "");
    console.log("giá trị:", val);
    let exp = /^\d+$/;
    if (exp.test(val)) {
      console.log("ok");
      console.log("val", typeof val);
      setMoneyOfCustomer(FormatMoney(val));
      if (val - givedMoney < 0) {
        setLessMoney(0);
      } else {
        setLessMoney(val - givedMoney);
      }
    } else {
      console.log("lỗi");
      setMoneyOfCustomer(givedMoney);
      setLessMoney(0);
    }
  };

  const getCustomer = () => {
    callApiNotJwt("customers/page", "GET", jwt).then((response) => {
      if (response.status !== 200) {
        alert("thao tác thất bại");
        return;
      }
      response.json().then((data) => {
        console.log(data);
        setCustomer(data.content);
      });
    });
    // setIsShowCustomer(true);
    setIsShowCustomer(true);
    // setIsCheck(!isCheck);
    console.log("isShowCu:", isShowCustomer);
  };

  // ------------------search infor of customer----------------------
  const searchCustomer = (e) => {
    let val = e.target.value;
    callApiNotJwt(`customers/search?input=${val}`, "GET", jwt).then(
      (response) => {
        if (response.status !== 200) {
          setCustomer([]);
          return;
        }
        response.json().then((data) => {
          console.log(data.content);
          setCustomer(data.content);
        });
      }
    );
  };
  // -----------------------------validate input----------------------------
  const getDismount = (e) => {
    console.log("payment-discount:", isCheckTypeDiscount);
    setIsShowDiscount(true);
    console.log("giá trị của dismount:", dismount);
  };

  // -----------------------create bill-----------------------
  const getPay = () => {
    console.log("giá trị orderDto:", orderDto);
    console.log();
    if (MoneyOfCustomer < givedMoney) {
      getNews("Tiền khách đưa nhỏ hơn tiền khách trả");
    } else {
      if (productOption.length == 0) {
        getNews("chưa có sản phẩm nào");
      } else {
        console.log("orderDto,", orderDto);
        callApi("orders", "POST", orderDto, jwt).then((response) => {
          if (response.status !== 200) {
            return;
          }
          response.json().then((data) => {
            console.log(data.content);
            setCustomer(data.content);
            setProductOption([]);
            getNews("Tạo hóa đơn thành công");
          });
        });
      }
    }
  };

  const isShowInforCustomer = () => {
    setInforCustomer(false);
  };
  return (
    <div className="sale-payment">
      {/* <InformNew /> */}
      <div className="customer">
        {isShowInfor ? (
          <div className="show-customer">
            <div className="show-1">
              <span>
                <i class="fas fa-user-alt"></i>
              </span>
              <div className="show-1-1">
                <p>{inforCustomer.name}</p>
                <p>{inforCustomer.phone}</p>
              </div>
            </div>
            <span>
              {" "}
              <i class="fas fa-times" onClick={isShowInforCustomer}></i>
            </span>
          </div>
        ) : (
          ""
        )}
        {!isShowInfor ? (
          <div className="customer-infor">
            <spa>
              <i className="fas fa-search i-1" />
            </spa>
            <input
              type="text"
              placeholder="Thêm khách hàng vào đơn"
              onChange={(e) => searchCustomer(e)}
              onClick={getCustomer}
            />
          </div>
        ) : (
          ""
        )}
        {isShowCustomer ? (
          <div className="search-customer">
            {listCustomer.length != 0 ? (
              <List
                data={listCustomer}
                render={(item, index) => (
                  <SaleSearchCustomer
                    setInforBtn={setInforBtn}
                    setIsShowCustomer={setIsShowCustomer}
                    setShowInfor={setInforCustomer}
                    item={item}
                  />
                )}
              />
            ) : (
              <NewNotSearch />
            )}
          </div>
        ) : (
          ""
        )}

        <span onClick={addCustomer}>
          <i className="fas fa-plus" />
        </span>
      </div>
      <div className="payment-1">
        <div className="payment-1-1 p-1-1">
          <span>Tổng tiền</span>
          <span>{FormatMoney(total)}</span>
        </div>
        <div className="payment-1-2 p-1-1">
          <span>Chiết khấu</span>
          <input
            type="text"
            value={FormatMoney(parseInt(discountConverter))}
            placeholder=""
            onClick={getDismount}
          />
        </div>
        <div className="payment-1-3 p-1-1">
          <span>Khách phải trả</span>
          <span> {FormatMoney(givedMoney)}</span>
        </div>
        <div className="payment-1-4 p-1-1">
          <span> Tiền khách đưa</span>
          <input
            type="text"
            value={FormatMoney(new Number(MoneyOfCustomer))}
            onChange={getMoneyOfCustomer}
          />
        </div>
        <div className="payment-1-5 p-1-1">
          <span>Tiền thừa</span>
          <span style={{ color: lessMoney < 0 ? "red" : "blue" }}>
            {FormatMoney(lessMoney)}
          </span>
        </div>
      </div>
      <div className="payment-2" onClick={getPay}>
        <div className="btn-payment">
          <span>Thanh Toán</span>
        </div>
      </div>
      <SaleAddCustomer
        setInforBtn={setInforBtn}
        isShow={isShow}
        setIsShow={setIsShow}
        setInforCustomer = {setInforCustomer}
      />
      <SaleDiscount
        total={total}
        setDismount={setDismount}
        isShowDiscount={isShowDiscount}
        setIsShowDiscount={setIsShowDiscount}
        isCheckTypeDiscount={isCheckTypeDiscount}
        setTypeDiscount={setTypeDiscount}
        dismount={dismount}
      />
    </div>
  );
};

export default SalePayment;
