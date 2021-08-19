import React from 'react';
import './scss/InforOrderReturn.scss'
const InforOrderReturn = ({code, createdDate, staffName}) => {
    return (
        <div className = 'infor-order-return'>
            <div className = 'infor-order-lable'>
                <span>Thông tin đơn hàng</span>
            </div>
            <div className = 'infor-order-content'>
                <div className = 'code-order-return'>
                    <span>Mã đơn trả hàng</span>
                    <span>{code}</span>
                </div>
                <div className = 'gived-date'>
                    <span>Ngày chứng từ</span>
                    <span>{createdDate}</span>
                </div>
                <div className ='staff-order'>
                   <span> Nhân viên bán hàng</span>
                   <span>{staffName}</span>
                </div>
            </div>
        </div>
    );
}

export default InforOrderReturn;
