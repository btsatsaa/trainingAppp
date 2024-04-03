import React, { useState } from "react";
import { motion } from "framer-motion";
import Training from "../components/training/Training";
import GoogleMaps from "../components/map/GoogleMap";
import PagesMetaHead from "../components/PagesMetaHead";

function TraDetail() {
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
      >
        {/* Content inside motion div */}
      </motion.div>
      
      <Training />
      <div>
        <GoogleMaps />
      </div>
    </div>
  );
}

export default TraDetail;
