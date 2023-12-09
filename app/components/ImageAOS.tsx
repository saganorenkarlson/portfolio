'use client'
import React, {useEffect} from 'react'
import AOS from 'aos';

export const ImageAOS = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);

    return (
        <div data-aos='fade-up' className='flex md:block justify-end'>
            <img height={591} width={395} alt='Picture of Saga' src='/saga-aboutme.png'></img>
        </div>
    )
}
