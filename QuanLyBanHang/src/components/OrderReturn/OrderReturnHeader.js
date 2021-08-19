import React from 'react';
import DropDown from './DropDown';

const ModalHeaders = (props) => {
    let inputs = props.inputs;
    let opDate = props.getDate;
    return (
      <div className="header-order">
        <div className="input-data">
          <button type="button">
            <span>
              <i className="fas fa-search"></i>
            </span>
          </button>
          <input onChange={(e)=>inputs(e)}
            type="text"
            name="inputOrder"
            id="userName"
            placeholder="Tìm kiếm theo mã đơn hàng, tên, SĐT khách hàng"
          />
        </div>
        <DropDown />
      
      </div>
    );
}

export default ModalHeaders;
