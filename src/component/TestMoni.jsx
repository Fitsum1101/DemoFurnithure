import React, { useState, useEffect } from "react";
import pop from "./images/nordic char.png";
const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      header: "Best quality with comfort ever!",
      text: "I couldn't be happier with my recent furniture purchase from FURNI! I was looking for something modern but inviting to update my living room, and their site made the whole experience simple and fun. The sofa I purchased is not only incredibly stylish, but the fabric and build quality were far superior to what I expected. It has just the right balance of firm support and cozy comfort. And the price was very reasonable—truthfully, I thought I'd have to spend much more to get this kind of design. I've received so many compliments from guests. FURNI has gained a customer for life!",
      photo: pop,
      name: "Aarav Lynn",
      location: "San Francisco, USA",
    },
    {
      header: "Trustworthy Quality bent with Nature",
      text: "Buying furniture online always made me nervous, but FURNI changed that completely. I purchased a full bedroom set, and every piece arrived just as beautiful as shown on the website. What really impressed me was the attention to ergonomic design—the bed frame and chairs are comfortable and thoughtfully built, for better sleep and more relaxing evenings. The finishes feel premium, the wood is sturdy, and the look? Absolutely elegant but practical. And all this came at a price I could actually afford. I’m honestly proud to have FURNI pieces in my home. Highly recommended!"
,
      photo: pop,
      name: "Miyah Miles",
      location: "London, UK",
    },
    {
      header: "Ergonomic Design That Powers Our Workdays",
      text:"Our startup needed functional and sleek furniture for our small office, and we’re so glad we found FURNI. From the moment we placed the order, the service was professional and helpful. We went with modern desks and ergonomic chairs, and let me tell you—they are a game-changer. The design is clean and professional, perfect for a creative workspace. But more than that, the ergonomics have truly boosted our productivity—no more backaches by midday! Everything looks polished and premium, but the pricing stayed within our tight budget. FURNI helped us create a space that reflects our brand and keeps our team comfortable. Couldn't ask for more Thanks!"

,
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
