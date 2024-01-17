import React from 'react'
import Pic from './output-onlinepngtools (1).svg'
import './style.css'
// import Pic from '../../public/output-onlinepngtools (1).jpg'
const Bef = () => {
  return (
    <div className='page-load'>

      <div className='bef-content'>

        <img src={Pic} alt="" style={{ width: "100px", height: "100px" }} />
        <p>Summit Bytes</p>

      </div>
      <div class="before-page">
        <span class="loader"></span>
      </div>
    </div>
  )
}

export default Bef