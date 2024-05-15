import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaArrowLeft } from "react-icons/fa";
import ImageSlider from '../Swiper/Swiper';
import State from '../state/State';
import PartiIntro from './partIntro';
import CommentForm from '../Comment/Comment';

function ProjectSingle() {
  const [traDetails, setTraDetails] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const id = localStorage.getItem("id"); // Retrieve id from localStorage

        const response = await axios.get(`/api/traDetail?id=${id}`);
        setTraDetails(response.data);
      } catch (error) {
        console.error('Error fetching traDetail:', error);
      }
    }
    fetchData();
  }, []); 

  const handlePrevClick = (e) => {
    e.preventDefault();
    console.log(localStorage.getItem("id"))
    router.back(); // Navigate back to the previous page
  };

  return (
    <div>
      <div className='flex items-center'>
        <FaArrowLeft
          onClick={handlePrevClick}
          className="text-gray-500 hover:text-gray-700 cursor-pointer "
        />
        <h1 className="text-xl font-bold ml-4 ">Сургалтын нэр</h1>
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className='col-span-8'>
            <ImageSlider/>
          </div>
          <div className='col-span-4'>
            <State/>
          </div>
        </div>
      </div>
      <div className='text-xl font-semibold'>Манай сурагч багш нар
        <PartiIntro/>
      </div>
      {/* Render traDetails */}
      {traDetails.map((traDetail) => (
        <div className=" border-2 text-xl text-primary-dark dark:text-primary-light   mb-8 sm:p-5 bg-gray-300 dark:bg-secondary-dark  " key={traDetail.traDetail_id}>
          <div >Танилцуулга: {traDetail.traIntro}</div>
          <div >Хуваарь: {traDetail.traSchedule}</div>
          <div >Шаардлагатай зүйл: {traDetail.traNecessary}</div>
        </div>
      ))}
     
      <CommentForm/>
    </div>
  );
}

export default ProjectSingle;
