import Header from '@/components/_header'
import AboutMe from '@/components/_aboutMe';
import Image from 'next/image'
import Projects from '@/components/_projects';

export default function Home() {
  return (
    <div className='w-full h-full flex justify-center bg-primary'>
      <div className='
      mt-2
      h-fit
      w-3/5
      flex
      flex-col
    '>
        <AboutMe/>
        <Projects />
    </div>
    </div>
  );
}
