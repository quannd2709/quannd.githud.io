
import React from 'react'
import { useState, useEffect } from 'react';
import StaffItem from './StaffItem/StaffItem';
import { Link, useHistory } from 'react-router-dom';
import {
  CPagination,
} from '@coreui/react'
import { callApi } from 'src/apis/Apis';


const Staff = () => {

  let history = useHistory();

  console.log('anh nam 1');
  const [clickSearch, setClickSearch] = useState(0);

  const [keySearch, setKeySearch] = useState("");

  const getKeySearch = (e) => {
      const value = e.target.value;
      setKeySearch(value);
      console.log("keySearch ", keySearch);
  }

const searchStaffByName = () => {
    setClickSearch(clickSearch + 1);
    setCurrentPage(1);
  }

  const [staffs, setStaffs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0);

  var URL = ""
  if(clickSearch > 0) {
    URL = `staffs/search?name=${keySearch}&page=${currentPage - 1}`
  }else {
    URL = `staffs/?page=${currentPage - 1}`
  }


  useEffect(() => {
    callApi('get', URL)
      .then(response => {
        setStaffs(response.data.content);
        setTotalPages(response.data.totalPages);
        console.log("anh nam 2")
      })
      .catch(error =>  {
          console.log('error Bình kiểm', error.response.data.status);
          if(error.response.data.status == 403){
            history.push("/error");
          }
        }
       )
  }, [currentPage, clickSearch]);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div >
          <h3>Quản lý nhân viên</h3>
        </div>
    
    {/* Search */}
        <div style={{ marginLeft: "517px", marginRight: "10px" }}>
                <input onChange={getKeySearch} 
                    type="text" placeholder="Tìm kiếm theo tên" style={{ height: "34px", width: "289px", padding: "10px 15px 10px 15px", border: "none" }} />
                <button onClick={searchStaffByName}
                    style={{ padding: "1px 10px 0px 10px", height: "34px", border: "none", backgroundColor: "white" }}>
                    <i class="fas fa-search" style={{ color: "#0089ff", fontSize: "19px" }}></i>
                </button>
            </div>
    
    {/*End -  Search */}

        <div style={{ margin: "0px" }} >
          <Link to='/settings/staffs/new-staff'>
            <button
              className="btn btn-success"
              style={{ marginLeft: "10px", backgroundColor: "#0089ff", borderColor: "#0089ff" }}
            >
              Thêm mới nhân viên
            </button>
          </Link>
        </div>
      </div>
      <hr />
      <table className=" table table-striped table-bordered" style={{ backgroundColor: "white" }}>
        <thead>
          <tr>
            <th>Họ và tên</th>
            <th>Trạng thái</th>
            <th>Vai trò</th>
            <th>Email</th>
            <th>Số điện thoại</th>   
            <th>Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {staffs.map((item) => {
            return (
              <StaffItem staff={item} key={item.id}></StaffItem>
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
  )
}

export default Staff


