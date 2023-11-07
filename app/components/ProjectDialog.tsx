import React from 'react'
import { Item } from './Carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons'

interface IProjectDialog {
    item: Item | null,
    showModal: boolean,
    handleClose: () => void,
}

const ProjectDialog: React.FC<IProjectDialog> = ({ showModal, handleClose, item }) => {
    return (
        <div className={`flex justify-center fixed top-0 left-0 z-50 w-full h-full pb-8 bg-white overflow-auto w- modal ${showModal ? 'modal-active' : ''}`}>
            <div className='flex pt-14 flex-col mx-8 xl:m-0 xl:w-[1200px] xl:mt-8 gap-4'>
                <div>
                    <div className='flex flex-row md:items-center justify-between'>
                        <div className='flex flex-row gap-4 md:items-center'>
                            <p className='text-3xl font-bold text-saga-yellow'>{item?.name.toUpperCase()} </p>
                            <div className='flex'>
                                <div className='rounded-xl px-2 py-1 hover:bg-gray-200 cursor-pointer'><FontAwesomeIcon icon={faGithub} size='lg' color='black' /></div>
                                <div className='rounded-xl px-2 py-1 hover:bg-gray-200 cursor-pointer'><FontAwesomeIcon icon={faArrowUpRightFromSquare} size='lg' color='black' /></div>
                            </div>
                        </div>
                        <FontAwesomeIcon className='cursor-pointer hover:text-saga-yellow' onClick={handleClose} icon={faXmark} size='2xl' color='gray' />
                    </div>
                    <div>
                        <p className='font-bold'>Project for the course TDDD4 Object programming</p>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet.
                    Donec id feugiat eros, eget pretium ipsum. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper.Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper.Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper.Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper.Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula.
                    Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula.
                    Etiam maximus lacus ac turpis aliquet semper.
                </p>
                <div className='flex pb-4 gap-4'>
                    <div className='rounded-2xl px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faReact} size='lg' color='black' /> React.js</div>
                    <div className='rounded-2xl px-3 py-2 bg-gray-200'><FontAwesomeIcon icon={faNodeJs} size='lg' color='black' /> Node.js</div>
                </div>
            </div>
        </div>)
}


export default ProjectDialog