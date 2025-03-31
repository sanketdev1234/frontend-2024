import React from 'react'
import Navbar from '../components/Navbar';
import sponsors_img1 from '../images/sponsors_img1.png'
import sponsors_img2 from '../images/sponsors_img2.png'
import sponsors_img3 from '../images/sponsors_img3.png'
import Horizontal from '../components/horrizontal-pipe.svg'
import Footer from '../components/Footer';

const Sponsors = () => {
  return (
    <div> 
        <Navbar></Navbar>
        <div className='overflow-x-hidden min-h-screen overflow-hidden'>
            <div className='md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-20 mt-10 relative'>
                <div className='flex flex-col justify-start md:ml-24 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-5xl font-bold mb-8'>
                        Title Sponsor 
                    </h1>
                    <div className='bg-white h-[200px] w-[300px] md:h-[400px] md:w-[630px]'>
                    </div>
                </div>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-end items-center opacity-20 md:opacity-100'>
                    <img src={sponsors_img1} alt="Title Sponsor" className='w-64 md:w-96 h-auto object-contain' />
                </div>
            </div>

            <div className='md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-2 mt-14 md:mt-20 relative'>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-start items-center opacity-20 md:opacity-100'>
                    <img src={sponsors_img2} alt="Associate Sponsor" className='w-64 md:w-96 h-auto object-contain' />
                </div>
                <div className='flex flex-col justify-start md:mr-16 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-5xl font-bold mb-8 md:mr-5'>
                        Associate Sponsors
                    </h1>
                    <div className='flex flex-wrap flex-row-reverse gap-6 md:gap-14 justify-center items-center md:mr-32'>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                    </div>
                </div>
            </div>

            <div className='md:h-[75vh] grid grid-cols-1 md:grid-cols-2 gap-20 mt-14 md:mt-28 relative'>
                <div className='flex flex-col justify-start md:ml-24 md:justify-start items-center md:items-start relative z-10'>
                    <h1 className='text-white text-5xl font-bold mb-8'>
                        Sponsors
                    </h1>
                    <div className='grid grid-cols-2 md:gap-12 gap-y-10 gap-x-3 relative'>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                        <div className='bg-white h-[100px] w-[150px] md:h-[150px] md:w-[250px]'>
                        </div>
                    </div>
                </div>
                <div className='absolute inset-0 md:relative md:inset-auto flex justify-end items-center opacity-20 md:opacity-100'>
                    <img src={sponsors_img3} alt="Sponsor" className='w-64 md:w-96 h-auto object-contain' />
                </div>
            </div>
            
            <img className='mid-line w-full' src={Horizontal} alt="horizontal" />
            <Footer></Footer>
        </div>
    </div>
  )
}

export default Sponsors