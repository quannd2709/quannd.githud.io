import axios from "axios";

const CATEGORY_API_URL = "http://localhost:8080/api/v1/products";
const PRODUCTS="http://localhost:8080/api/v1/products";
const CATEGORY ="http://localhost:8080/api/v1/categories";
const SUPPLIER="http://localhost:8080/api/v1/suppliers";
const COLOR="http://localhost:8080/api/v1/colors";
const SIZE ="http://localhost:8080/api/v1/Size";
const BRAND="http://localhost:8080/api/v1/brands";
const SEARCH = "http://localhost:8080/api/v1/productss";
const SEARCH_SUPPLIER =""
const FILTER="http://localhost:8080/api/v1/product_searchByCategory";
const F="http://localhost:8080/api/v1/product_searchByCategories"
// function getCategory() {
//   return axios.get(CATEGORY_API_URL)
// }
function getColor(){
  return axios.get(COLOR)
}
function getSize(){
  return axios.get(SIZE)
}
function getBrand(){
  return axios.get(BRAND)
}


function getCategory(){
    return axios.get(CATEGORY_API_URL)
}
function getCategoryByID(categoryId) {

  return axios.get(CATEGORY_API_URL + "/"+ categoryId)
}
function getSupplierByID(supplier) {

  return axios.get(SUPPLIER + "/" + supplier)
}

function UpdateCategory(category, categoryId) {
  return axios.put(CATEGORY_API_URL + "/" + categoryId, category);
}
function UpdateSuppliers(supplier, supplierId) {
  return axios.put(SUPPLIER + "/" + supplierId, supplier);
}


function createCategory(category) {
  return axios.post(CATEGORY_API_URL, category);
}
function createSupplier(supplier) {
  return axios.post(SUPPLIER, supplier);
}

function getCate(){
  return axios.get(CATEGORY)
}
function getSupplier(){
  return axios.get(SUPPLIER)
}
function DeleteCategory(categoryId) {
  return axios.delete(CATEGORY_API_URL + "/" + categoryId);
}
function DeleteSupplier(supplierId) {
  return axios.delete(SUPPLIER + "/" + supplierId);
}



function Search(key) {
  return axios.get(SEARCH + "?keyword=" + key);
}
// function F(key,pageNo,pageSize) {
//   return axios.get(F + "?keyword=" + key + "&pageNo=" + pageNo + "&pageSize="+pageSize);
// }
function Filter(key) {
  return axios.get(FILTER + "/" + key);
}

function createProduct(product){
  return axios.post(PRODUCTS,product)
}

const ApiQuan = (method, URL, data) => {
 var config = { 
  method: method,
  url: `http://localhost:8080/api/v1/${URL}`,
  headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`,
      'Content-Type': 'application/json'
  },
  data: data
}
return axios(config);
};

export {
  getCategory,
  getCategoryByID,
  UpdateCategory,
  getCate,
  getSupplier,
  createCategory,
  DeleteCategory,
  Search,
  getColor,
  getSize,
  getBrand,
  Filter,
  createSupplier,
  DeleteSupplier,
  UpdateSuppliers,
  getSupplierByID,
  createProduct,
  ApiQuan
};
