import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { ProjectEntry } from '@/utils';

interface IProjectDialog {
    item: ProjectEntry | null,
    showModal: boolean,
    handleClose: () => void,
}

const ProjectDialog: React.FC<IProjectDialog> = ({ showModal, handleClose, item }) => {
    return (
        <div className={`flex justify-center fixed top-0 left-0 z-50 w-full pb-8 bg-white overflow-auto h-full mb-36 modal ${showModal ? 'modal-active' : ''}`}>
            <div className='flex pt-14 flex-col mx-8 xl:m-0 xl:w-[1200px] xl:mt-8 gap-4 h-full'>
                <div>
                    <div className='flex flex-row items-top justify-between'>
                        <div className='flex flex-row items-top'>
                            <p className='text-2xl md:text-3xl font-bold text-saga-yellow'>{item?.title.toUpperCase()} </p>
                            <div className='mx-4 hidden md:flex gap-2'>
                                {item?.github ? <a href={item.github} target='_blank' className='rounded-xl px-2 py-1 h-fit hover:bg-gray-200 cursor-pointer border-black border'><FontAwesomeIcon icon={faGithub} size='lg' color='black' /></a> : null}
                                {item?.link ? <a href={item.link} target='_blank' className='rounded-xl px-2 py-1 h-fit hover:bg-gray-200 cursor-pointer border-black border'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='black' /></a> : null}
                            </div>
                        </div>
                        <FontAwesomeIcon className='cursor-pointer hover:text-saga-yellow' onClick={handleClose} icon={faXmark} size='2xl' color='gray' />
                    </div>
                    <div className='flex gap-2 flex-col'>
                        <p className='font-bold text-black'>{item?.description} {item?.year}</p>
                        <div className='flex flex-col xxs:flex-row flex-1 xxs:flex-none gap-2 xxs:gap-4 md:hidden overflow-hidden'>
                            {item?.github ? <a href={item.github} target='_blank' className='flex gap-2 items-center rounded-lg px-3 py-2 h-fit hover:bg-gray-200 cursor-pointer border-black border'><FontAwesomeIcon icon={faGithub} size='lg' color='black' /> View on Github</a> : null}
                            {item?.link ? <a href={item.link} target='_blank' className='flex gap-2 items-center rounded-lg px-3 py-2 hover:bg-gray-200 cursor-pointer border-black border'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='black' /> View website </a> : null}
                        </div>
                    </div>
                </div>
                <p className='text-black'>{item?.content}
                </p>
                <div className='flex flex-wrap pb-4 gap-4 text-black'>
                    {(item?.techniques ?? []).map((technique) =>
                        <div key={technique.fields.title} className='rounded-2xl px-3 py-2 flex gap-2 items-center bg-gray-200'>
                            {technique.fields.logo ? <img height={20} className='w-auto h-[20px]' width={20} alt='Project picture' src={`https:${technique.fields.logo.fields.file?.url}`}></img>
                                : null}
                            {technique.fields.title}</div>
                    )}
                </div>
                <div className='flex flex-col pb-4'>
                    {(item?.media ?? []).map((mediaItem) =>
                        <div key={mediaItem.sys.id} className='pb-4'>
                            {mediaItem.fields.file?.contentType == 'video/mp4' ?
                                <video controls src={`https:${mediaItem.fields.file?.url}`} /> :
                                <Image unoptimized className={`h-full w-full object-cover`} width={256} height={280} alt='Project picture' src={`https:${mediaItem.fields.file?.url}`}></Image>
                            }
                        </div>

                    )}
                </div>
            </div>
        </div>)
}


export default ProjectDialog