import axios from "axios";
import { reactLocalStorage } from "reactjs-localstorage";
const headers = {
  Authorization: "Bearer " + reactLocalStorage.get("token"),
};

const PageBase = "http://localhost:8080/customers/page";
const PageByGender = "http://localhost:8080/customers/findGender?gender=";
const PageByAge = "http://localhost:8080/customers/";
const PageByAgeAndGender = "http://localhost:8080/customers/";
const PageBySearch = "http://localhost:8080/customers/search?input=";
const baseUrl = "http://localhost:8080/customers";
class ApiCustomer {
  getBasePage(pageNo, limit) {
    console.log("jwt is :   " + headers.Authorization);

    return axios.get(
      PageBase + "?pageNo=" + pageNo + "&limit=" + limit,
      headers
    );
  }

  getPageByGender(gender, pageNo, limit) {
    return axios.get(
      PageByGender + gender + "&pageNo=" + pageNo + "&limit=" + limit,
      headers
    );
  }

  getPageByAge(age, pageNo, limit) {
    return axios.get(
      PageByAge + age + "?pageNo=" + pageNo + "&limit=" + limit,
      headers
    );
  }
  getPageBySearch(search, pageNo, limit) {
    return axios.get(
      PageBySearch + search + "&pageNo=" + pageNo + "&limit=" + limit,
      headers
    );
  }
  getPageByAgeAndGender(age, gender, pageNo, limit) {
    return axios.get(
      PageByAgeAndGender +
        age +
        "?gender=" +
        gender +
        "&pageNo=" +
        pageNo +
        "&limit=" +
        limit,
      headers
    );
  }
  saveCustomer(customerUpdate) {
    return axios.post(baseUrl, customerUpdate, headers);
  }
  // this function alter status of Customer, there fore it is use method get, not delete
  deleteCustomer(id) {
    return axios.get(baseUrl + "/off/" + id, headers);
  }
  updateCustomer(id) {
    return axios.put(baseUrl + "/" + id, headers);
  }
}
export default new ApiCustomer();

// export {
//   getBasePage,
//   getPageByGender,
//   getPageByAge,
//   getPageByAgeAndGender,
//   getPageBySearch,
//   saveCustomer,
//   deleteCustomer,
//   updateCustomer,
// };
