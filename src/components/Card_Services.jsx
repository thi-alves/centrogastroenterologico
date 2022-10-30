import React from 'react'

const Card_Services = ({icon, title, content, link}) => {
  return (
    <div className='group min-w-[400px] bg-white shadow-lg shadow-btn rounded-xl hover:transform hover:-translate-y-6 ease-in-out duration-300 mb-10'>
      <div>
        <img src={icon} alt={title} className='w-full h-full object-cover overflow-hidden rounded-t-xl ' />
      </div>
      <div className='p-5 mt-5'>
        <h3 className='st group-hover:text-secondary'>{title}</h3>
        <p className='pp mb-2'>{content}</p>
        <a href={link} className="font-bold text-base text-secondary leading-3">Ver mais</a>
      </div>
    </div>
  )
}

export default Card_Services

/*hover:transform hover:-translate-y-6 ease-in-out duration-300*/