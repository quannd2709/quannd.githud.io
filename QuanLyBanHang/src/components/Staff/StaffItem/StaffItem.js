import React from 'react'
import { useHistory } from 'react-router-dom'
import './StaffItem.css'

const StaffItem = ({staff}) => {
  let history = useHistory();

  const updateStaff = (staff) => {
    history.push({
      pathname: `/settings/staffs/${staff.id}`,
      state: { staff: staff }
    })
  }
  
  return (
    <>
       <tr onClick={() => updateStaff(staff)} >
              <td>{staff.fullName}</td>
              <td>{staff.status}</td>
              <td>{staff.roleName}</td>
              <td>{staff.mail}</td>
              <td>{staff.phone}</td>
              <td>{staff.address}</td>
            </tr>
    </>
  )
}

export default StaffItem













