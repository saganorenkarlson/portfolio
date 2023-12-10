import { faArrowUpRightFromSquare, faPersonThroughWindow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Contact = () => {
    return (
        <div className='relative flex flex-col justify-center items-center xl:w-[1200px] mx-8 mt-8 xl:h-[550px] xl:m-0'>
            <FontAwesomeIcon icon={faPersonThroughWindow} className='text-5xl' />
            <p className='text-3xl lg:text-4xl font-bold text-saga-yellow mb-10 mt-8'>Contact</p>
            <p>Feel free to reach out through any of the links down below
            </p>
            <div className='flex flex-col w-full md:w-fit md:flex-row gap-4 mt-8 '>
                <a href='https://www.linkedin.com/in/saga-nor%C3%A9n-karlson-457827164/' target="_blank">
                    <div className="group text-white bg-saga-yellow flex justify-between md:gap-2 items-center rounded-[999px] border-saga-yellow border py-4 xl:py-2 px-8 cursor-pointer hover:bg-white hover:text-saga-yellow">
                        LinkedIn
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' className="text-white group-hover:text-saga-yellow" />
                    </div>
                </a>
                <a href='mailto:saga.norenkarlson@gmail.com'>
                    <div className="group text-white bg-saga-yellow flex justify-between md:gap-2 items-center rounded-[999px] border-saga-yellow border py-4 xl:py-2 px-8 cursor-pointer hover:bg-white hover:text-saga-yellow">
                        Email
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' className="text-white group-hover:text-saga-yellow" />
                    </div>
                </a>
                <a href='https://github.com/saganorenkarlson' target="_blank">
                    <div className="group text-white bg-saga-yellow flex justify-between md:gap-2 items-center rounded-[999px] border-saga-yellow border py-4 xl:py-2 px-8 cursor-pointer hover:bg-white hover:text-saga-yellow">
                        Github
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='sm' className="text-white group-hover:text-saga-yellow" />
                    </div>
                </a>
            </div>
            <div className='h-28 block xl:hidden'></div>
            <div className='absolute pb-4 xl:pb-8 bottom-0 flex flex-col items-center'>
                <hr className='w-3/4 mb-4 xl:mb-8' />
                Website by Saga Norén Karlson
            </div>

        </div>)
}
