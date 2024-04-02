import { motion } from "framer-motion";
import Training from "../components/training/Training";
import PagesMetaHead from "../components/PagesMetaHead";
import Test1 from "../components/test/test1";
// pages/index.js
import React, { useState } from "react";

import DateSwiper from "../components/Schedule/DateSwiper";
import SchedulePicker from "../components/Schedule/SchedulePicker";
import { GoogleMap } from "@react-google-maps/api";
import GoogleMaps from "../components/map/GoogleMap";

function traDetail() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="test" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
        
      ></motion.div>
       <Training />
       <div>
        <GoogleMaps/>
       </div>
     
    </div>
  );
}

export default traDetail;
