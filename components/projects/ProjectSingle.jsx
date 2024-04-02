// import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



// const imageStyle = { maxWidth: "100%", height: "auto" };

// function ProjectSingle  ( props, lesson_id, lesson_name,lesson_course, lesson_price , category )  {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1, delay: 1 }}
//       transition={{
//         ease: "easeInOut",
//         duration: 0.7,
//         delay: 0.15,
//       }}
//     >
//       <Link
//         // href="/projects/[id]"
//         href="/traDetail"
//         // as={"/projects/" + props.id}
//         aria-label="Single Project"
//         passHref
//       >
       
//         <div>
//           <div className=" rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
//             <div className="aspect-w-1 aspect-h-1 overflow-hidden">
//               <Image
//                 // src={props.img}
//                 src="/test1.jpg"
//                 className="rounded-t-xl border-none"
//                 alt="Single Project"
//                 layout="responsive"
//                 width={100}
//                 height={90}
//               />
//             </div>

//             <div className="flex justify-between">
//               <div className="mt-6 block font-normaltext-primary-dark dark:text-primary-light">
//                 Гар бөмбөгийн сургалт
//                 {lesson_name}
               
//               </div>
//               <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green text-primary-dark dark:text-primary-light rounded-md px-1">
//                 $6
//                 {lesson_price}
                
//               </div>
//             </div>
//             <p
//               aria-hidden="true"
//               className="mt-2 mb-5 text-2xl font-semibold text-primary-dark dark:text-primary-light"
//             >
//               Анхан, дунд шат
//               {lesson_course}
//             </p>

//             <div className="flex justify-between border-2 text-primary-dark dark:text-primary-light rounded-md p-2">
//               <p>Анги дүүргэлт 20 хүүхэд</p>
             
//               <div className="flex flex-row space-x-4">
//                 <div className="flex">
//                   <img src={"/account.svg"} alt="circle" />
//                   {/* <p className="text-lightgrey ml-1">120</p> */}
//                 </div>
//                 <div className="flex">
//                   <img src={"/Star.svg"} alt="star" />
//                   <img src={"/Star.svg"} alt="star" />
//                   <img src={"/Star.svg"} alt="star" />
//                   <img src={"/Star.svg"} alt="star" />
//                   {/* <p className="ml-1">4.5</p> */}
//                 </div>
//               </div>
//             </div>
//             <div className="text-center px-4 py-6">
//               <span className="text-lg text-ternary-dark dark:text-ternary-light">
//                 {category}
//               </span>
//             </div>
//             <div  className="hover:bg-gray-200 rounded-xl bg-primary-light dark:bg-primary-dark  text-center text-lg px-4 py-2 text-primary-dark dark:text-primary-light">
//               <button>
//                 Дэлгэрэнгүй харах
//               </button>
//             </div>
//           </div>
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default ProjectSingle;
// components/projects/ProjectSingle.js
// import next from "next";
// import React from "react";

function ProjectSingle({ id,  lesson_name, category,lesson_price,lesson_info,lesson_course, lesson_address }) {
  return (
    <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondory-light dark:bg-ternary-dark">
   <Link
  href="/traDetail"
  aria-label="Single Project"
  passHref
>
  <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-ternary-light dark:bg-ternary-dark">
    <div className="aspect-w-1 aspect-h-1 overflow-hidden">
      <Image
        src="/test1.jpg"
        className="rounded-t-xl border-none"
        alt="Single Project"
        layout="responsive"
        width={100}
        height={90}
      />
    </div>

    <div className="flex justify-between items-center px-4 py-2">
      <div className="font-medium text-primary-dark dark:text-primary-light">
        {lesson_course}
      </div>
      <div className="text-lg font-semibold text-green border-solid border-2 border-green text-primary-dark dark:text-primary-light rounded-md px-3 py-1">
        {lesson_price}
      </div>
    
    </div>
    <p className="text-blue-500 px-4 py-2 text-xl font-semibold text-primary-dark dark:text-primary-light">
      {lesson_name}
    </p>

    <div className="flex justify-between border-2 text-primary-dark dark:text-primary-light rounded-md p-2 px-4">
      <p>{lesson_address}</p>
      <div className="flex space-x-2">
        {/* <img src={"/account.svg"} alt="circle" /> */}
        <img src={"/Star.svg"} alt="star" />
        <img src={"/Star.svg"} alt="star" />
        <img src={"/Star.svg"} alt="star" />
        <img src={"/Star.svg"} alt="star" />
      </div>
    </div>

    <div className="text-center px-4 py-2">
      <span className="text-lg text-ternary-dark dark:text-ternary-light"></span>
    </div>
    <div className="hover:bg-gray-200 rounded-xl bg-primary-light dark:bg-primary-dark text-center text-lg px-4 py-2 text-primary-dark dark:text-primary-light">
      <button>Дэлгэрэнгүй харах</button>
    </div>
  </div>
</Link>


    </div>

  );
}

export default ProjectSingle;
