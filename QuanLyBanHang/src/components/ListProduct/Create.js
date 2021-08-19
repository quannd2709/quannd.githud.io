import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CRow,
  CTextarea,
  CInputFile,
  CValidFeedback,
  CButton,
  CImg,
} from "@coreui/react";
import "core-js/es/symbol";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import {
  getBrand,
  getCate,
  getSupplier,
  createProduct,
  ApiQuan,
} from "src/apis/Product";
import Select from "react-select";
import axios from "axios";
import ApiCustomer from "src/apis/ApiCustomer";
import { number } from "prop-types";
import CIcon from "@coreui/icons-react";
import AddBrand from "./AddBrand";
import Upda from "./UpdateBrand";
import Update from "./Update";
import UpdateBrand from "./UpdateBrand";
import AddSupplier from "./AddSupplier";
import AddCategory from "./AddCategory";

function Create(props) {
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [message, setMesage] = useState({
    code: "",
    name: "",
    numberProduct: "",
    price: "",
  });
  const [brandName, setBrandName] = useState("");
  const [numberProduct, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [picture, setPicture] = useState("");
  const [checkImage, setCheckImage] = useState({ display: "none" });
  const [price, setPrice] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColorId] = useState("");
  const [size, setSizeId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [filterOptions, setFilterOptions] = useState([]);
  const [filterOptionCategory, setFilterOptionCategory] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);
  const [products, setProdut] = useState([]);
  const [a, seta] = useState([]);
  // const [id, setID] = useState([]);
  const [isShowBrand, setBrands] = useState(false);
  const [isShowSupplier, setSuppliers] = useState(false);
  const [isShowCategory, setCategoryies] = useState(false);
  const [isShowUpdateBrand, setBrandUpdate] = useState(false);

  useEffect(() => {
    ApiQuan(`get`, `products1`).then((item) => {
      seta(item.data);
      console.log("bbbb", item.data);
    });
    // products.map(res=>{
    //  console.log("yyyyy",res.name)
    // })
  }, []);

  const saveProduct = (e) => {
    console.log("aaaaa", a[0].id);
    e.preventDefault();
    let product = {
      code: code,
      name: name,
      brandName: brandName,
      numberProduct: numberProduct,
      image: image,
      price: price,
      description: description,
      color: color,
      size: size,
      categoryName: categoryName,
      createdDate: createdDate,
      supplierName: supplierName,
    };
    var data1 = JSON.stringify(product);
    console.log(product);
    ApiQuan("post", `products`, data1)
      .then((item) => {
        ApiQuan(`get`, `products1`).then((item) => {
          setProdut(item.data);
          console.log("bbbb", item.data);
        });
        Swal.fire({
          icon: "success",
          title: "đã đạo thêm sản phẩm",
          showConfirmButton: false,
          timer: 1500,
        });

        props.history.push(`/product/update-category/${a[0].id + 1}`);
      })
      .catch((error) => {
        console.log("aaaaaaaaaaaaaaaa");
        if (error.response.data.mess == " error : code trung ") {
          console.log("ccc");
          Swal.fire({
            icon: "error",
            title: "mã trùng",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (error.response.data.mess == " error : ma ko dc trong ") {
          console.log("ttttt");
          Swal.fire({
            icon: "error",
            title: "tên không được chống",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (error.response.data.mess == " error : ko dc trong ") {
          console.log("ttttt");
          Swal.fire({
            icon: "error",
            title: "nhà cung cấp không được chống",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        // if (error.response.data.mess == " error : so luong ko duoc chong ") {
        //   Swal.fire({
        //     icon: "error",
        //     title: "số lượng không được chống",
        //     showConfirmButton: false,
        //     timer: 1500,
        //   });
        // }
        if (error.response.data.mess == " error : loai ko dc trong ") {
          console.log("lllll");
          Swal.fire({
            icon: "error",
            title: "loại không được chống",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (error.response.data.mess == " error : nhan hieu ko dc trong ") {
          console.log("nnnnn");
          Swal.fire({
            icon: "error",
            title: "nhãn hiệu không được chống",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  useEffect(() => {
    ApiQuan("get", `suppliers`).then((res) => {
      setSupplier(res.data);
      console.log(res.data);
    });
  }, [isShowBrand]);

  useEffect(() => {
    ApiQuan("get", `categories`).then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, [isShowCategory]);

  useEffect(() => {
    ApiQuan("get", `brands`).then((res) => {
      setBrand(res.data);
      console.log(res.data);
    });
  }, [isShowSupplier]);

  useEffect(() => {
    setFilterOptions([]);
    supplier.map((item) => {
      setFilterOptions((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [supplier]);

  useEffect(() => {
    setFilterOptionCategory([]);
    category.map((item) => {
      setFilterOptionCategory((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [category]);

  useEffect(() => {
    setFilterOptionBrand([]);
    brand.map((item) => {
      setFilterOptionBrand((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [brand]);

  const cancel = () => {
    props.history.push("/category");
  };

  const changeonBlur = (event) => {
    if (
      /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value) != false
    ) {
      setMesage({
        code: " * Mã không được để trống",
      });
    } else {
      setMesage({
        code: "",
      });
    }
  };

  const changeonBlurName = (event) => {
    if (
      /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value) != false
    ) {
      setMesage({
        name: " Tên sản phẩm không được để trống",
      });
    } else {
      setMesage({
        name: "",
      });
    }
  };

  const changeonBlurNumber = (event) => {
    var a = new RegExp("^[0-9]*$");

    if (a.test(event.target.value) == false) {
      setMesage({
        numberProduct: "Số lượng không được nhập kí tự",
      });
    } else if (
      /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value) != false
    ) {
      setMesage({
        numberProduct: " Số lượng sản phẩm không được để trống",
      });
    } else {
      setMesage({
        numberProduct: "",
      });
    }
  };

  const changeonBlurPrice = (event) => {
    var a = new RegExp("^[0-9]*$");

    if (a.test(event.target.value) == false) {
      setMesage({
        price: "Số lượng không được nhập kí tự",
      });
    } else if (
      /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value) != false
    ) {
      setMesage({
        price: " Số lượng sản phẩm không được để trống",
      });
    } else {
      setMesage({
        price: "",
      });
    }
  };

  const changeCode = (event) => {
    setCode(event.target.value);
  };

  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrandName(event.label);
    console.log(event);
  };

  const changeNumber = (event) => {
    setNumber(event.target.value);
  };
  const changeImage = (event) => {
    setImage(event.target.value);
  };

  const handleImage = (e) => {
    var axios = require("axios");
    var FormData = require("form-data");
    var fs = require("fs");
    var data = new FormData();
    console.log("Image: ", e.target.files[0]);
    data.append("file", e.target.files[0]);
    if (e.target.files[0].name !== "") {
      setCheckImage({ display: "inline" });
    }

    var config = {
      method: "post",
      url: "http://localhost:8080/api/v1/uploadFile",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
        setImage(e.target.files[0].name);
      });

    let image = `image/${e.target.files[0].name}`;
    setProdut({ ...products, [e.target.name]: image });
  };

  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColorId(event.target.value);
  };
  const changeSize = (event) => {
    setSizeId(event.target.value);
  };
  const changeCate = (event) => {
    setCategoryName(event.label);
  };
  const changeSuppliers = (event) => {
    setSupplierName(event.label);
  };
  const addBrand = () => {
    setBrands(true);
  };
  const addSupplier = () => {
    setSuppliers(true);
  };
  const addCategories = () => {
    setCategoryies(true);
  };

  const updateBrand = () => {
    setBrandUpdate(true);
  };

  return (
    <div>
      <div>
        <CRow>
          <CCol xs="12" sm="7">
            <CCard>
              <CCardHeader>
                <h2>Sản phẩm</h2>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Mã</CLabel>
                  <CInput
                    name="code"
                    placeholder="Nhập Mã"
                    onChange={changeCode}
                    // onBlur={changeonBlur}
                  />
                  <span style={{ color: "red" }}> {message.code}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">
                    Tên <span style={{ color: "red" }}>*</span>
                  </CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhập tên sản phẩm"
                    onChange={changeName}
                    onBlur={changeonBlurName}
                  />
                  <span style={{ color: "red" }}> {message.name}</span>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="city">
                        Số lượng <span style={{ color: "red" }}>*</span>
                      </CLabel>
                      <CInput
                        type="number"
                        id="vat"
                        placeholder="Số lượng"
                        onChange={changeNumber}
                        onBlur={changeonBlurNumber}
                      />
                      <span style={{ color: "red" }}>
                        {" "}
                        {message.numberProduct}
                      </span>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">
                        Giá <span style={{ color: "red" }}>*</span>
                      </CLabel>
                      <CInput
                        id="vat"
                        placeholder="nhập giá"
                        onChange={changePrice}
                        onBlur={changeonBlurPrice}
                      />
                      <span style={{ color: "red" }}> {message.price}</span>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Mô tả</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="3"
                    placeholder="mô tả"
                    onChange={changeDescription}
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
            <CCard>
              <CCardHeader>
                <h2>Thuộc tính</h2>
              </CCardHeader>
              <CCardBody>
                <CFormGroup row className="my-0">
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="city">Màu sắc</CLabel>
                      <CInput
                        name="color"
                        placeholder="Nhập tên màu sắc"
                        onChange={changeColor}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Kích cỡ</CLabel>
                      <CInput
                        name="color"
                        placeholder="Nhập kích cỡ"
                        onChange={changeSize}
                      />
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs="12" sm="5">
            <CCard>
              <CCardHeader>
                <h2>Phân loại</h2>
              </CCardHeader>
              <CCardBody>
                <CFormGroup row className="my-0">
                  <CCol xs="10">
                    <CFormGroup>
                      <CLabel htmlFor="company">
                        Nhãn hiệu <span style={{ color: "red" }}>*</span>
                      </CLabel>
                      <Select
                        className=" mt-2 "
                        options={filterOptionBrand}
                        onChange={changeBrand}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="2">
                    <CFormGroup>
                      <i
                        className="fas fa-plus mt-5 "
                        style={{ cursor: "pointer" }}
                        onClick={addSupplier}
                      ></i>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="10">
                    <CFormGroup>
                      <CLabel htmlFor="vat">
                        Loại <span style={{ color: "red" }}>*</span>
                      </CLabel>
                      <Select
                        className=" mt-2 "
                        options={filterOptionCategory}
                        onChange={changeCate}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="2">
                    <CFormGroup>
                      <i
                        class="fas fa-plus mt-5"
                        style={{ cursor: "pointer" }}
                        onClick={addCategories}
                      ></i>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="10">
                    <CFormGroup>
                      <CLabel htmlFor="company">
                        Nhà cung cấp <span style={{ color: "red" }}>*</span>
                      </CLabel>
                      <Select
                        className=" mt-2 "
                        options={filterOptions}
                        onChange={changeSuppliers}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="2">
                    <CFormGroup>
                      <i
                        class="fas fa-plus mt-5"
                        style={{ cursor: "pointer" }}
                        onClick={addBrand}
                      ></i>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CCardBody>
            </CCard>

            <CCard>
              <CCardHeader>
                <h2>Ảnh</h2>
              </CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CFormGroup>
                  
                        <CInputFile
                          className=" px-4"
                          onChange={handleImage}
                          accept="image/png, image/jpeg"
                        />
                        <img
                          className=" px-4"
                          width="100%"
                          style={checkImage}
                          src={`${process.env.PUBLIC_URL}/image/${image}`}
                        />
                    
                  </CFormGroup>
                </CFormGroup>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow>
          <CCol xs="12" sm="7">
            <CRow>
              <CCol xs="6" sm="2">
                <CButton block color="secondary" onClick={cancel}>
                  Quay lại
                </CButton>
              </CCol>
              <CCol xs="6" sm="3">
                <CButton
                  style={{ background: "#0089ff" }}
                  onClick={saveProduct}
                >
                  Lưu
                </CButton>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </div>
      <AddBrand isShowBrand={isShowBrand} setBrand={setBrands} />
      {/* <UpdateBrand isShowUpdateBrand={isShowUpdateBrand} setBrandUpdate={setBrandUpdate}/> */}

      <AddCategory
        isShowCategory={isShowCategory}
        setCategoryies={setCategoryies}
      />
      <AddSupplier
        isShowSupplier={isShowSupplier}
        setSuppliers={setSuppliers}
      />
    </div>
  );
}
export default Create;
