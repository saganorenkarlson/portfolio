import Image from 'next/image'
import { AboutMe } from './components/AboutMe'
import { Experience } from './components/Experience'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fetchExperiences, ExperienceEntry, fetchProjects, ProjectEntry } from '../utils';

export const getExperiences = async () => {
  const experiences = await fetchExperiences();
  return {
    experiences,
    revalidate: 60,
  };
};

export const getProjects = async () => {
  const projects = await fetchProjects();
  return {
    projects,
    revalidate: 60,
  };
};

export default async function Home() {
  const experiences: ExperienceEntry[] = (await getExperiences()).experiences;
  const projects: ProjectEntry[] = (await getProjects()).projects;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg-p-24">
      <Navbar />
      <div id='home' className='flex justify-center svg-background items-center w-full h-screen'>
        <div className='flex flex-col xl:flex-row xl:w-[1200px] xl:justify-between items-center'>
          <div className='xl:w-3/4 mx-8 xl:m-0'>
            <p className="text-white text-xl">Hi my name is Saga Norén Karlson</p>
            <p className='text-black text-3xl lg:text-4xl font-bold pb-2'>I am a final year engineering student
            </p>
            <p className='text-black text-sm'>Exploring the intersection of Media Technology and Computer Science,
              I find joy in learning and creative collaboration
            </p>
            <div className='flex gap-4 mt-4'>
              <a href='https://github.com/saganorenkarlson' target="_blank">
                <FontAwesomeIcon className='hover:text-white' icon={faGithub} color='black' size='2xl'></FontAwesomeIcon>
              </a>
              <a href='https://www.linkedin.com/in/saga-nor%C3%A9n-karlson-457827164/' target="_blank">
                <FontAwesomeIcon className='hover:text-white' icon={faLinkedin} color='black' size='2xl'></FontAwesomeIcon>
              </a>
            </div>
          </div>
          <div className='hidden xl:flex mb-8 rounded-full  overflow-hidden w-[400px] h-[400px]'>
            <div className='hidden xl:block rounded-full bg-white w-[300px] h-[300px]'>
            <Image priority width={1000} height={1400} alt='Saga Norén Karlson' src='/saga-2.webp'></Image>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <Experience experiences={experiences} />
      <Projects projects={projects} />
    </main>
  )
}
