'use client'
import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Slider from 'react-slick';
import ProjectDialog from './ProjectDialog';
import { ProjectEntry } from '@/utils';

interface CarouselProps {
    projects: ProjectEntry[];
}

export const Carousel: React.FC<CarouselProps> = ({ projects }) => {
    const [sliderRef, setSliderRef] = useState<Slider | null>(null)
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
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

    const isCenter = (index: number) => {
        const total = projects.length;
        let centerIndex = (currentSlide + 1) % total;
        return index === centerIndex;
    };

    const handleItemClick = (item: ProjectEntry) => {
        setSelectedItem(item);
        setShowModal(true);
    };

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
        <div className='w-[1200px] md:w-[2000px] flex flex-col items-center mt-10'>
            <Slider className='w-full flex justify-center' ref={setSliderRef} {...settings}>
                {projects?.map((item, index) => (
                    <div key={item.title} className='h-96 md:h-[450px]'>
                        <div onClick={() => handleItemClick(item)} className={`mx-12 md:mx-40 h-full rounded-3xl  flex flex-col justify-between overflow-hidden relative ${isCenter(index) ? 'bg-saga-yellow transition-colors ease-in duration-500 transform selected-project cursor-pointer pointer-events-auto' : 'border-2 pointer-events-none'}`}>
                            <p className={`font-bold text-2xl p-4 pb-0 ${isCenter(index) ? 'text-white' : 'text-gray-400'}`}>{item.title}</p>
                            <p className={`text-xl px-4 ${isCenter(index) ? 'text-white' : 'text-gray-400'}`}>{item.subtitle}</p>
                            <div className='h-[280px] m-4'>
                                <Image unoptimized className={`h-full w-full object-cover object-left-top rounded-3xl ${isCenter(index) ? 'visible' : 'invisible'}`} width={256} height={280} alt='Project picture' src={`https:${item.thumbnail.fields.file?.url}`}></Image>
                            </div>
                        </div>
                        <div className={`flex pt-2 text-gray-400 justify-center ${!isCenter(index) && 'invisible'}`}>
                            Click to read more
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={`md:w-[740px] w-[340px] h-16 md:h-4 flex justify-between transition-all ease-in-out duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-full'}`}>
                <button className='cursor-pointer relative md:bottom-[280px]' onClick={sliderRef?.slickPrev}>
                    <FontAwesomeIcon className='text-6xl md:text-6xl' size={'2xl'} icon={faCircleArrowLeft} color='#e5e7eb' />
                </button>
                <button className='cursor-pointer relative md:bottom-[280px]' onClick={sliderRef?.slickNext}>
                    <FontAwesomeIcon className='text-6xl md:text-6xl' size={'2xl'} icon={faCircleArrowRight} color='#e5e7eb' />
                </button>
            </div>
            <ProjectDialog item={selectedItem} handleClose={() => setShowModal(false)} showModal={showModal} />
        </div>
    )
}
