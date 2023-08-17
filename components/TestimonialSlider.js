// testimonial data
const testimonialData = [
  {
    image: '/T1.png',
    name: 'Khaleb',
    position: 'Customer',
    message:
      'Wonderful seller never had any issues always delivered my work on time with good prices and great work 10/10',
  },
  {
    image: '/T2.png',
    name: 'Capital Commerce',
    position: 'Customer',
    message:
      'It has been an absolute outstanding pleasure working with Ahmad. ',
  },
  {
    image: '/T3.png',
    name: 'Freeman',
    position: 'Customer',
    message:
      'He did a great job fixing my Python issue.',
  },
  {
    image: '/T4.png',
    name: 'Hamza',
    position: 'Customer',
    message:
      'Had a really great first experience working with Ahmad.',
  },
];
 
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
 
import { Navigation,Pagination } from 'swiper';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
    pagination={{
      clickable:true
    }}
    modules={{Navigation, Pagination}}
    className='h-[280px] sm:h-[320px]'
    >
      {
        testimonialData.map((person,index)=>{
          return(
            <SwiperSlide key={index}>
              <div className='flex flex-col items-center md:flex-row 
              gap-x-8 h-full px-16'>
                {/* avatar name position */}
                      <div className='w-full max-w-[300px] flex flex-col 
                      xl:justify-center items-center relative mx-auto xl:mx-0'>
                        <div className='flex flex-col justify-center text-center'>
                          {/* avatar */}
                          <div className='mb-2 mx-auto'>
                            <Image src={person.image} width={100}
                            height={100} alt=''/>
                          </div>
                          {/* name */}
                          <div className='text-lg'>
                            {person.name}
                          </div>
                          {/* position */}
                          <div className='text-[12px] uppercase font-extralight
                          tracking-widest'>{person.position}</div>
                       </div>
                     </div>

                     {/* quote & message */}
                     <div className='flex-1 flex flex-col justify-center
                     before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0
                     xl:before:h-[200px]  relative xl:pl-20'>
                        <div className='mb-4'>
                            <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20
                            mx-auto md:mx-0'/>
                        </div>
                        <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
                     </div>
              </div>
         
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
export default TestimonialSlider;