import React from 'react'
import { home } from '../assets'

const Hero = () => {
  return (
    <div className='w-screen flex justify-center items-center flex-col'>
      

      <div className='xl:max-w-[1280px] grid md:grid-cols-2 justify-center items-center'>
      
        <div className='flex flex-col flex-1  p-6'>
          <h1 className='tb mb-4'>Uma <span className='text-secondary'>Clínica Gastroenterológica</span> em que você pode confiar</h1>
          <p className='pp max-w-[470px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex libero sequi, nam consectetur ad porro repellendus fugit ducimus velit iste animi dicta, illum labore expedita est tempora sint blanditiis numquam?</p>
        </div>
        <div className='w-full h-[700px]'>
          <img src={home} alt="" className='w-full h-full object-cover' />
        </div>

      </div>
      <div className='xl:max-w-[1280px] flex w-full justify-center items-center -top-20 relative'>
      <div className='bg-white shadow-btn rounded-xl shadow-md min-w-[450px] min-h-[170px] grid flex-col md:grid-cols-3 p-5 gap-2 z-[1]'>
        <div className='flex justify-center gap-2'>
          <div src="" alt="" className='h-[62px] w-[62px] object-contain bg-primary rounded-lg'/>
          <div>
            <h2 className='st'>Contate-nos</h2>
            <p className='pp'>(31) 99335-5485</p>
            <p className='pp'>contato@centrogastro.com.br</p>
            <a href="" className='text-secondary font-bold'>Enviar E-mail</a>
          </div>
        </div>
        <div className='flex justify-center gap-2'>
          <div src="" alt="" className='h-[62px] w-[62px] object-contain bg-primary rounded-lg'/>
          <div>
            <h2 className='st'>Contate-nos</h2>
            <p className='pp'>(31) 99335-5485</p>
            <p className='pp'>contato@centrogastro.com.br</p>
            <a href="" className='text-secondary font-bold'>Enviar E-mail</a>
          </div>
        </div>
        <div className='flex justify-center gap-2'>
          <div src="" alt="" className='h-[62px] w-[62px] object-contain bg-primary rounded-lg'/>
          <div>
            <h2 className='st'>Contate-nos</h2>
            <p className='pp'>(31) 99335-5485</p>
            <p className='pp'>contato@centrogastro.com.br</p>
            <a href="" className='text-secondary font-bold'>Enviar E-mail</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero