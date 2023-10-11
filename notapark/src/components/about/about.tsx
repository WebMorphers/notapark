import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const About = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl mb-4">About Page</h1>
      <div className='flex justify-center '>
        <div className="relative w-full h-96 overflow-hidden left-0 right-0 transform -translate-1/2 ">
          <img src={img1} alt="Image 1" className="absolute transition-transform transform hover:scale-125 max-sm:w-64" />
          <img src={img2} alt="Image 2" className="absolute transition-transform transform hover:scale-125 ml-40  max-md:ml-32 max-sm:w-64 max-sm:ml-24 " />
          <img src={img3} alt="Image 3" className="absolute transition-transform transform hover:scale-125 ml-96  max-md:ml-64 max-sm:w-64 max-sm:ml-48" />
        </div>

    </div>
    </div>
  );
};

export default About;
