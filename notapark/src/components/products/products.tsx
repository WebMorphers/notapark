
import imgOne from '../../assets/1.png'
import imgTwo from '../../assets/2.png'
import imgThree from '../../assets/3.png'
import './products.css'

const products=[
    {
      id:1,
      title: "Life-Time & Secure Platform",
      description:"Upgrade your wardrobe today with our latest clothing designs",
      size:"S M L XL",
      quality: "100% Cotton",
      image: imgOne
  },
    {
    id:2,
    title: "The Choice Is Yours",
    description:"Get your hoodie , and get ready to skate",
    size:"S M L XL",
    quality: "100% Cotton",
    image:imgTwo
  
  },
    {
    id:3,
    title: "Papers Reviewing",
    description:"The perfect blend of style and comfort. Get yours now! ",
    size:"S M L XL",
    quality: "100% Cotton",
    image:imgThree
  }
  ]
const Products = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3 '>
            {products.map((product) =>(
            <div className='flex  flex-col p-8'>
                <div className='bg-gradient-to-t relative from-gray-500 to-slate-300 flex items-center justify-center'>
                    <img src={product.image} />
                    <div className='absolute top-2 right-2 text-xs font-semibold bg-amber-400 p-1 px-2 rounded-3xl border-2 pointer-events-none border-black bg-opacity-50'>
                    {product.size}
                </div>
                <div className='absolute top-2 left-2 text-xs font-semibold bg-gray-600 p-1 px-2 rounded-3xl bg-opacity-50 pointer-events-none'>
                    {product.quality}
                </div>
                </div>
                <div>
                    <h1 className='title text-xl'>{product.title}</h1>
                    <p className='description opacity-90 text-sm '>{product.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Products