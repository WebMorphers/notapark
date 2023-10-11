import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const About = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl mb-4">About Page</h1>

      <div className="relative w-full h-96 overflow-hidden">
        <img src={img1} alt="Image 1" className="absolute transition-transform transform hover:scale-125" />
        <img src={img2} alt="Image 2" className="absolute transition-transform transform hover:scale-125 ml-40" />
        <img src={img3} alt="Image 3" className="absolute transition-transform transform hover:scale-125 ml-96" />
      </div>
    </div>
  );
};

export default About;
