import React from "react";
import { CCard, CCardBody, CPagination } from "@coreui/react";

const Paginations = ({ totalPages, currentPage, setCurrentPage }) => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CPagination
            align="center"
            addListClass="some-class"
            activePage={currentPage}
            pages={totalPages}
            onActivePageChange={setCurrentPage}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Paginations;
