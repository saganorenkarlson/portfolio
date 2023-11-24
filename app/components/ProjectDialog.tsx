import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
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
                            <div className='flex mx-4'>
                                {item?.github ? <a href={item.github} target='_blank' className='rounded-xl px-2 py-1 h-fit hover:bg-gray-200 cursor-pointer'><FontAwesomeIcon icon={faGithub} size='lg' color='black' /></a> : null}
                                {item?.link ? <a href={item.link} target='_blank' className='rounded-xl px-2 py-1 hover:bg-gray-200 cursor-pointer'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='black' /></a> : null}
                            </div>
                        </div>
                        <FontAwesomeIcon className='cursor-pointer hover:text-saga-yellow' onClick={handleClose} icon={faXmark} size='2xl' color='gray' />
                    </div>
                    <div>
                        <p className='font-bold text-black'>{item?.description} {item?.year}</p>
                    </div>
                </div>
                <p className='text-black'>{item?.content}
                </p>
                <div className='flex pb-4 gap-4 text-black'>
                    <div className='rounded-2xl px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faReact} size='lg' color='black' /> React.js</div>
                    <div className='rounded-2xl px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faNodeJs} size='lg' color='black' /> Node.js</div>
                </div>
                <div className='flex flex-col pb-4'>
                    {(item?.media ?? []).map((mediaItem) =>
                        <div className='pb-4'>
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