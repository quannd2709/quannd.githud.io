import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const OrderDropDown = () => {
  return (
      <div className = "order-dropdown">
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
    <Dropdown.Item.Item href="#/action-1">Action</Dropdown.Item.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </DropdownButton>
    </div>
  );
};

export default OrderDropDown;
