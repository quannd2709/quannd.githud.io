import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
  CRow,
  CTextarea,
  CButton,
  CInputFile
 
} from "@coreui/react";
import swal from 'sweetalert';
import Swal from 'sweetalert2'
import { DocsLink } from 'src/reusable'
import { useEffect, useState } from "react";
import {
  getCategoryByID,
  UpdateCategory,
  getSupplier,
  getCate,
  getBrand,
  getColor,
  getSize,
  DeleteCategory,
  getCategory,
  ApiQuan,
} from "src/apis/Product";
import Select from "react-select";
import axios from "axios";
import { values } from "regenerator-runtime";

function Update(props) {
  const [id] = useState(props.match.params.id);
  const [message,setMesage] =useState({
    code : "",
    name : "",
    numberProduct:"",
    price:"",

  });
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [brandID, setBrandID] = useState("");
  const [numberProduct, setNumber] = useState("");
  const [sellProduct,setSell] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [createBy, setCreateBy] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [category, setCategory] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [brand, setBrand] = useState([]);
  const [filterCategory, setFilterOptionCategory] = useState([]);
  const [filterSupplier, setFilterOptionSupplier] = useState([]);
  const [filterOptionColor, setFilterOptionColor] = useState([]);
  const [filterOptionBrand, setFilterOptionBrand] = useState([]);
  const [filterOptionSize, setFilterOptionSize] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [supplierName, setSupplierName] = useState("");
  const [brandName, setBrandName] = useState("");
  const [product, setProduct] = useState([]);


  useEffect(() => {
    ApiQuan('get',`suppliers`).then((res) => {
      setSupplier(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    ApiQuan('get',`categories`).then((res) => {
      setCategory(res.data);
      console.log(res.data);
    });
  }, []);


  useEffect(() => {
    ApiQuan('get',`brands`).then((res) => {
      setBrand(res.data);
      console.log(res.data);
    });
  }, []);

  const cancel = () => {
    props.history.push("/category");
  };

  useEffect(() => {
    ApiQuan('get',`products`).then((item) => {
      setProduct(item.data);
      console.log(item);
    });
  }, []);
  
  const deleteCategory = (id) => {
    swal({
      title: "ba??n co?? mu????n xo??a sa??n ph????m?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        ApiQuan('delete',`products/${id}`).then(() => {
          setProduct(product.filter((item) => item.id !== id))
          props.history.push("/category");
        });
       
        swal("xo??a tha??nh c??ng!", {
          icon: "success",
        });
      } else {
        swal("sa??n ph????m ch??a ????????c xo??a!");
      }
    });


  };

  useEffect(() => {
    category.map((item) => {
      setFilterOptionCategory((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [category]);

  useEffect(() => {
    supplier.map((item) => {
      setFilterOptionSupplier((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [supplier]);




  useEffect(() => {
    brand.map((item) => {
      setFilterOptionBrand((filterOptions) => [
        ...filterOptions,
        { value: item.id, label: item.name },
      ]);
    });
  }, [brand]);

  useEffect(() => {
    // getCategoryByID(id).then((res) => {
      ApiQuan('get',`products/${id}`).then((res) => {
      setCode(res.data.code);
      setName(res.data.name);
      setBrandName(res.data.brandID);
      setNumber(res.data.numberProduct);
      setSell(res.data.sellProduct)
      setImage(res.data.image);
      setSupplierName(res.data.supplierId);
      setDescription(res.data.description);
      setColor(res.data.color);
      setSize(res.data.size);
      setPrice(res.data.price);
      setCategoryName(res.data.categoryId);
      setCreatedDate(res.data.createdDate);
    });
  }, []);
  const updateCategory = (e) => {
    e.preventDefault();
    let category = {
      code: code,
      name: name,
      brandName: brandName,
      numberProduct: numberProduct,
      sellProduct: sellProduct,
      image: image,
      categoryName: categoryName,
      description: description,
      color: color,
      size: size,
      price: price,
      supplierName: supplierName,
      createdDate: createdDate,
    };

    var data = JSON.stringify(category)
    Swal.fire({
      title: 'ba??n co?? mu????n thay ??????i sa??n ph????m?',
      showCancelButton: true,
     confirmButtonColor:"#0089ff",
      confirmButtonText: `l??u`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        // UpdateCategory(category, id).then((res) => {
          ApiQuan('put',`products/${id}`,data).then((res)=>{
          // props.history.push("/category");
          console.log(category);
        }) .catch(error=>{
          console.log("aaaaaaaaaaaaaaaa")
          if(error.response.data.mess == " error : code trung "){
            Swal.fire({
              icon: 'error',
              title: 'code tru??ng',
              showConfirmButton: false,
              timer: 1500
            })
          };
          if(error.response.data.mess == " error : ma ko dc trong "){
            Swal.fire({
              icon: 'error',
              title: 't??n kh??ng ????????c ?????? tr????ng',
              showConfirmButton: false,
              timer: 1500
            })
          }

        });
        Swal.fire({title: '??a?? l??u',  confirmButtonColor:"#0089ff"})
      } else if (result.isDenied) {
        Swal.fire('Sa??n ph????m v????n ch??a ????????c thay ??????i', '', '#0089ff')
      }
    })
    
    
  };
  
  function format2(n) {
    if (n != "") {
        return n.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    }
}

  const changeCode = (event) => {
    setCode(event.target.value);
  };
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeBrand = (event) => {
    setBrandName(event.label);
  };
  const changeNumber = (event) => {
    setNumber(event.target.value);
  };

  const changeSell = (event) => {
    setSell(event.target.value);
  };
  // const changeImage = (event) => {
  //   setImage(event.target.value);
  // };
  const handleImage = (e) => {
    var axios = require("axios");
    var FormData = require("form-data");
    var fs = require("fs");
    var data = new FormData();
    console.log("Image: ", e.target.files[0]);
    data.append("file", e.target.files[0]);

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
    setProduct({ ...product, [e.target.name]: image });
  };


  const changeSupplier = (event) => {
    setSupplierName(event.label);
  };
  const changeDescription = (event) => {
    setDescription(event.target.value);
  };
  const changeColor = (event) => {
    setColor(event.target.value);
  };
  const changeSize = (event) => {
    setSize(event.target.value);
  };
  const changePrice = (event) => {
    setPrice(event.target.value);
  };
  const changeCate = (event) => {
    setCategoryName(event.label);
    console.log(event);
  };
  const changeCreateBy = (event) => {
    setCreatedDate(event.target.value);
  };

  const changeonBlur = (event)=>{
 if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        code:" * Ma?? kh??ng ????????c ?????? tr????ng"
      })
    }
    else{
      setMesage({
        code:""
      })
    }
  }
  
  const changeonBlurName = (event)=>{
 if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        name:" T??n sa??n ph????m kh??ng ????????c ?????? tr????ng"
      })
    }
    else{
      setMesage({
        name:""
      })
    }
  }
  
  const changeonBlurNumber = (event)=>{
    var a = new RegExp("^[0-9]*$")
    
    if((a.test(event.target.value)==false)){
      setMesage({
        numberProduct:"S???? l??????ng kh??ng ????????c nh????p ki?? t????"
      })
    }
    else if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        numberProduct:" S???? l??????ng sa??n ph????m kh??ng ????????c ?????? tr????ng"
      })
    }
    else{
      setMesage({
        numberProduct:""
      })
    }
  }
  const addCategory = () => {
    props.history.push("/product/add-category");
  };

  const addSupplier = () => {
    props.history.push("/add-supplier");
  };


  
  const changeonBlurPrice = (event)=>{
    // var a = new RegExp("^[0-9]*$")
    
    // if((a.test(event.target.value)==false)){
    //   setMesage({
    //     price:"Gia?? kh??ng ????????c nh????p ki?? t????"
    //   })
    // }
    // else 
    if( /((\r\n|\n|\r)$)|(^(\r\n|\n|\r))|^\s*$/.test(event.target.value)!=false){
      setMesage({
        price:" Gia?? sa??n ph????m kh??ng ????????c ?????? tr????ng"
      })
    }
    else{
      setMesage({
        price:""
      })
    }
  }


  return (
    <div>
      <div>
        <CRow>
        <CCol xs="12" sm="7">
        <h1>{name}</h1>
         </CCol>
         <CCol className="px-0 d-flex justify-content-end" xs="12" sm="5" >
         <CCol xs="6"  sm="4" >
           <CButton style={{background:"#0089ff"}} onClick={addCategory}>
            Th??m sa??n ph????m
            </CButton>
           </CCol>
         </CCol>
        </CRow>
        <CRow>     
      <CCol  xs="12" sm="7">
      <CCard>
       
              <CCardHeader><h2>Sa??n ph????m</h2></CCardHeader>
              <CCardBody>
                <CFormGroup>
                  <CLabel htmlFor="company">Ma??</CLabel>
                  <CInput name="code" onChange={changeCode} value={code} onBlur={changeonBlur}/>
                  <span style={{color:"red"}}> {message.code}</span>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">T??n <span style={{color:"red"}}>*</span></CLabel>
                  <CInput
                    name="name"
                    placeholder="Nhap ten"
                    onChange={changeName}
                    value={name}
                    onBlur={changeonBlurName}
                  />
                   <span style={{color:"red"}}> {message.name}</span>
                </CFormGroup>
                <CFormGroup row className="my-0">
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="city">S???? l??????ng</CLabel>
                      <CInput
                         name="price"
                         placeholder="DE1234567890"
                         onChange={changeNumber}
                         value={numberProduct}
                         onBlur={changeonBlurNumber}
                      />
                       <span style={{color:"red"}}> {message.numberProduct}</span>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">Gia??</CLabel>
                      <CInput
                    name="price"
                    placeholder="0"
                    disabled
                    onChange={changePrice}
                    value={format2(price)}
                    onBlur={changeonBlurPrice}
                  />
                   <span style={{color:"red"}}> {message.price}</span>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="4">
                    <CFormGroup>
                      <CLabel htmlFor="postal-code">??a?? ba??n</CLabel>
                      <CInput
                    name="sellproduct"
                    disabled
                    value={sellProduct}
   
                  />
                  
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">M?? ta??</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="3"
                    placeholder="m?? ta??"
                    disabled
                    onChange={changeDescription}
                  />
                </CFormGroup>
              </CCardBody>
            </CCard>
        <CCard>
          <CCardHeader><h2>Thu????c ti??nh</h2></CCardHeader>
          <CCardBody>
            <CFormGroup row className="my-0">
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="city">Ma??u s????c</CLabel>
                  <CInput
                    name="color"
                    placeholder="nh????p ma??u s????c"
                    onChange={changeColor}
                    value={color}
                   
                  />
                </CFormGroup>
              </CCol>
              <CCol xs="6">
                <CFormGroup>
                  <CLabel htmlFor="postal-code">Ki??ch c????</CLabel>
                  <CInput
                    name="size"
                    placeholder="nh????p ki??ch c????"
                    onChange={changeSize}
                    value={size}
                   
                  />
                </CFormGroup>
              </CCol>
            </CFormGroup>
          </CCardBody>
        </CCard>
    
      </CCol>
         <CCol xs="12" sm="5">   
            <CCard>
              <CCardHeader><h2>Ph??n loa??i</h2></CCardHeader>
                    <CCol xs="12"> <CFormGroup>
                  <CLabel htmlFor="company">Nha??n hi????u</CLabel>
                  <Select placeholder={brandName} options={filterOptionBrand} onChange={changeBrand} />
                </CFormGroup>
                <CFormGroup>
                  <CLabel htmlFor="vat">Loa??i</CLabel>
                  <Select
                  placeholder={categoryName}
                    options={filterCategory}
                    onChange={changeCate}
                  />
                </CFormGroup>
                    
                <CFormGroup>
                  <CLabel htmlFor="vat">Nha?? cung c????p</CLabel>
                  <Select placeholder={supplierName} 
                  options={filterSupplier} onChange={changeSupplier} />
                </CFormGroup>
                </CCol>
            </CCard>
            <CCard className=" p-4">

            <CInputFile
                          id="link"
                          name="link"
                          onChange={handleImage}
                          accept="image/png, image/jpeg"
                        />
               <img src={`${process.env.PUBLIC_URL}/image/${image}`}/>    
            </CCard>
        </CCol>
    
        </CRow>
        <CRow>
         <CCol xs="12" sm="7">
           <CRow>
           <CCol xs="6"  sm="3" >
           <CButton block color="secondary" onClick={cancel}>
            Quay la??i
            </CButton>
           </CCol>
           <CCol xs="6"  sm="3">
           <CButton style={{background:"#0089ff"}} onClick={updateCategory}>
            C????p nh????t
            </CButton>
           </CCol>
           </CRow>
         </CCol>
         <CCol className="px-0 d-flex justify-content-end" xs="12" sm="5" >
         <CCol xs="6"  sm="3" >
           <CButton block color="danger" onClick={() => deleteCategory(id)}>
            Xo??a
            </CButton>
           </CCol>
         </CCol>
       </CRow>
      </div>
    </div>
  );
}
export default Update;
