import React from "react";
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import css from '../assets/css.png'
import git from '../assets/github.png'
import firebase from '../assets/firebase.png'
import mui from '../assets/material-ui-seeklogo.com.svg'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/*{container}*/}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center items-center w-full h-full'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                    <p className='py-4'>// These are the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={html} className='w-20 mx-auto' alt="html icon"/>
                        <p className='my-4'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={css} className='w-20 mx-auto' alt="css icon"/>
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={js} className='w-20 mx-auto' alt="js icon"/>
                        <p className='my-4'>Javascript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={react} className='w-20 mx-auto' alt="react icon"/>
                        <p className='my-4'>React</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={tailwind} className='w-20 mx-auto' alt="tailwind icon"/>
                        <p className='my-4'>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={mui} className='w-20 mx-auto' alt="mui icon"/>
                        <p className='my-4'>Material UI</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={git} className='w-20 mx-auto' alt="git icon"/>
                        <p className='my-4'>Github</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={firebase} className='w-20 mx-auto' alt="firebase icon"/>
                        <p className='my-4'>Firebase</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Skills