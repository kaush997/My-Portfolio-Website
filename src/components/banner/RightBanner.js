import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[340px] h-[410px] lgl:w-[520px] lgl:h-[650px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[490px] lgl:h-[500px] bg-gradient-to-r from-[#02253d] to-[#0a568c] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
}

export default RightBanner