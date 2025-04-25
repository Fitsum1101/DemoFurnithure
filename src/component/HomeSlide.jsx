// import heroImage from "./images/couch.png";

// function HomeSlide() {
//   return (
//     <div className="w-full pt-16">
//       <div className="h-[75vh] bg-[#457b66]">
//         <div className="   w-[972px]  m-auto gap-4  flex justify-around">
//           <div className="text-white flex gap-2 -translate-x-0  flex-col self-center basis-[35rem]">
//             <h1 className="text-5xl relative capitalize font-bold">
//               Timeless pieces
//               <span className="bg-[#F9BF29] text-[.5rem] text-gray-900 p-2 rounded-full absolute top-0 right-0 italic">
//                 and
//               </span>
//               <br />
//               moder living
//             </h1>
//             <p className="italic text-gray-300 text-lg">
//               A curated selection of furniture and decor that bridges the gap
//               between classic design and contemporary lifestyles. Explore our
//               collection
//             </p>
//             <button className="self-center duration-500  text-xl font-bold flex align-middle justify-center px-6 py-2 mt-2 text-[#333] bg-[#F9BF29] hover:bg-[#F9BF29] rounded-[3rem] border">
//               Explore
//             </button>
//           </div>
//           <div className="h-full w-fill">
//             <img
//               className="h-fill w-fill hidden sm:block "
//               src={heroImage}
//               alt="myheroimage"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HomeSlide;

import heroImage from "./images/couch.png";

function HomeSlide() {
  return (
    <div className="w-full pt-4 sm:pt-8 md:pt-12 lg:pt-16">
      <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] bg-[#457b66] flex items-center px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            <div className="text-white flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-4 items-center md:items-start text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl relative capitalize font-bold">
                Timeless pieces
                <span className="bg-[#F9BF29] hidden md:block text-[.4rem] sm:text-[.5rem] md:text-[.5rem] lg:text-[.5rem] text-gray-900 p-1 sm:p-2 md:p-2 lg:p-2 rounded-full absolute top-0 right-0 italic">
                  and
                </span>
                <br />
                modern living
              </h1>
              <p className="italic text-gray-300 text-base sm:text-base md:text-lg lg:text-lg">
              Discover beautifully crafted furniture that blends heritage design with modern-day function. At FURNI, we believe your space should reflect your story—elegant, comfortable, and uniquely you.Start your journey to a more inspiring home today.
              </p>
              <button className="duration-500 text-base sm:text-lg md:text-xl lg:text-xl font-bold flex items-center justify-center px-4 sm:px-5 md:px-6 lg:px-6 py-2 mt-2 text-[#333] bg-[#F9BF29] hover:bg-[#F9BF29]/80 rounded-[3rem] border">
                Explore
              </button>
            </div>

            <div className="hidden md:flex h-full items-center justify-end">
              <img
                className="h-full max-h-[60vh] lg:max-h-[70vh] w-auto object-cover"
                src={heroImage}
                alt="Modern furniture"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
