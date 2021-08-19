import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { useHistory } from 'react-router-dom'

const TheHeaderDropdown = () => {

  let history = useHistory();

const logOut = () => {
  console.log('Bình đăng xuất')
  localStorage.removeItem("token");
  localStorage.removeItem("name");
  window.location.reload("/http://localhost:3000/login");
}

  return (
    // <CDropdown
    //   inNav
    //   className="c-header-nav-items mx-2"
    //   direction="down"
    // >
    //   <CDropdownToggle className="c-header-nav-link" caret={false}>
    //     <div className="c-avatar">
    //       <CImg
    //         src={'avatars/6.jpg'}
    //         className="c-avatar-img"
    //         alt="admin@bootstrapmaster.com"
    //       />
    //     </div>
    //   </CDropdownToggle>
    //   <CDropdownMenu className="pt-0" placement="bottom-end">
    //     <CDropdownItem
    //       header
    //       tag="div"
    //       color="light"
    //       className="text-center"
    //     >
    //       <strong>Account</strong>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-bell" className="mfe-2" />
    //       Updates
    //       <CBadge color="info" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-envelope-open" className="mfe-2" />
    //       Messages
    //       <CBadge color="success" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-task" className="mfe-2" />
    //       Tasks
    //       <CBadge color="danger" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-comment-square" className="mfe-2" />
    //       Comments
    //       <CBadge color="warning" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem
    //       header
    //       tag="div"
    //       color="light"
    //       className="text-center"
    //     >
    //       <strong>Settings</strong>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-user" className="mfe-2" />Profile
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-settings" className="mfe-2" />
    //       Settings
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-credit-card" className="mfe-2" />
    //       Payments
    //       <CBadge color="secondary" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem>
    //       <CIcon name="cil-file" className="mfe-2" />
    //       Projects
    //       <CBadge color="primary" className="mfs-auto">42</CBadge>
    //     </CDropdownItem>
    //     <CDropdownItem divider />
    //     <CDropdownItem>
    //       <CIcon name="cil-lock-locked" className="mfe-2" />
    //       Lock Account
    //     </CDropdownItem>
    //   </CDropdownMenu>
    // </CDropdown>


    <CDropdown
    inNav
    className="c-header-nav-items mx-2"
    direction="down"
  >
    <CDropdownToggle className="c-header-nav-link" caret={false}>
      <div className="c-avatar">
        <CImg
          src={'avatars/6.jpg'}
          className="c-avatar-img"
          alt="admin@bootstrapmaster.com"
        />
      </div>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">

      <CDropdownItem
        header
        tag="div"
        color="light"
        className="text-center"
      >
        <strong>Tài khoản</strong> <br />
        <strong>({localStorage.getItem("name")})</strong>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-user" className="mfe-2" />Hồ sơ thông tin
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-settings" className="mfe-2" />
        Cài đặt
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-credit-card" className="mfe-2" />
        Trợ giúp
      </CDropdownItem>
      <CDropdownItem divider />
      <CDropdownItem onClick = {logOut}>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        Đăng xuất
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
  )
}

export default TheHeaderDropdown
