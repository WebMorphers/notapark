import "./hero.css";
import im from "../../assets/image.png";
const hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center  ">
        <img src={im} alt="" className="h-auto w-[55%] object-cover max-sm:w-[100%] " />
        <h1
          className="text-4xl  max-sm:text-xl lg:text-6xl "
          id="h1"
        >
          Hoodies that skate with you
        </h1>
      </div>
    </>
  );
};

export default hero;
