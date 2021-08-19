import React from "react";
import { NavLink } from "react-router-dom";
function CustomerItem({ customer, index }) {
  return (
    <>
      <NavLink
        to={{ pathname: "/customer/detail", state: { customer } }}
        style={{
          padding: 0,
          textDecoration: "none",
          margin: " auto",
        }}
      >
        <tr
          className="row alig"
          style={{
            backgroundColor: "white",
            hover: { cursor: "pointer" },
            color: "gray",
          }}
        >
          <td className="col-1">{index + 1}</td>
          <td className="col-2">{customer.name}</td>
          <td className="col-2">{customer.phone}</td>
          <td className="col-1">{customer.gender}</td>
          <td className="col-3">{customer.email}</td>
          <td className="col-3">{customer.address}</td>
        </tr>
      </NavLink>
    </>
  );
}

export default CustomerItem;
