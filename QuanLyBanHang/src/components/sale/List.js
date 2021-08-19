import React from "react";

const List = ({ data, render }) => {
  return <>{data.map(render).reverse()}</>;
};

export default List;
