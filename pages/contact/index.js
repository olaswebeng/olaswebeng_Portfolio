import Circles from '/components/Circles'

import { BsArrowRight } from 'react-icons/bs';

import { motion } from 'framer-motion';


import { fadeIn } from '../../variants';


const Contact = () => {
  return (
      <div className='h-full bg-primary/30'>
          <div className='container mx-auto py-32 text-center xl:text-left flex
          items-center justify-center h-full'>
            <div className='flex flex-col w-full max-w-[700px] 
            '  >
            <div className='overflow-auto max-h-[70vh]'> 
            {/* text */}
            <motion.h2
            variants={fadeIn('up',0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-1'
            style={{marginTop:'10vh'}}
            >
                Let's <span className='text-accent'>Connet</span>
            </motion.h2>
            {/* form */}
                <motion.form 
                variants={fadeIn('up',0.4)}
                initial='hidden'
                animate='show'
                exit='hidden'
                action="" className='flex-1 flex flex-col gap-6 w-full mx-auto'>

                  <div className='flex gap-x-6 w-full'>
                    <input type="text" placeholder='Name' className='input' />
                    <input type="email" placeholder='Email' className='input' />
                  </div>
                  <input type="text" name="" placeholder='Subject' className='input' id="" />
                  <textarea placeholder='message' className='textarea' cols="30" rows="10"></textarea>
                  <button className='btn rounded-full border border-white/50 max-w-[170px] px-9
                  transition-all duration-300 flex items-center justify-center overflow-hidden
                  hover:border-accent group
                  '> 
                  <span className='group-hover:-translate-y-[100%] group-hover:opacity-0
                  transition-all duration-500 
                  '>Let's talk</span>
                  <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex
                  group-hover:-translate-y-0 group-hover:opacity-100 transition-all 
                  duration-300 absolute text-[22px]
                  '/>
                  </button>
                </motion.form>
            </div>
            </div>
          </div>
      </div>
  );
};

export default Contact;
