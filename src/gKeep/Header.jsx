import React from 'react'
import logo from './keep_logo.png'


const Header=()=>{

    return(
        <>
          <div className='header'>
           <img src={logo} alt='logo' width="30px" className='logo'/>
           ~rider's KEEP
           {/* <div><h1 className='head'>~rider's KEEP</h1></div> */}
          </div>
        </>
    )
}
export default Header;