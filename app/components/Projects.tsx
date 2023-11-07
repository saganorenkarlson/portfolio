import React from 'react'
import {Carousel} from './Carousel'

const Projects = () => {
    return (
        <div className='flex flex-col mb-4 xl:mt-0 xl:w-[1200px] w-full'>
            <div className='w-2/4 flex flex-col gap-4 mx-8 xl:m-0'>
                <p className='text-3xl lg:text-4xl font-bold text-saga-yellow'>Projects</p>
            </div>
                <Carousel/>
        </div>)
}

export default Projects