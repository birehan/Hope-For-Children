import { ArrowDropDown } from '@mui/icons-material'
import React from 'react'

const Values = () => {
  return (
    <div>
      <div>
        <h1>Our Values</h1>
      </div>

      <div>
        <div className='flex'>
          <div>
            <h1>id</h1>
            <h1>title</h1>
            <button><ArrowDropDown/></button>
          </div>
          <p>desc</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Values
