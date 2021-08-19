import React from 'react';

const FormatMoney = (x) => {
   // let option ={style : 'currency', currency : 'VND'};
   return x.toLocaleString('vn-VN');
}

export {FormatMoney};
