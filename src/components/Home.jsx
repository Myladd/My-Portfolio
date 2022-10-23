import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
    return(
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
            {/*{container}*/}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Milad Zandkarimi</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, animi corporis dolore doloremque excepturi facilis labore maiores necessitatibus quaerat quis.</p>
                <div>
                    <button className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>view work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home