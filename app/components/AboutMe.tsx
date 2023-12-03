import React from 'react'

export const AboutMe = () => {
    return (
        <div id='about-me' className='flex items-center xl:w-[1200px] m-8 xl:h-screen'>
            <div className='flex flex-col md:flex-row justify-between'>
                <div className='md:w-2/4 flex flex-col gap-4'>
                    <p className='text-3xl lg:text-4xl font-bold text-saga-yellow mb-10'>About me</p>
                    <p>I&apos;m often asked why I chose to study Media Technology, but I am still not entirely sure (I have many theories) so I would rather tell you about why I have enjoyed my studies.
                        I&apos;ve always had a fondness for learning, regardless of the subject matter, and what draws me to programming is the combination of continually learning,
                        recognizing patterns, and problem solving. I also really enjoy being in creative environments, working with creative people and creating things together
                        with a group. All this I have gotten from the Media Technology program which is why I hold a bachelor&apos;s degree in media technology but as I also wanted to explore more of the world of technology,
                        I am currently working towards a master&apos;s in computer science.
                        <br />
                        <br />
                        In my studies, I&apos;ve covered a wide range of topics from AI to machine learning and network security.
                        I have also gained a passion for software development which I have explored during the summers doing internships and by doing my own projects,
                        for example this website. Please look around, and don&apos;t hesitate to reach out if you have any questions.

                    </p>
                </div>
                <div className='flex md:block justify-end'>
                    <img height={591} width={395} alt='Picture of Saga' src='/saga-aboutme.png'></img>
                </div>
            </div>
        </div>)
}
