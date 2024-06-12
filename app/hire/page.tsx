import React from "react";
import Done from "../../public/done.png";
import Image from "next/image";
import Framer from "../../public/framer-logo.svg";

// export const categoryFilters = [
//   { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"},
//   { name: "Framer", img: "https://cdn.icon-icons.com/icons2/2289/PNG/512/framer_logo_icon_145269.png"},
//   { name: "Webflow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"},
//   { name: "Tailwind", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"},
//    ]

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 py-12 mb-10">
            <div className="flex flex-col items-center justify-center">
  <h1 className="text-3xl text-gray-100 font-medium leading-tight mb-4">
    Choose pricing that works for you
  </h1>
  <h2 className="text-l text-gray-100 font-medium leading-snug mb-10">
  No contract, one day delivery. Build pixel-perfect landing pages and apps.
  </h2>
</div>
      <div className="flex flex-wrap justify-center gap-8">



        <div className="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
          <h2 className="text-xl font-semibold text-center mb-6">
            Landing Page
          </h2>
          <p className="text-center text-lg font-bold mb-6">$399 /mo</p>



          <ul className="text-sm mb-6">
          <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Unlimited Revisions
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Responsive Design
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              SEO Optimized
            </li>

            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              24/7 Support
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
               Integrations
            </li>
          </ul>

          <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
          <div className="flex flex-row gap-4 mt-5">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
              alt="Figma"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
              alt="Figma"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src={Framer}
              alt="Figma"
              width="70"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Figma"
              width="25"
              height="25"
              className="mb-5"
            />
          </div>
          <p className="text-gray-500 text-center text-sm ">
            Cancel or pause anytime
          </p>
        </div>

        <div className="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
          <h2 className="text-xl font-semibold text-center mb-6">Web App</h2>
          <p className="text-center text-lg font-bold mb-6">$699 /mo</p>

          <ul className="text-sm mb-6">
          <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Unlimited Revisions
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Scalable Architecture
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Advanced Security
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Cloud Integration
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Real-time Data
            </li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
          <div className="flex flex-row gap-4 mt-5">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="Rect"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg"
              alt="Vue.JS"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-plain.svg"
              alt="Next.JS"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
              alt="Webflow"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              alt="Tailwind"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg"
              alt="Laravel"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
              width="25"
              height="25"
              className="mb-5"
            />
          </div>
          <p className="text-gray-500 text-center text-sm ">
            Cancel or pause anytime
          </p>
        </div>
        {/* Mobile Apps Box */}
        <div className="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
          {" "}
          {/* Increased width and padding */}
          <h2 className="text-xl font-semibold text-center mb-6">Mobile App</h2>
          <p className="text-center text-lg font-bold mb-6">$699 /mo</p>

          <ul className="text-sm mb-6">
          <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Unlimited Revisions
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              iOS & Android
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Performance Optimized
            </li>
            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Pixel-perfect UI
            </li>

            <li className="mb-3 flex items-center">
              <Image
                src={Done}
                width="22"
                height="22"
                alt="Done"
                style={{ color: "#393939" }}
                
                className=" mr-2"
              />
              Push Notifications
            </li>
          </ul>
          <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
            Get Started
          </button>
          <div className="flex flex-row gap-4 mt-5">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
              alt="Apple"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
              alt="Android"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              alt="Rect"
              width="25"
              height="25"
              className="mb-5"
            />
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
              alt="Flutter"
              width="25"
              height="25"
              className="mb-5"
            />
          </div>
          <p className="text-gray-500 text-center text-sm ">
            Cancel or pause anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
