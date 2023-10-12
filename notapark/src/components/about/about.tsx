 import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const About = () => {
  return (
    <div className="bg-gray-200 p-4  flex justify-center items-center flex-col">
      <h1 className="text-2xl mb-4 max-md:text-xl">Unique Design, Limited Edition , Superior Quality , Made In Morocco</h1>

      <div className="flex justify-center items-center  ">
        <a href="#1"><img src={img1} alt="Image 1" className="transition-transform transform hover:scale-125 " /></a>
        <a href="#2"><img src={img2} alt="Image 2" className="transition-transform transform hover:scale-125" /></a>
        <a href="#2"><img src={img3} alt="Image 3" className="transition-transform transform hover:scale-125" /></a>
      </div>
    </div>
  );
};

export default About;
