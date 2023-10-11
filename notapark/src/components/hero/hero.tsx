import "./hero.css";
import im from "../../assets/image.png";
const hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center top-0 relative pointer-events-none max-lg:mt-24   ">
        <img src={im} alt="" className="h-[55%] w-[55%] " />
        <h1
          className="text-4xl  max-sm:text-xl lg:text-6xl drop-shadow-2xl "
          id="h1"
        >
          Hoodies that skate with you
        </h1>
      </div>
    </>
  );
};

export default hero;
