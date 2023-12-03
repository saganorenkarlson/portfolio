import { ExperienceEntry } from '@/utils';
import React from 'react'
import Image from 'next/image'

interface ExperienceProps {
    experiences: ExperienceEntry[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {

    return (
        <div id='experience' className='flex flex-col m-8 xl:w-[1200px] justify-center xl:h-screen '>
            <div className='w-2/4 flex flex-col mb-10'>
                <p className='text-3xl lg:text-4xl font-bold text-saga-yellow'>Experience</p>
            </div>
            <div className="flex flex-nowrap md:flex-wrap flex-col 2xl:h-[500px] md:h-[700px]">
                {experiences.map((item, index) => (
                    <div key={item.title} className={`md:w-1/2 ${index % 2 === 0 ? 'mb-4' : ''}`}>
                        <div className="py-4 pr-4">
                            <p>{item.period}</p>
                            <h3 className="font-bold text-2xl">{item.title}, {item.company}</h3>
                            <p>{item.description}</p>
                        </div>
                        <div className='flex gap-4'>
                        {(item?.techniques ?? []).map((technique) =>
                            <div key={technique.fields.title} className='rounded-2xl px-3 py-2 flex items-center bg-white bg-opacity-20'>
                                {technique.fields.logo ? <Image height={20} className='w-auto h-[20px]' width={20} alt='Technique' src={`https:${technique.fields.logo.fields.file?.url}`}></Image>
                                    : null}
                            </div>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}
