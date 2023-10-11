import "./footer.css"
const footer = () => {
  return (
    <div >
        <div className="flex flex-row  texxt   ">
    <div className="w-full flex flex-row gap-24 ml-10 ">
        <div>
            <ul>
                <li className="text-xl mx-12">COLLECTIONS</li>
                <li>VALINA HOODIE</li>
                <li>CHOCOLATE HOODIE</li>
                <li>STRAWBERRY HOODIE</li> 
            </ul>
        </div>
        <div>
            <ul>
                <li className="text-xl">ACCESORIES</li>
                <li>ALL ACCESSORIES</li>
                <li>SHOES</li>
                <li>HATS</li> 
            </ul>
        </div>
        <div>
            <ul>
                <li className="text-xl">SUPPORT</li>
                <li>ABOUT US</li>
                <li>ITEMS</li> 
            </ul>
        </div> 
         </div>
         <div>
            <ul className="mr-10">
                <li className="text-xl">CONNECT</li>
                <li>INSTAGRAM</li>
                <li>FACEBOOK</li>
                <li>TIKTOK</li> 
            </ul>
        </div> 
        </div>

<div className="w-full flex justify-center "><h1>MADE WITH LOVE BY <span>@webmorphers</span></h1> </div>
         
         </div>
  )
}

export default footer