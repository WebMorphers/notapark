import "./footer.css";
import { useEffect } from "react";

const footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        if (targetId) {
          scrollToSection(targetId);
        }
      });
    });
  }, []);
  return (
    <div className="texxt p-6 bg-slate-300 ">
      <div className="flex flex-row max-sm:flex-col gap-3  texxt ">
        <div className=" w-full flex flex-row gap-24  max-md:gap-5 max-md:flex-col max-md:text-sm pl-12 ">
          <div>
            <ul>
              <li className=" text-xl ">COLLECTIONS</li>
              <li>
                <a className="hover:text-amber-300" href="#">
                  Life of Skateboarders{" "}
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="#">
                  The Choice Is Yours
                </a>
              </li>
              <li>
                <a className="hover:text-amber-300" href="#">
                  STRAWBERRY HOODIE
                </a>
              </li>
            </ul>
          </div>
           
          <div>
            <ul>
              <li className="text-xl">SUPPORT</li>
              <li>
                <a className="hover:text-amber-300" href="#">
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  className="hover:text-amber-300"
                  href="#"
                  onClick={() => scrollToSection("products")}
                >
                  ITEMS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="md:mr-10 max-sm:pl-12  ">
            <li className="text-xl">CONNECT</li>
            <li>
              <a
                className="hover:text-amber-300"
                target="-blank"
                href=" https://www.instagram.com/nota.park/"
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-center     ">
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
