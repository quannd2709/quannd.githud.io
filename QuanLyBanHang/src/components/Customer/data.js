import { reactLocalStorage } from "reactjs-localstorage";

export const dataGender = [
  { value: "", label: "Khác" },
  { value: "Nam", label: "Nam" },
  { value: "Nu", label: "Nu" },
];
export const dataAge = [
  { value: "", label: "All" },
  { value: "under", label: "Dưới 18 tuổi" },
  { value: "between", label: "18 đến 35 tuổi" },
  { value: "over", label: "Trên 35 tuổi" },
];
export const dataRecord = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
];
export const dataSlove = [
  { value: "ok", label: "ok" },
  { value: "pendding", label: "pendding" },
];
export const dataMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const dataDay = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];
export const header = {
  Authorization: "Bearer " + reactLocalStorage.get("token"),
};
