import "./footer.css";
const footer = () => {
  return (
    <div className="texxt ">
      <div className="flex flex-row max-md:flex-col   texxt ">
        <div className="w-full flex flex-row gap-24 ml-10 max-md:gap-5 max-md:flex-col max-md:text-sm  ">
          <div>
            <ul>
              <li className=" text-xl ">COLLECTIONS</li>
              <li>
                <a className="hover:text-amber-300" href="">
                  VALINA HOODIE
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="">CHOCOLATE HOODIE</a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="">STRAWBERRY HOODIE</a>
                
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-xl">ACCESORIES</li>
              <li>
                <a className="hover:text-amber-300" href="">
                  ALL ACCESSORIES
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="">
                  SHOES
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="">
                  HATS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="text-xl">SUPPORT</li>
              <li>
                <a className="hover:text-amber-300" href="">
                  ABOUT US
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="">
                  ITEMS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="md:mr-10 max-md:ml-10">
            <li className="text-xl">CONNECT</li>
            <li>
              <a className="hover:text-amber-300" href="">
                INSTAGRAM
              </a>
            </li>
            <li>
              <a className="hover:text-amber-300" href="">
                FACEBOOK
              </a>{" "}
            </li>
            <li>
              <a className="hover:text-amber-300" href="">
                TIKTOK
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 ">
        <h1>
          MADE WITH LOVE BY{" "}
          <span className="text-xl">
            <a href="https://webmorphers.org" target="_blank">
              @webmorphers
            </a>
          </span>
        </h1>{" "}
      </div>
    </div>
  );
};

export default footer;
