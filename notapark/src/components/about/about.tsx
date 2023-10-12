import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';

const About = () => {
  return (
    <div className="bg-gray-200 p-4 py-36">
       <div className='flex items-center'>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 ">
        <img
          src={img1}
          alt="Image 1"
          className="w-full h-auto transform transition-transform hover:scale-125"
        />
        <img
          src={img2}
          alt="Image 2"
          className="w-full h-auto transform transition-transform hover:scale-125"
        />
        <img
          src={img3}
          alt="Image 3"
          className="w-full h-auto transform transition-transform hover:scale-125"
        />
      </div>
      <div>
        <h1 className='text-3xl'> Popular Products</h1>
        <p className='text-sm'>Shop our collecton of graphic tees. All are screenprinted on
 our classic 100% cotton t-shirts. Mix and match with a wide
                variety of colors and graphics.
Our collection is available in sizes S, M & L.</p><br/>
      </div>
      </div>
    </div>
  );
};

export default About;