import Header from '@/components/_header'
import AboutMe from '@/components/_aboutMe';
import Image from 'next/image'
import Projects from '@/components/_projects';
import ContactMe from '@/components/_contactme';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center bg-primary'>
      <div className='
      mt-2
      h-fit
      2xl:w-3/5
      w-4/5      
      flex
      flex-col
    '>
        <AboutMe/>
        <Projects />
        <ContactMe/>
    </div>
    </div>
  );
}
