import React, { useEffect, useState } from "react";

import {
  getCategory,
  DeleteCategory,
  Search,
  getCate,
  Filter,
  getSupplier,
} from "../../apis/Product";
import "../../apis/css.scss";
import {
  CButton,
  CCol,
  CInput,
  CFormGroup,
  CInputGroupPrepend,
  CInputGroup,
  CPagination,
  CRow,
} from "@coreui/react";
import { DocsLink } from "src/reusable";

import Select from "react-select";
import CIcon from "@coreui/icons-react";
import axios from "axios";

function ListSupplier(props) {
  const id = useState(props.match.params.id);
  const [search, setSearch] = useState("");
  const [supplier, setSupplier] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(1);

  const config = {
    method: 'get',
    url: `http://localhost:8080/api/v1/supplier_search?keyword=${search}&pageNo=${pageNo}&pageSize=${pageSize}`,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Content-Type': 'application/json'
    }
};

const config1 = {
  method: 'get',
  url: `http://localhost:8080/api/v1/supplierss?keyword=${search}`,
  headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
  }
};
  useEffect(() => {
    axios(config)
      .then((item) => {
        setSupplier(item.data);
        console.log(item);
      });
  }, [search, pageNo, pageSize]);

  useEffect(() => {
    axios(config1)
      .then((item) => {
        setTotal(Math.ceil(item.data.length / pageSize));
      });
  }, [search]);

  const addCategory = () => {
    props.history.push("/add-supplier");
  };

  const updateSupplier = (id) => {
    props.history.push(`/update-supplier/${id}`);
  };
  const cancel = (e) => {
    e.preventDefault();
    setSearch("");
    setPageNo(1);
  };


  //   const SearchByName = (e) => {
  //     e.preventDefault();
  //  Search(search).then((item) => {
  //       setSupplier(item.data);

  //     });
  //   };

  const changeSearch = (event) => {
    setSearch(event.target.value);
    setPageNo(1)
  };

  return (
    <>
      <div>
        {/* <CRow>
          <CFormGroup row>
            <CCol xs="12" sm="7">
            <CInput
                    name="name"
                    placeholder="tìm kiếm mã, số điện thoại"
                    onChange={changeSearch}
                  />
            </CCol>
            <CCol xs="12" sm="3">
            <CButton block color="success" onClick={addCategory}>
                Tạo
              </CButton>
            </CCol>
          </CFormGroup>
        </CRow> */}
        {/* <CRow>
          <CCol xs="7" sm="7">
            <CFormGroup row>
              <CInput
                name="name"
                placeholder="Tìm kiếm mã, số điện thoại,địa chỉ"
                onChange={changeSearch}
                value={search}
              />
            </CFormGroup>
          </CCol>
        </CRow> */}
        {/* <CRow>
          <CCol xs="1">
          <CFormGroup row>
          <CButton block color="success" onClick={addCategory}>
              Tạo
            </CButton>
          </CFormGroup>
         
          
          </CCol>
        </CRow> */}
        <CRow>
          <CCol xs="12" className="px-0" sm="7">
            <CRow>
              <CCol xs="8">
              <CFormGroup >
              <CInput
                name="name"
                placeholder="Tìm kiếm mã, số điện thoại,địa chỉ"
                onChange={changeSearch}
                value={search}
              /> 

            </CFormGroup>

              </CCol>
              {/* <CCol xs="4">
              <Select placeholder="Loại danh mục"  options={filterCategory} onChange={changeFilter} />  
              </CCol> */}
            </CRow>
         
          </CCol>   
          <CCol className="px-0 d-flex justify-content-end" xs="12" sm="5">
          <CCol xs="6"  sm="4" >
          <CButton onClick={addCategory} style={{background:"#0089ff"}}>
           Tạo sản phẩm
            </CButton>
          </CCol>
          </CCol>
        </CRow>

        <div className="row">
          <table className=" table table-striped table-bordered">
            <thead>
              <tr>
                <th>Mã</th>
                <th>Tên thương hiệu</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {supplier.map((item) => (
                <tr
                  key={item.id}
                  onClick={() => updateSupplier(item.id)}
                  className="lits"
                >
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.createdDate}</td>
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
    </>
  );
}

export default ListSupplier;
