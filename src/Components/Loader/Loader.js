import React from 'react'
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div style={{display:'flex', justifyContent: 'center' , margin:'4rem auto'}}>
        <InfinitySpin color="#27c8dd"/>
    </div>
  )
}

export default Loader