
import React, { useEffect, useState } from "react";
import {
    CButton,
    CCardBody,
    CCol,
    CInput,
    CInputGroup,
    CFormGroup,
    CForm,
    CInputGroupPrepend,
    CRow,
    CPagination,
    CCard
  } from "@coreui/react";

import axios from "axios";
function StatisticalProduct() {
    const [product,setProduct] = useState([]);
    const [start,setStart] =useState("2021-07-01")
    const [to,setTo] =useState("2021-07-06")
    const [pageNo, setPageNo] = useState(1);
    const [pageSize,setPageSize]= useState(10);
    const [total,setTotal] = useState(1);
    

    const config = {
        method: 'get',
        url: `http://localhost:8080/api/v1/statisticals?start=${start}&to=${to}&pageNo=${pageNo}&pageSize=${pageSize}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        }
    };

    const config1 = {
        method: 'get',
        url: `http://localhost:8080/api/v1/statistical?start=${start}&to=${to}`,
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json'
        }
    };
    const changeStart = (event) => {
        setStart(event.target.value)
console.log("111111111111")
      };
      console.log("bbbbbbbbbbb",start)
      const changeTo= (event) => {
        setTo(event.target.value)
       
      };
    useEffect(() => {
         axios(config).then((item) => {
            setProduct(item.data);
            console.log("aaaaaaaaaaaaaaaaa",item.data)
          
          });
      },[start,to,pageNo,pageSize]);

      useEffect(() => {
        axios(config1).then((item) => {
           setProduct(item.data);
           console.log("aaaaaaaaaaaaaaaaa",item.data)
           setTotal(Math.ceil(item.data.length/pageSize));
         });
     },[start,to]);
      
        return (

            <div>
                  <CRow>
          <CCol xs="12" className="px-0" sm="7">
            <CRow>
              <CCol xs="4">
              <CFormGroup >
              <CInput type="date"  className="form-control-warning" onChange={changeStart} /> 

            </CFormGroup>

              </CCol>
              <CCol xs="4">
              <CInput type="date"  className="form-control-warning" onChange={changeTo} />
              </CCol>
            </CRow>
         
          </CCol>   
      
        </CRow>
            
     <div className="row">
          <table className=" table" >
              
            <thead>
              <tr>
                <th>Mã</th>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Loại sản phẩm</th>
                <th>Đã bán</th>
               
              </tr>
            </thead>
            <tbody >
            {product.map((item) => (
              
              <tr key={item[0]} style={{ cursor: "pointer" }} className="lits">
          
                <td>
                 {item[0]}
               </td>
               <td><img src={`${process.env.PUBLIC_URL}/image/${item[1]}`} width="40px" height="40px" /> </td>
               <td>{item[2]}</td>
               <td>{item[3]}</td>
               <td>{item[4]}</td>
               <td>
               </td>

             </tr>

           ))}
        
            </tbody>
          </table>
          
          <CPagination
            activePage={pageNo}
            pages={total}
            onActivePageChange={setPageNo}
          />
        </div>
            </div>
        );
    
}



export default StatisticalProduct;



