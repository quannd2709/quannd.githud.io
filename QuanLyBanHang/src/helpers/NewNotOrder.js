import React from 'react';
import './scss/NewNotOrder.scss'
const NewNotOrder = () => {
    return (
        <div className = "new-not-order">
            <div className = "new-not-order-1">
                <div className = "new-not-icon">
                    <span><i className="fas fa-search-minus fa-3x"></i></span>
                </div>
                <div className = "new-not-content">
                    <span>Không tìm thấy đơn hàng phù hợp với điều kiện tìm kiếm</span>
                </div>
            </div>
        </div>
    );
}

export default NewNotOrder;
