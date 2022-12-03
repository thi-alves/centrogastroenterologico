import React from 'react'

const Card_Services = ({icon, title, content, link}) => {
  return (
    <div className='group w-full bg-white shadow-lg shadow-btn rounded-xl hover:transform hover:-translate-y-6 ease-in-out duration-300'>
      <div>
        <img src={icon} alt={title} className='w-full h-full object-cover overflow-hidden rounded-t-xl ' />
      </div>
      <div className='px-5 py-2 space-y-4 flex flex-col'>
        <h3 className='h3 group-hover:text-secondary'>{title}</h3>
        <p className='p text-gray_red'>{content}</p>
        <a href={link} className="font-bold text-base text-secondary leading-3 pb-2">Ver mais</a>
      </div>
    </div>
  )
}

export default Card_Services

/*hover:transform hover:-translate-y-6 ease-in-out duration-300*/