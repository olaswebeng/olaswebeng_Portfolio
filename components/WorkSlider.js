// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Energy management',
          path: '/W1.png',
          link: 'https://subtle-crowbar-426023-j0.df.r.appspot.com/',
        },
        {
          title: 'Cantor College',
          path: '/W2.png',
          link:'https://cantor-426213.df.r.appspot.com/',
        },
        {
          title: 'HMS',
          path: '/W3.png',
          link:''
        },
        {
          title: 'Ivision Sports',
          path: '/W4.png',
          link:'https://ivisionsport.com/'
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: 'Energy management',
    //       path: '/w1.png',
    //     },
    //     {
    //       title: 'Cantor College',
    //       path: '/w2.png',
    //     },
    //     {
    //       title: 'HMS',
    //       path: '/w3.png',
    //     },
    //     {
    //       title: 'Ivision Sports',
    //       path: '/w4.png',
    //     },
    //   ],
    // },
  ],
};
 

 
import {Swiper,SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
 
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
    spaceBetween={10}
    pagination={{
      clickable:true
    }}
    modules={{ Pagination}}
    className='h-[280px] sm:h-[480px]'
    >
      {
        workSlides.slides.map((slide,index)=>{
          return(
            <SwiperSlide key={index}>
             <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer '>
              {slide.images.map((image,index)=>{
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center 
                  justify-center group 
                  ' key={index}>
                    <div className='flex items-center justify-center relative
                    overflow-hidden group
                    '>
                      {/* Image */}
                      <Image src={image.path} width={500} height={300} alt=''/>
                      {/* overlay gradient */}
                      <div className='absolute inset-0 bg-gradient-to-l 
                      from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 
                      group-hover:opacity-80 transition-all duration-700
                      '></div>
                      {/* title */}
                      <div className='absolute bottom-0 translate-y-full
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                      transition-all duration-300 
                      '>
                        <div className='flex items-center gap-x-2
                        text-[13px] tracking-[0.2em] projectTitle
                        ' >
                          {/* title part1 */}
                          <div className='delay-100' 
                          style={{textTransform:'uppercase'}}
                          >
                            <a href={image.link}> {image.title}</a>
                            
                          </div>
                          {/* title part2 */}
                          {/* <div className='translate-y-[500%] 
                          group-hover:translate-y-0 transition-all duration-300
                          delay-150
                          '>PROJECT</div> */}
                          {/* icons */}
                          <div className='text-xl translate-y-[500%]
                          group-hover:translate-y-0 transition-all duration-300
                          delay-200
                          '>
                            <BsArrowRight/>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>  
                  );
              })}
             </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
export default WorkSlider;
