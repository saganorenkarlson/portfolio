'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faLaptopCode, faTableList } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [opacity, setOpacity] = useState<number>(0);

    const handleScroll = () => {
        const newOpacity = Math.min(0.7, (window.scrollY - 400) / 400);
        setOpacity(newOpacity);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const elem = document.getElementById(targetId);

        if (elem) {
            window.scrollTo({
                top: elem?.offsetTop - 80,
                behavior: "smooth",
            });
        }

    };

    return (
        <div className='fixed font-bold w-full bg-white h-20 top-0 left-0 flex gap-10 md:gap-4 p-4 justify-around md:justify-end items-center' style={{ backgroundColor: `rgba(255, 255, 255, ${opacity})` }}>
            <button className='flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'home')}>
                <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faHouse} ></FontAwesomeIcon>
                <p className='hidden md:block'> Home </p>
            </button>
            <button className='flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'about-me')}>
                <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faUser} color='black' ></FontAwesomeIcon>
                <p className='hidden md:block'>About me</p>
            </button>
            <button className='flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'experience')}>
                <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faTableList} ></FontAwesomeIcon>
                <p className='hidden md:block'>Experience</p>
            </button>
            <button className='flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'projects')}>
                <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faLaptopCode} ></FontAwesomeIcon>
                <p className='hidden md:block'>Projects</p>
            </button>
        </div>
    )
}

export default Navbar