
import imgOne from '../../assets/1.png'
import imgTwo from '../../assets/2.png'
import imgThree from '../../assets/3.png'

const products=[
    {
      id:1,
      title: "Life-Time & Secure Platform",
      subtitle:"Benefits of Full Conferences Platform",
      description:"New Era of Exposing Moroccan Academic Conferences with Trending Technologies and Customized Delivered Services : Logos, Flyers, Generated Certificates of Attendance, Honorory Letters.",
      image: imgOne
  },
    {
    id:2,
    title: "Collect Submissions",
    subtitle:"Papers/Posters Submissions",
    description:"Delegate Registration Process for Conference Papers and Posters Submissions in your Platform.",
    image:imgTwo
  
  },
    {
    id:3,
    title: "Papers Reviewing",
    subtitle:"and Decision Notification",
    description:"Add Reviewers, Assign Submissions. A simple login process and gateway to an intuitive, peerless reviewer experience.",
    image:imgThree
  }
  ]
const Products = () => {
  return (
    <div>
        <div>
            {products.map((product) =>(
            <div className='flex'>
                <div>
                <img src={product.image} />
                </div>
                <div>
                    
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Products