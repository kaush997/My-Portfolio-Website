import React,{useState} from 'react'
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo,testimonialThree,testimonialFour,testimonialFive, testimonialSix,testimonialSeven,testimonialEight,testimonialTen,testimonialNine,testimonialEleven,testimonialTwelve,testimonial13,testimonial14,testimonial15,
  testimonial16,
  testimonial17,
  testimonial18,
  testimonial19,
  testimonial20,
  testimonial21,
  testimonial22,
  testimonial23,
  testimonial24,
  testimonial25,
  testimonial26,
} from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-white"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="Arts" des="My Pencil Portraits" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialThree}
                  alt="testimonialThree"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialFour}
                  alt="testimonialFour"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialFive}
                  alt="testimonialFive"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialSix}
                  alt="testimonialSix"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Four ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialSeven}
                  alt="testimonialSeven"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialEight}
                  alt="testimonialEight"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider five ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialNine}
                  alt="testimonialNine"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialTen}
                  alt="testimonialTen"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider six ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialEleven}
                  alt="testimonialEleven"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonialTwelve}
                  alt="testimonialTwelve"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider seven ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial13}
                  alt="testimonial13"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial14}
                  alt="testimonial14"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 8 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial15}
                  alt="testimonial15"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial16}
                  alt="testimonial16"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 9 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial17}
                  alt="testimonial17"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial18}
                  alt="testimonial18"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 10 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial19}
                  alt="testimonial19"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial20}
                  alt="testimonial20"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 11 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial21}
                  alt="testimonial21"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial22}
                  alt="testimonial22"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 12 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial23}
                  alt="testimonial23"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial24}
                  alt="testimonial24"
                />
                
              </div>
              </div>
            </div>
          </div>
          {/* ================ Slider 13 ================== */}
          <div className="w-full mt-20">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
              <div className="w-full lgl:w-[45%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial25}
                  alt="testimonial25"
                />
                
              </div>
              <div className="w-full lgl:w-[45%] h-full flex flex-col justify-between">
               
              <div className="w-full lgl:w-[100%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-full w-full rounded-lg object-cover"
                  src={testimonial26}
                  alt="testimonial26"
                />
                
              </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial