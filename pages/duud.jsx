import { motion } from 'framer-motion';
import AboutClients from '../components/about/AboutClients';
import AboutCounter from '../components/about/AboutCounter';
import AboutMeBio from '../components/about/AboutMeBio';
import PagesMetaHead from '../components/PagesMetaHead';
import Test1 from '../components/test/test1';
// pages/index.js
import React, { useState } from 'react';

import DateSwiper from '../components/Schedule/DateSwiper';
import SchedulePicker from '../components/Schedule/SchedulePicker';


function duud() {
	const [selectedDate, setSelectedDate] = useState(new Date());
  
	const handleDateSelect = (date) => {
	  setSelectedDate(date);
	};
	return (
		<div className='container mx-auto'>
			<PagesMetaHead title="Test" />

		
            <motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, delay: 1 }}
				exit={{ opacity: 0 }}
				className="container mx-auto"
			>
			
						<Test1/>
				
				
			</motion.div>
			
		
		</div>
	
	);
}

export default duud;
