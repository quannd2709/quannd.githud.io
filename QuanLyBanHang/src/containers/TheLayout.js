import React, { useContext, useState } from 'react'
import { LayoutContext, SalerContext } from 'src/context/JwtContext'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {
const [isShow, setShow] = useState(true);
  return (  
    <div className="c-app c-default-layout">
      <LayoutContext.Provider value ={{isShow,setShow}}>
        {isShow ?<TheSidebar />: ""}
      <div className="c-wrapper">
        {isShow  ? <TheHeader/> : ""}
        <div className="c-body">
          <TheContent/>
        </div>
        {isShow ?<TheFooter/>:"" }   
      </div>
      </LayoutContext.Provider>
    </div>
  )
}

export default TheLayout
