import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';

import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import ImageSlider from '../Swiper/Swiper';
import { FaArrowLeft } from "react-icons/fa";
import CommentForm from '../Comment/Comment';
import State from '../state/State';
import TraIntro from './traIntroduction';
import PartiIntro from './partIntro';



function Training() {
	const [activeTheme] = useThemeSwitcher();
    const router = useRouter();

    const handlePrevClick = (e) => {
        e.preventDefault();
        router.back(); // Navigate back to the previous page
    };
	return (
        <div className=''>
              <div className='flex items-center'>
            <FaArrowLeft
                onClick={handlePrevClick}
                className="text-gray-500 hover:text-gray-700 cursor-pointer "
            />
            <h1 className="text-xl font-bold ml-4 ">Сургалтын нэр</h1>
        </div>
		 <div className="">
        {/* The parent div should have the flex class to use flexbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          {/* Each image wrapped in a div with the specified column size */}
          <div className='col-span-8'>
        <ImageSlider/>
            
          </div>
          <div className='col-span-4'>
        
         <State/>
          </div>
         
        </div>
      </div>
        <div className='text-xl font-semibold'>Танилцуулга
       <TraIntro/>
        </div>
        <div className='text-xl font-semibold'>Манай сурагч багш нар
        <PartiIntro/>
        </div>

     
        <div className='text-xl font-semibold'>Хуваарь</div>
        <div className='text-xl font-semibold'>Шаардлагатай зүйл</div>
        <CommentForm/>
        </div>
	);
}

export default Training;
