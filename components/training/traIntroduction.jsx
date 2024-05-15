import next from "next"


import React, { useState, useEffect } from 'react';


const TraIntro= () => {
    return (
        <div className=" border-2  text-primary-dark dark:text-primary-light   mb-8 sm:p-5 bg-gray-300 dark:bg-secondary-dark  "> 
            <ul><li>Шилдэг чадвартай багш нар </li>
            <li>Найрсаг хамт олон </li>
            <li>Тав тухтай орчин </li>
            <li> Хөгжин дэвжих боломж </li>
        </ul></div>
    

       
    );
}

export default TraIntro;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const TraIntro = () => {
//   const [traDetails, setTraDetails] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get('/api/traDetail'); // Энэ зам нь зөв байх шаардлагатай
//         setTraDetails(response.data);
//       } catch (error) {
//         console.error('Error fetching traDetail:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div  className=" border-2  text-primary-dark dark:text-primary-light   mb-8 sm:p-5 bg-gray-300 dark:bg-secondary-dark  ">
      
//       <ul>
//         {traDetails.map((traDetail) => (
//          <li><p>{traDetail.traIntro}</p>
//          <p>Necessary: {traDetail.traNecessary}</p></li>
            
          
         
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TraIntro;
