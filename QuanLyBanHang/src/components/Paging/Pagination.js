import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CPagination
} from '@coreui/react'
import { DocsLink } from 'src/reusable'


const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  var {page} = props;
  
  return (
    <>
          <CPagination
            activePage={currentPage}
            pages={10}
            onActivePageChange={onchange}
          />  
    </>
  )
}

export default Pagination
