import React from 'react'
import { useHistory } from 'react-router-dom'
import './RoleItem.css'

const RoleItem = ({role}) => {

  let history = useHistory();

  const updateRole = (role) => {
    history.push({
      pathname: `/settings/roles/${role.id}`,
      state: { role: role }
    })
  }
  
  return (
    <>
       <tr onClick={() => updateRole(role)}>
              <td>{role.name}</td>
              <td>{role.notes}</td>
              <td>{new Date(role.createdDate).toLocaleDateString()}</td>
            </tr>
    </>
  )
}

export default RoleItem













