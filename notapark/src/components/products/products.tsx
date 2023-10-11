
import imgOne from '../../assets/1.png'
import imgTwo from '../../assets/2.png'
import imgThree from '../../assets/3.png'
import './products.css'

const products=[
    {
      id:1,
      title: "Life-Time & Secure Platform",
      description:"Upgrade your wardrobe today with our latest clothing designs",
      image: imgOne
  },
    {
    id:2,
    title: "The Choice Is Yours.",
    description:"Get your hoodie , and get ready to skate",
    image:imgTwo
  
  },
    {
    id:3,
    title: "Papers Reviewing",
    description:"The perfect blend of style and comfort. Get yours now! ",
    image:imgThree
  }
  ]
const Products = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3 mx-12'>
            {products.map((product) =>(
            <div className='flex flex-col p-8'>
                <div className='bg-gradient-to-t from-gray-500 to-slate-300 flex items-center justify-center'>
                    <img src={product.image} />
                </div>
                <div>
                    <h1 className='title text-xl'>{product.title}</h1>
                    <p className='description opacity-90 text-xs²'>{product.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Products