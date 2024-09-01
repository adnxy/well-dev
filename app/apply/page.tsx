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
    // <div classNameName="container mx-auto px-4 py-12 mb-10">
    //   <div classNameName="flex flex-col items-center justify-center">
    //     <h1 classNameName="text-2xl text-gray-100 font-medium leading-tight mb-4 mt-10">
    //       Choose pricing that works for you
    //     </h1>
    //     <h2 classNameName="text-m text-gray-100 font-medium leading-snug mb-10">
    //       One day delivery. No contract, build pixel-perfect landing pages and
    //       apps
    //     </h2>
    //   </div>
    //   <div classNameName="flex flex-wrap justify-center gap-8">
    //     <div classNameName="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
    //       <h2 classNameName="text-xl font-semibold text-center mb-6">No-Code</h2>
    //       <p classNameName="text-center text-lg font-bold mb-6">$500 /mo</p>

    //       <ul classNameName="text-sm mb-6">
    //         <li classNameName="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             classNameName=" mr-2"
    //           />
    //           Unlimited Revisions
    //         </li>
    //         <li classNameName="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             classNameName=" mr-2"
    //           />
    //           Responsive Design
    //         </li>
    //         <li classNameName="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             classNameName=" mr-2"
    //           />
    //           SEO Optimized
    //         </li>

    //         <li classNameName="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             classNameName=" mr-2"
    //           />
    //           24/7 Support
    //         </li>
    //         <li classNameName="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             classNameName=" mr-2"
    //           />
    //           Integrations
    //         </li>
    //       </ul>

    //       <button classNameName="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
    //         Get Started
    //       </button>
    //       <div classNameName="flex flex-row gap-4 mt-5">
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    //           alt="Figma"
    //           width="25"
    //           height="25"
    //           classNameName="mb-5"
    //         />
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webflow/webflow-original.svg"
    //           alt="Figma"
    //           width="25"
    //           height="25"
    //           classNameName="mb-5"
    //         />
    //         <Image
    //           src={Framer}
    //           alt="Figma"
    //           width="70"
    //           height="25"
    //           classNameName="mb-5"
    //         />
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    //           alt="Figma"
    //           width="25"
    //           height="25"
    //           classNameName="mb-5"
    //         />
    //       </div>
    //       <p classNameName="text-gray-500 text-center text-sm ">
    //         Cancel or pause anytime
    //       </p>
    //     </div>

    //     <div className="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
    //       <h2 className="text-xl font-semibold text-center mb-6">Web App</h2>
    //       <p className="text-center text-lg font-bold mb-6">$1000 /mo</p>

    //       <ul className="text-sm mb-6">
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Unlimited Revisions
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Scalable Architecture
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Advanced Security
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Cloud Integration
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Real-time Data
    //         </li>
    //       </ul>
    //       <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
    //         Get Started
    //       </button>
    //      
    //       <p className="text-gray-500 text-center text-sm ">
    //         Cancel or pause anytime
    //       </p>
    //     </div>
    //     {/* Mobile Apps Box */}
    //     <div className="w-full md:w-96 rounded overflow-hidden shadow-lg bg-white p-8">
    //       {" "}
    //       {/* Increased width and padding */}
    //       <h2 className="text-xl font-semibold text-center mb-6">Mobile App</h2>
    //       <p className="text-center text-lg font-bold mb-6">$1200 /mo</p>
    //       <ul className="text-sm mb-6">
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Unlimited Revisions
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           iOS & Android
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Performance Optimized
    //         </li>
    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Pixel-perfect UI
    //         </li>

    //         <li className="mb-3 flex items-center">
    //           <Image
    //             src={Done}
    //             width="22"
    //             height="22"
    //             alt="Done"
    //             style={{ color: "#393939" }}
    //             className=" mr-2"
    //           />
    //           Push Notifications
    //         </li>
    //       </ul>
    //       <button className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded">
    //         Get Started
    //       </button>
    //       <div className="flex flex-row gap-4 mt-5">
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg"
    //           alt="Apple"
    //           width="25"
    //           height="25"
    //           className="mb-5"
    //         />
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
    //           alt="Android"
    //           width="25"
    //           height="25"
    //           className="mb-5"
    //         />
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    //           alt="Rect"
    //           width="25"
    //           height="25"
    //           className="mb-5"
    //         />
    //         <Image
    //           src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    //           alt="Flutter"
    //           width="25"
    //           height="25"
    //           className="mb-5"
    //         />
    //       </div>
    //       <p className="text-gray-500 text-center text-sm ">
    //         Cancel or pause anytime
    //       </p>
    //     </div>
    //     <div className="mt-10">
    //       <h3 className="text-center mb-10 mt-5 text-2xl text-gray-100 font-medium">
    //         What Our Customers Say
    //       </h3>
    //       <div className="flex overflow-x-auto space-x-4 p-4">
    //         {/* Testimonial Box */}
    //         <div className="min-w-[200px] rounded overflow-hidden shadow-lg bg-white p-6">
    //           <img
    //             src="https://via.placeholder.com/150"
    //             alt="User"
    //             className="w-15 h-15 rounded-full mx-auto mb-4"
    //           />
    //           <p className="text-center font-medium">John Doe</p>
    //           <p className="text-center text-sm text-gray-600">
    //             CEO at ExampleCorp
    //           </p>
    //           <p className="text-center text-gray-500 mt-4">
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //             non risus. Suspendisse lectus tortor."
    //           </p>
    //         </div>
    //         {/* Repeat for more testimonials */}
    //         <div className="min-w-[200px] rounded overflow-hidden shadow-lg bg-white p-6">
    //           <img
    //             src="https://via.placeholder.com/150"
    //             alt="User"
    //             className="w-15 h-15 rounded-full mx-auto mb-4"
    //           />
    //           <p className="text-center font-medium">Jane Smith</p>
    //           <p className="text-center text-sm text-gray-600">
    //             Marketing Director
    //           </p>
    //           <p className="text-center text-gray-500 mt-4">
    //             "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget
    //             arcu dictum varius duis at."
    //           </p>
    //         </div>
    //         <div className="min-w-[200px] rounded overflow-hidden shadow-lg bg-white p-6">
    //           <img
    //             src="https://via.placeholder.com/150"
    //             alt="User"
    //             className="w-15 h-15 rounded-full mx-auto mb-4"
    //           />
    //           <p className="text-center font-medium">Jane Smith</p>
    //           <p className="text-center text-sm text-gray-600">
    //             Marketing Director
    //           </p>
    //           <p className="text-center text-gray-500 mt-4">
    //             "Dignissim cras tincidunt lobortis feugiat vivamus at augue eget
    //             arcu dictum varius duis at."
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Designed for crafting unique solutions
          </h2>
          <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Here at Applyinbox we focus on markets where technology and inovation can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl text-zinc-800 font-semibold">No-code</h3>
            <p className="font-light text-gray-500 sm:text-lg text-zinc-800">
              Best option for personal use & for your next project.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-zinc-800">$400</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600">Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Team size: <span className="font-semibold">1 developer</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="bg-blue-300 text-teal-900 px-10 py-3 rounded-md hover:bg-blue-200 hover:text-teal-900 font-medium"
              >
              Get started
            </a>
            <div className="flex flex-row justify-center gap-4 mt-5">


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
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold text-zinc-800">Web-app</h3>
            <p className="font-light text-zinc-800 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p>
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-zinc-800">$600</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600">Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="bg-blue-300 text-teal-900 px-10 py-3 rounded-md hover:bg-blue-200 hover:text-teal-900 font-medium"
              >
              Get started
            </a>
            <div className="flex flex-row justify-center items-center gap-4 mt-5">
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
          </div>

          <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibol text-zinc-800d">Mobile-app</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-zinc-800">
              Best for large scale uses and extended redistribution rights.
            </p>

            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-5xl font-extrabold text-zinc-800">$800</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600">Individual configuration</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >No setup, or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Team size:{" "}
                  <span className="font-semibold">100+ developers</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="text-zinc-600" >
                  Free updates: <span className="font-semibold">36 months</span>
                </span>
              </li>
              
            </ul>

            <a
              href="#"
              className="bg-blue-300 text-teal-900 px-10 py-3 rounded-md hover:bg-blue-200 hover:text-teal-900 font-medium"
              >
              Get started
            </a>
            <div className="flex flex-row justify-center gap-4 mt-5">
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
          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default PricingPage;
