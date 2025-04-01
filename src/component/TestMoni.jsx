import React, { useState, useEffect } from "react";
import pop from "./images/nordic char.png";
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      header: "Best financial decision ever!",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quas quisquam non? Quas voluptate nulla minima deleniti optio ullam nesciunt, numquam corporis et asperiores laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus id alias reiciendis, perferendis facere pariatur dolore veniam autem esse non voluptatem saepe provident nihil molestiae.",
      photo: pop,
      name: "Aarav Lynn",
      location: "San Francisco, USA",
    },
    {
      header: "The last step to becoming a complete minimalist",
      text: "Quisquam itaque deserunt ullam, quia ea repellendus provident, ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum. Incidunt numquam perferendis veritatis neque repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt exercitationem deleniti.",
      photo: pop,
      name: "Miyah Miles",
      location: "London, UK",
    },
    {
      header: "Finally free from old-school banks",
      text: "Debitis, nihil sit minus suscipit magni aperiam vel tenetur incidunt commodi architecto numquam omnis nulla autem, necessitatibus blanditiis modi similique quidem. Odio aliquam culpa dicta beatae quod maiores ipsa minus consequatur error sunt, deleniti saepe aliquid quos inventore sequi. Necessitatibus id alias reiciendis, perferendis facere.",
      photo: pop,
      name: "Francisco Gomes",
      location: "Lisbon, Portugal",
    },
  ];
  const maxSlide = slides.length - 1;

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlide ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlide : prev - 1));
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") previousSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="max-w-[100rem] h-[40rem] mx-auto relative overflow-hidden">
      <hr />
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute top-0 w-full h-[50rem] flex items-center justify-center transition-transform duration-1000"
          style={{ transform: `translateX(${100 * (index - currentSlide)}%)` }}
        >
          <div className="w-[65%] relative  before:absolute before:-top-[5.7rem] before:-left-[6.8rem] before:text-[20rem] before:leading-none before:text-primary before:z-[-1]">
            <h5 className="text-[2.25rem] font-bold mb-6">{slide.header}</h5>
            <blockquote className="sm:text-lg mb-[3.5rem] text-sm text-[#666]">
              {slide.text}
            </blockquote>
            <address className="ml-12 grid grid-cols-[6.5rem_1fr] gap-x-8 not-italic">
              <img
                src={slide.photo}
                alt={slide.name}
                className="row-span-2 w-[6.5rem] rounded-full object-cover"
              />
              <h6 className="text-sm font-medium self-end m-0">{slide.name}</h6>
              <p className="text-sm">{slide.location}</p>
            </address>
          </div>
        </div>
      ))}

      <button
        className="absolute top-1/2 left-[6%] transform -translate-x-1/2 -translate-y-1/2  bg-[rgba(255,255,255,0.7)] text-[#333] rounded-full w-[5.5rem] h-[5.5rem] text-[3.25rem] cursor-pointer border-none font-inherit"
        onClick={previousSlide}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-[6%] transform translate-x-1/2 -translate-y-1/2  bg-[rgba(255,255,255,0.7)] text-[#333] rounded-full w-[5.5rem] h-[5.5rem] text-[3.25rem] cursor-pointer border-none font-inherit"
        onClick={nextSlide}
      >
        →
      </button>

      <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full mr-[1.75rem] cursor-pointer transition-all duration-500 ${
              currentSlide === index
                ? "bg-white opacity-100"
                : "bg-[#b9b9b9] opacity-70"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
