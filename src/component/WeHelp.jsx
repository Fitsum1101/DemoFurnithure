// import wehelp1 from "./images/img-grid-3 1.png";
// import wehelp2 from "./images/Mask group.png";
// import wehelp3 from "./images/img-grid-2 1.jpg";

// function WeHelp() {
//   return (
//     <div className="w-[1100px] m-auto my-20 ">
//       <hr />
//       <div className="grid grid-cols-2 gap-6 py-10 ">
//         <div className="relative">
//           <img src={wehelp2} alt="wehelp" className="w-64" />
//           <img
//             src={wehelp3}
//             alt="wehelp"
//             className="w-32 absolute top-0 right-32"
//           />
//           <img
//             src={wehelp1}
//             alt="wehelp"
//             className="w-44 absolute top-40 left-44"
//           />
//         </div>
//         <div className="space-y-4">
//           <h1 className="font-bold text-2xl capitalize">
//             We help you make <br />
//             Modern Interior Design
//           </h1>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aut
//             cum aliquid officia nobis pariatur debitis similique laborum, id
//             neque optio ratione aliquam? Aspernatur vero numquam consequuntur
//             itaque nulla officia!
//           </p>
//           <ul className="grid grid-cols-2 gap-7 mt-4 font-thin text-sm">
//             <li className="list-disc">
//               aut cum aliquid officia nobis pariatur debitis similiq
//             </li>
//             <li className="list-disc">
//               ratione aliquam? Aspernatur vero numquam consequuntur itaque nulla
//               officia!
//             </li>
//             <li className="list-disc">
//               ratione aliquam? Aspernatur vero numquam consequuntur itaque nulla
//               officia
//             </li>
//             <li className="list-disc">
//               ratione aliquam? Aspernatur vero numquam consequuntur itaque nulla
//               officia
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WeHelp;

import wehelp1 from "./images/img-grid-3 1.png";
import wehelp2 from "./images/Mask group.png";
import wehelp3 from "./images/img-grid-2 1.jpg";

function WeHelp() {
  return (
    <div className="w-full px-4 sm:px-6 md:max-w-[1100px] mx-auto my-10 md:my-20">
      <hr className="mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-10">
        {/* Image Grid - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block relative h-[400px]">
          <img src={wehelp2} alt="Modern interior" className="w-64 absolute " />
          <img
            src={wehelp3}
            alt="Interior detail"
            className="w-32 absolute top-0 right-32 "
          />
          <img
            src={wehelp1}
            alt="Furniture piece"
            className="w-44 absolute top-40 left-44 "
          />
        </div>

        {/* Text Content - Always visible */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="font-bold text-2xl md:text-3xl capitalize">
            We help you make Modern Interior Design
          </h1>
          <p className="mx-auto md:mx-0 max-w-[500px] md:max-w-none">
          At FURNI, we believe furniture isn’t just functional—it’s reflection of your standard. That’s why we 
           blend modern design, 
            lasting comfort, and affordable quality to help you turn your space into a reflection of you. Whether 
             you're revamping your home or furnishing a new office, our curated collections are made to enhance 
              your lifestyle and uplift your everyday moments.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 font-thin text-sm">
            <li className="list-disc list-inside">
            Elegant, modern designs that suit every space
            </li>
            <li className="list-disc list-inside">
             Carefully crafted for long-lasting comfort and durability
            </li>
            <li className="list-disc list-inside">
            Smart, ergonomic furniture for better posture and productivity
            </li>
            <li className="list-disc list-inside">
            Affordable luxury—high style without the high cost
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeHelp;
