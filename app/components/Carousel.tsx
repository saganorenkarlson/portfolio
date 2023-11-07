'use client'
import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import Slider from 'react-slick';
import ProjectDialog from './ProjectDialog';


export interface Item {
    name: string;
}

export const Carousel = () => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

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

    const isCenter = (index: number) => {
        const total = items.length;
        let centerIndex = (currentSlide + 1) % total;
        return index === centerIndex;
    };

    const handleItemClick = (item: Item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const items = [
        { name: 'Project 1' },
        { name: 'Project 2' },
        { name: 'Project 3' },
        { name: 'Project 4' },
        { name: 'Project 5' },
        { name: 'Project 6' },
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current: number, next: number) => {
            setIsTransitioning(true);
            setCurrentSlide(next);
        },
        afterChange: (current: number) => {
            setIsTransitioning(false);
        },
    };
    return (
        <div className='overflow-hidden flex flex-col items-center mt-10'>
            <Slider className='w-[1200px] flex justify-center' ref={setSliderRef} {...settings}>
                {items.map((item, index) => (
                    <div key={item.name} className='h-96'>
                        <div onClick={() => handleItemClick(item)} className={`mx-12 h-full rounded-3xl  flex flex-col justify-between overflow-hidden relative ${isCenter(index) ? 'bg-saga-yellow transition-colors ease-in duration-500 transform selected-project cursor-pointer pointer-events-auto' : 'border-2 pointer-events-none'}`}>
                            <p className={`font-bold text-2xl p-4 ${isCenter(index) ? 'text-white' : 'text-gray-400'}`}>{item.name}</p>
                            <div className='h-[280px] m-4'>
                                <Image className={` h-full w-full object-cover rounded-3xl ${isCenter(index) ? 'visible' : 'invisible'}`} width={256} height={280} alt='Project picture' src='/fulvin.png'></Image>
                            </div>
                        </div>
                        <div className={`flex pt-2 text-gray-400 justify-center ${!isCenter(index) && 'invisible'}`}>
                            Click to read more
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={`md:w-[440px] w-[340px] h-16 flex justify-between ${isTransitioning && 'invisible'}`}>
                <button className='cursor-pointer relative md:bottom-64' onClick={sliderRef?.slickPrev}>
                    <FontAwesomeIcon size={'2xl'} icon={faCircleArrowLeft} color='#e5e7eb' />
                </button>
                <button className='cursor-pointer relative md:bottom-64' onClick={sliderRef?.slickNext}>
                    <FontAwesomeIcon size={'2xl'} icon={faCircleArrowRight} color='#e5e7eb' />
                </button>
            </div>
            <ProjectDialog item={selectedItem} handleClose={() => setShowModal(false)} showModal={showModal} />
        </div>
    )
}
