'use client'
import React, { useState, useEffect } from 'react'
import { Carousel } from './Carousel'
import { ProjectEntry } from '@/utils';
import ProjectDialog from './ProjectDialog';

interface ProjectProps {
    projects: ProjectEntry[];
}

const Projects: React.FC<ProjectProps> = ({ projects }) => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<ProjectEntry | null>(null);

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showModal]);

    const handleItemClick = (item: ProjectEntry) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    return (
        <div id='projects' className='flex items-center flex-col mb-4 xl:mt-0 w-full xl:h-screen justify-center'>
            <div className='xl:w-[1200px] w-full flex flex-col mb-10'>
                <p className='text-3xl lg:text-4xl mx-8 font-bold text-saga-yellow'>Projects</p>
            </div>
            <div className='w-full flex justify-center overflow-hidden'>
                <Carousel projects={projects}  handleItemClick={handleItemClick} />
            </div>
            <ProjectDialog item={selectedItem} handleClose={() => setShowModal(false)} showModal={showModal} />
        </div>
    )
}


export default Projects