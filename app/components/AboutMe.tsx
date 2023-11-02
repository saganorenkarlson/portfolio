import React from 'react'
import Image from 'next/image'


export const AboutMe = () => {
    return (
        <div className='flex flex-col md:flex-row mx-8 xl:m-0 xl:w-[1200px] xl:mt-8 justify-between'>
            <div className='md:w-2/4 flex flex-col gap-4 '>
                <p className='text-3xl lg:text-4xl font-bold text-saga-yellow'>About me</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet.
                    Donec id feugiat eros, eget pretium ipsum. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper. 
                </p>
            </div>
            <div className='flex md:block justify-end'>
                <Image height={591} width={395} alt='Picture of Saga' src='/saga-aboutme.png'></Image>
            </div>
        </div>)
}
