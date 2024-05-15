import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

function SaveButton() {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved((prevIsSaved) => !prevIsSaved); 
    // Toggle the saved state
  };

  return (
    <div>
      <button onClick={handleSave}>
        {isSaved ? <IoHeart /> :  <IoHeartOutline />} {/*Use icons based on the saved state */}
        {/* {isSaved ? "Устгах" : "Хадгалах"} */}
      </button>
    </div>
  );
}

export default SaveButton;
