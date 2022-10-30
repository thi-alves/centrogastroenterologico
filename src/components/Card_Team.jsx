import React from 'react'

const Card_Team = ({photo,title,sTitle,content}) => {
  return (
    <div className='min-w-[390px] text-center'>
      <img src={photo} alt="" className='object-cover overflow-hidden rounded-xl'/>
      <h3 className='st'>{title}</h3>
      <p className='s mb-3'>{sTitle}</p>
      <p className='pp'>{content}</p>
    </div>
  )
}

export default Card_Team

