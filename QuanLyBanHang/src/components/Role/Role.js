
import React from 'react'
import { useState, useEffect } from 'react';
import { callApi } from 'src/apis/Apis';
import RoleItem from './RoleItem/RoleItem';
import {Link, useHistory} from 'react-router-dom';
import {
  CPagination,
} from '@coreui/react'

const Role = () => {

  let history = useHistory();

  const [roles, setRoles] = useState([]);

  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);

  var URL = `roles/?page=${currentPage - 1}`;
  useEffect(() => {
    callApi('get', URL)
      .then(response => { 
        setRoles(response.data.content);
        setTotalPages(response.data.totalPages);
        console.log('data role ', response); })
      .catch(error => {

        if(error.response.data.status == 403){
          history.push("/error");
        }
        
      })
  }, [currentPage]);

  return (
    <div>
      <div style = {{ display: "flex"}}>
        <div >
          <h3>Danh sách vai trò</h3>
        </div>
          <div style = {{ marginLeft: "783px"}}>
          <Link to= '/settings/roles/new-role'>
        <button
          className="btn btn-success"
          style={{ marginLeft: "10px", backgroundColor: "#0089ff" }}     
        >
          Thêm mới vai trò
        </button>
      </Link>
      <button
          className="btn btn-secondary"
          style={{ marginLeft: "10px", backgroundColor: "rgb(239 243 248)" }}
        >
          Trợ giúp
        </button>
          </div>
      </div>
    <hr />

       {/* Chi tiết vai trò */}
       <div className="row" style={{ marginTop: "15px" }}>

<div className="col-lg-4">
  <div style={{ width: "360px" }}>
    <h5 style={{ marginTop: "12px" }}>Quản lý vai trò và phân quyền</h5>
    <p></p>
    <p>Hỗ trợ thêm mới, phân quyền và quản lý sửa các vai trò của cửa hàng</p>
  </div>
</div>

<div className="col-lg-8">
  <div style={{ padding: "13px 13px 13px 20px" }}>
    <div className="row">
    <table className=" table table-striped table-bordered" style = {{backgroundColor: "white"}}>
        <thead>
          <tr>
            <th>Vai trò</th>
            <th>Ghi chú</th>
            <th>Ngày tạo</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((item) => {
            return (
              <RoleItem role={item}></RoleItem>
            )
          })}
        </tbody>
      </table>

      <CPagination
        activePage={currentPage}
        pages={totalPages}
        onActivePageChange={setCurrentPage}
      />
      <br></br>

    </div>
  </div>
</div>
</div>
{/* End - Chi tiết vai trò */}


    </div>
  )
}

export default Role


