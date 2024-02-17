import React from 'react'
import { bannerImg } from "../../assets/index";
import { bannerBack } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[350px] h-[420px] lgl:w-[440px] lgl:h-[530px] z-10 mb-4"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute items-center " >
      <img
        className=" w-[420px] h-[400px] lgl:w-[650px] lgl:h-[570px] z-10 mb-4 ml-2 flex justify-center "
        src={bannerBack}
        alt="bannerBack"
      />
      </div>
    </div>
  );
}

export default RightBanner