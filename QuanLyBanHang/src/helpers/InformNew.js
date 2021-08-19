import React from 'react';
import './scss/InformNew.scss'
const InformNew = ({news}) => {
    return (
        <div className = 'inform-new'>
            <p>{news}</p>
        </div>
    );
}

export default InformNew;
