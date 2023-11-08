import React from 'react'

export const Experience = () => {

    const experience = [
        {
            time: 'Summer 2023',
            title: 'FULLSTACK DEVELOPER',
            company: 'Upsales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet. Donec id feugiat eros, eget pretium ipsum. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula. Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula'
        },
        {
            time: 'Summer 2022',
            title: 'FULLSTACK DEVELOPER',
            company: 'Upsales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet. Donec id feugiat eros, eget pretium ipsum. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula. Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula'
        },
        {
            time: 'Summer 2023',
            title: 'FULLSTACK DEVELOPER',
            company: 'Upsales',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet. Donec id feugiat eros, eget pretium ipsum. Nulla non posuere sapien. Ut dapibus sapien vitae lacus fringilla vehicula. Aenean vel justo fringilla, porttitor magna sed, porttitor ipsum. Nunc luctus scelerisque nisl sit amet vehicula'
        },

    ]

    return (
        <div id='experience' className='flex flex-col m-8 xl:m-0 xl:w-[1200px] justify-center py-4 xl:h-screen'>
            <div className='w-2/4 flex flex-col gap-4'>
                <p className='text-3xl lg:text-4xl font-bold text-saga-yellow'>Experience</p>
            </div>
            <div className="flex flex-nowrap md:flex-wrap flex-col 2xl:h-[500px] xl:h-[600px] lg:h-[600px] md:h-[600px]">
                {experience.map((item, index) => (
                    <div key={index} className={`md:w-1/2 ${index % 2 === 0 ? 'mb-4' : ''}`}>
                        <div className="py-4 pr-4">
                            <p>{item.time}</p>
                            <h3 className="font-bold">{item.title}, {item.company}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>)
}
