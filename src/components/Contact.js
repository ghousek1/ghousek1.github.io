import React, { useContext } from "react";

import { ThemeContext } from "../context/ThemeContext";
function Contact() {
  const [userThemeMode] = useContext(ThemeContext);

  return (
    <>
      <div
        id="contacts"
        className="section-padding section-margin flex w-full flex-col  items-center "
      >
        <div className="header-line flex w-full items-center pb-8">
          <span className="accent mr-4 font-monospace text-xl">05.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600]">
            Contact
          </h3>
        </div>

        <div
          id="contact_box"
          className={` ${
            userThemeMode === "dark" ? "shadow-[#151515]" : "shadow-gray-400"
          }
        div-back relative flex  h-[34rem] w-full flex-col items-center rounded p-8 shadow-2xl md:h-[30rem]  md:flex-row `}
        >
          <div className="flex h-[40%] w-[100%] flex-col items-center justify-center md:h-full ">
            <div className="slate p-5 font-handy text-4xl  font-[600] lg:text-6xl">
              Ghouse
            </div>
            <div
              className="slate text-[1rem]  font-[600] leading-normal  tracking-tight
                          opacity-60 md:text-[1.2rem] lg:text-2xl "
            >
              ghousek1@outlook.com
            </div>
          </div>

          <div className="h-full w-[100%] flex flex-col">
            <div className="slate text-[1.2rem] leading-normal md:text-[1.5rem] pb-3">
              Drop a Message
            </div>

            <div className="flex flex-1 flex-col  items-start justify-evenly">
              <input  type="text" placeholder="Name" className="slate border p-2 md:p-3 w-[95%] md:w-[85%]"  />
              <input  type="email" placeholder="Email" className="slate border p-2 md:p-3 w-[95%] md:w-[85%] "  />
              <textarea  type="text" placeholder="Message" className="resize-none slate border p-4 md:p-5 w-[95%] md:w-[85%]  " />
              <button className="slate border px-6 py-2 " >Send</button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
