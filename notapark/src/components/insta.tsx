import ins from "../assets/Instagram.svg";
const insta = () => {
  const handleButtonClick = () => {
    window.open("https://www.instagram.com/nota.park/", "_blank");
  };
  return (
    <div className=" block lg:hidden">
      <button
        onClick={handleButtonClick}
        className="fixed flex justify-center rounded-[50%] bg-inherited border-2 border-[black] bottom-20 right-10 w-10 h-10 items-center cursor-pointer transition-transform transform hover:scale-125 group bg-white "
      >
        <img src={ins} alt="Instagram" className="w-6 h-6  " />
      </button>
    </div>
  );
};

export default insta;
