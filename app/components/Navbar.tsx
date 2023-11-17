'use client'
import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faLaptopCode, faTableList, faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [opacity, setOpacity] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const newOpacity = Math.min(0.7, (window.scrollY - 400) / 400);
        setOpacity(newOpacity);

        const targetElement = document.getElementById('experience');
        const adjacentTargetElement = document.getElementById('about-me');
        const body = document.body;
        const html = document.documentElement;

        if (targetElement && adjacentTargetElement) {
            const targetPosition = targetElement.offsetTop;
            const currentPositionBottom = window.scrollY + window.innerHeight;
            const currentPositionTop = window.scrollY;

            const pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            const scrollPosition = window.scrollY + window.innerHeight;

            if (currentPositionBottom >= (targetPosition + targetElement.offsetHeight / 4) && currentPositionTop <= targetPosition + targetElement.offsetHeight / 4 && scrollPosition < pageHeight - 10) {
                body.classList.add('bg-saga-green');
                targetElement.classList.add('text-white');
                adjacentTargetElement.classList.add('text-white');
                body.classList.remove('bg-white');
                targetElement.classList.remove('text-black');
                adjacentTargetElement.classList.remove('text-black');
            } else {
                body.classList.add('bg-white');
                targetElement.classList.add('text-black');
                adjacentTargetElement.classList.add('text-black');
                body.classList.remove('bg-saga-green');
                targetElement.classList.remove('text-white');
                adjacentTargetElement.classList.remove('text-white');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        document.body.classList.add('bg-white');

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('bg-white', 'bg-[#006450]');
        }

    }, []);

    const handleScrollNavigation = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        const elem = document.getElementById(targetId);
        setIsMenuOpen(false);

        if (elem) {
            window.scrollTo({
                top: elem?.offsetTop - 80,
                behavior: "smooth",
            });
        }

    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMenuOpen && menuRef.current && event.target instanceof Node && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='fixed font-bold w-full bg-white h-20 top-0 left-0 p-6 z-50' style={{ backgroundColor: `rgba(255, 255, 255, ${isMenuOpen ? 1 : opacity})` }}>
            <div className='text-black hidden md:flex gap-10 md:gap-4 justify-end'>
                <button className='flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'home')}>
                    <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faHouse} ></FontAwesomeIcon>
                    <p> Home </p>
                </button>
                <button className='text-black flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'about-me')}>
                    <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faUser} color='black' ></FontAwesomeIcon>
                    <p>About me</p>
                </button>
                <button className='text-black flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'experience')}>
                    <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faTableList} ></FontAwesomeIcon>
                    <p>Experience</p>
                </button>
                <button className='text-black flex items-center gap-1 group hover:text-gray-600' onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleScrollNavigation(e, 'projects')}>
                    <FontAwesomeIcon className='group-hover:text-gray-600 text-2xl md:text-sm' icon={faLaptopCode} ></FontAwesomeIcon>
                    <p>Projects</p>
                </button>
            </div>
            <div className='w-full flex justify-end' ref={menuRef}>
                <div className="md:hidden p-2" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </div>
                <div className={`absolute flex flex-col items-end justify-between left-0 top-16 w-full bg-white p-8 md:hidden transition-[height] duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 h-52' : 'opacity-0 h-0 pointer-events-none'}`}>
                    <button className='w-full flex justify-end' onClick={(e) => handleScrollNavigation(e, 'home')}>Home</button>
                    <button className='w-full flex justify-end' onClick={(e) => handleScrollNavigation(e, 'about-me')}>About me</button>
                    <button className='w-full flex justify-end' onClick={(e) => handleScrollNavigation(e, 'experience')}>Experience</button>
                    <button className='w-full flex justify-end' onClick={(e) => handleScrollNavigation(e, 'projects')}>Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar