import Image from 'next/image'
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg-p-24">
      <div className='flex justify-center svg-background items-center w-full h-screen'>
        <div className='flex flex-col xl:flex-row xl:w-[1200px] xl:justify-between items-center'>
          <div className='xl:w-3/4 mx-8 xl:m-0'>
            <p className="text-white text-xl">Hi my name is Saga Norén Karlson</p>
            <p className='text-3xl lg:text-4xl font-bold pb-2'>I am a final year M.Sc student in Media Technology and Engineering
            </p>
            <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus lacus et augue vehicula laoreet.
              Donec id feugiat eros, eget pretium ipsum.
            </p>
          </div>
          <div className='hidden xl:block'>
            Image
          </div>
        </div>
      </div>
      <AboutMe />
      <Experience />
      <Projects/>
    </main>
  )
}
