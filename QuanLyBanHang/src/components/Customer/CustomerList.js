import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerItem from "./CustomerItem";
import NavBar from "./NavBar";
import "../../apis/css.scss";
import { reactLocalStorage } from "reactjs-localstorage";
import DisplayResultPagination from "./DisplayResultPagination";
import {
      CRow,
      CPagination,
} from "@coreui/react";
function CustomerList() {
  const headers = {
    Authorization: "Bearer " + reactLocalStorage.get("token"),
  };
  const [customers, setCustomers] = useState([]);
  const [totalElements, setTotalElements] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [gender, setGender] = useState({});
  const [age, setAge] = useState({});
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState({});
  const [limit, setLimit] = useState(5);
  const [status, setStatus] = useState(true);
  const [response, setResponse] = useState([]);
  const getData = async () => {
    setIsLoading(true);
    setCustomers([]);
    var URL;
    if (search.length > 0) {
      URL = `http://localhost:8080/customers/search?input=${search}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (age.length > 0 && gender.length > 0) {
      URL = `http://localhost:8080/customers/${age}?gender=${gender}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (gender.length > 0) {
      URL = `http://localhost:8080/customers/findGender?gender=${gender}&pageNo=${
        page - 1
      }&limit=${limit}`;
    } else if (age.length > 0) {
      URL = `http://localhost:8080/customers/${age}?pageNo=${
        page - 1
      }&limit=${limit}`;
    } else {
      URL = `http://localhost:8080/customers/page?pageNo=${
        page - 1
      }&limit=${limit}`;
    }

    console.log("this URL: ", URL);
    await axios
      .get(URL, { headers })
      .then((response) => {
        const result = response.data;
        setTotalPage(response.data.totalPages);
        setTotalElements(response.data.totalElements);
        const cus = result.content;
        setCustomers(cus);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        console.log(error);
      });
  };

  console.log("totalPage", totalPage);
  const renderTodo = customers.map((customer, index) => {
    return (
      <CustomerItem
        customer={customer}
        index={index}
        key={customer.id}
      ></CustomerItem>
    );
  });

  useEffect(() => {
    getData();
  }, [gender, page, search, age, status, limit]);
  return (
    <div>
      <NavBar
        setAge={setAge}
        search
        setSearch={setSearch}
        gender={gender}
        setGender={setGender}
        setPage={setPage}
      ></NavBar>
      <table
        className=" table table-striped table-bordered"
        style={{ border: "none" }}
      >
        <thead>
          <tr className="row">
            <th className="col-1">STT</th>
            <th className="col-2">Tên</th>
            <th className="col-2">Số điện thoai</th>
            <th className="col-1">Giới tính</th>
            <th className="col-3">Email</th>
            <th className="col-3">Địa chỉ</th>
          </tr>
        </thead>
        <tbody>
          {!customers.length && isLoading && (
            <tr className="text-center">
              <td colSpan={3}>No Student</td>
            </tr>
          )}
          {/* {isLoading && (
            <tr className="text-center">
              <td colSpan={3}>Loading...</td>
            </tr>
          )} */}
          {renderTodo}
        </tbody>
      </table>
      <CRow className="row">
        <CPagination
          className="col-6 mx-0 px-0"
          id="pagination"
          addListClass="some-class"
          activePage={page}
          pages={totalPage}
          onActivePageChange={setPage}
        />

        <div className="col-6 right">
          <DisplayResultPagination
            page={page}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
            totalElements={totalElements}
          ></DisplayResultPagination>
        </div>
      </CRow>
    </div>
  );
}
export default CustomerList;

// try {
//   var rs = null;
//   if (search.length > 0) {
//     //  rs = getPageBySearch(search, page, limit);
//   } else if (age.length > 0 && gender.length > 0) {
//     //   rs = getPageByAgeAndGender(age, gender, page, limit);
//   } else if (gender.length > 0) {
//     //  rs = setResponse(getPageByGender(gender, page, limit));
//   } else if (age.length > 0) {
//     //  rs = setResponse(getPageByAge(age, page, limit));
//   } else {
//     console.log("ahihihihihi");
//     ApiCustomer.getBasePage(page, limit)
//       .then((result) => {
//         setResponse(result);
//       })
//       .catch((err) => console.log(err));
//     console.log("Rs is :    " + response);
//   }
//   console.log("object tra ve customer:   " + rs);
//   setCustomers(response.data.content);
//   setTotalPage(response.data.totalPages);
//   setPage(response.pageable.pageNumber);
//   setIsLoading(false);
// } catch (error) {
//   setIsLoading(true);
//   console.log(error);
// }
