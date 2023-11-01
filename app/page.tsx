import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center lg-p-24">
      <div className='flex justify-around svg-background items-center w-full lg:h-screen'>
        <div className='flex flex-row w-full justify-between p-4 md:p-16 lg:p-36'>
          <div className='w-[42rem]'>
            <p className="text-white text-xl">Hi my name is Saga Norén Karlson</p>
            <p className='text-4xl font-bold'>I am a final year M.Sc student in Media Technology and Engineering
            </p>
            <p className='text-sm'>I am looking for a job, please hire me heheheeh. More information maube blablablabalabalklsa
              skdlösadsadsa kld kls dl s måste skriva mer kanske
              jklsfd ord ord ordelioord or ordelin opsa kls
              kdsf</p>
          </div>
          <div>
            Image
          </div>
        </div>
      </div>
      <div className='flex flex-row px-4 md:px-16 lg:px-36 lg:pt-36 w-full justify-between h-[40rem]'>
        <div className='w-2/4 flex flex-col gap-4 '>
          <p className='text-4xl font-bold text-saga-yellow'>About me</p>
          <p>I am looking for a job, please hire me heheheeh. More information maube blablablabalabalklsa
            skdlösadsadsa kld kls dl s måste skriva mer kanske
            jklsfd ord ord ordelioord or ordelin opsa kls
            kdsf
          </p>
        </div>
        <div>
          <img className='h-[33rem] relative -top-8' src='./saga-aboutme.png'></img>
        </div>
      </div>
      <div className='flex flex-row px-4 md:px-16 lg:px-36 lg:pb-36 w-full justify-between'>
        <div className='w-2/4 flex flex-col gap-4'>
          <p className='text-4xl font-bold text-saga-yellow'>Experience</p>
        </div>
      </div>
    </main>
  )
}
