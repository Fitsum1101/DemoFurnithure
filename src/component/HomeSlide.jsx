import heroImage from "./images/couch.png";

function HomeSlide() {
  return (
    <div className="w-full">
      <div className="h-[75vh] bg-[#457b66]">
        <div className="   w-[972px]  m-auto gap-4  flex justify-around">
          <div className="text-white flex gap-2 -translate-x-0  flex-col self-center basis-[35rem]">
            <h1 className="text-5xl relative capitalize font-bold">
              Timeless pieces
              <span className="bg-[#F9BF29] text-[.5rem] text-gray-900 p-2 rounded-full absolute top-0 right-0 italic">
                and
              </span>
              <br />
              moder living
            </h1>
            <p className="italic text-gray-300 text-lg">
              A curated selection of furniture and decor that bridges the gap
              between classic design and contemporary lifestyles. Explore our
              collection
            </p>
            <button className="self-center duration-500  text-xl font-bold flex align-middle justify-center px-6 py-2 mt-2 text-[#333] bg-[#F9BF29] hover:bg-[#F9BF29] rounded-[3rem] border">
              Explore
            </button>
          </div>
          <div className="h-full w-fill">
            <img className="h-fill w-fill" src={heroImage} alt="myheroimage" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
