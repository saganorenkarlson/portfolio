import React from 'react'
import { Carousel } from './Carousel'
import { ProjectEntry } from '@/utils';


interface ProjectProps {
    projects: ProjectEntry[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
    return (
        <div id='projects' className='flex items-center flex-col mb-4 xl:mt-0 w-full'>
            <div className='xl:w-[1200px] w-full flex flex-col mb-10 xl:mx-0'>
                <p className='text-3xl lg:text-4xl mx-8 md:mx-0 font-bold text-saga-yellow'>Projects</p>
            </div>
            <div className='w-full flex justify-center overflow-hidden'>
                <Carousel projects={projects} />
            </div>
        </div>
    )
}


export default Projects