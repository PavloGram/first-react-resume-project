import React from 'react'

function Title({title, subTitle}) {
  return (
    <div className='title'>
        <p>{title}</p>
        <h2 style={{textTransform:"capitalize"}} className='title-title'>{subTitle}</h2>
    </div>
  )
}

export default Title