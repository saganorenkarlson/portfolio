import { ExperienceEntry } from '@/utils';
import React from 'react'

interface ExperienceProps {
    experiences: ExperienceEntry[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {

    return (
        <div id='experience' className='flex flex-col m-8 xl:m-0 xl:w-[1200px] justify-center py-4 xl:h-screen'>
            <div className='w-2/4 flex flex-col gap-4'>
                <p className='text-3xl lg:text-4xl font-bold text-saga-yellow'>Experience</p>
            </div>
            <div className="flex flex-nowrap md:flex-wrap flex-col 2xl:h-[500px] xl:h-[600px] lg:h-[600px] md:h-[600px]">
                {experiences.map((item, index) => (
                    <div key={item.title} className={`md:w-1/2 ${index % 2 === 0 ? 'mb-4' : ''}`}>
                        <div className="py-4 pr-4">
                            <p>{item.period}</p>
                            <h3 className="font-bold">{item.title}, {item.company}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}
