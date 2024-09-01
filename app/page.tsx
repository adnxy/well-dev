import { ProjectInterface } from "@/common.types";
import Categories from "./components/Categories";
import ProjectCard from "./components/ProjectCard";
import LoadMore from "./components/LoadMore";
import { fetchAllProjects } from "@/lib/actions";
import localImage from "../public/logo.svg"; // Adjust the path according to your project structure
import projectDefault from "../public/project.png";
import projectDefault2 from "../public/project2.jpg";
import projectDefault3 from "../public/project3.jpg";
import projectDefault4 from "../public/project-dribble1.png";
import projectDefault6 from "../public/project6.jpg";
import projectDefault7 from "../public/project7.jpg";
import projectDefault5 from "../public/project-dribble2.png";
import projectDefault8 from "../public/project-dribble3.png";
import projectDefault9 from "../public/project-dribble4.png";
import projectDefault10 from "../public/project-dribble5.png";
import projectDefault11 from "../public/project-dribble6.png";
import uber from "../public/uber.svg";
import adobe from "../public/adobe.svg";
import pg from "../public/procter-and-gamble.svg";
import wordpress from "../public/wordpress.svg";
import airbnb from "../public/airbnb.svg";
import rb from "../public/red-bull.svg";
import grab from "../public/grab.svg";

import Button from "./components/Button";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import Image from "next/image";
import Framer from "../public/framer-logo.svg";
import Faq from "./components/FAQ";
import ResumeUpload from "./components/ResumeUpload";

// import "@fontsource/space-grotesk/400.css"; // Specify weight
// import "@fontsource/space-grotesk/400-italic.css"; // Specify weight and style

type SearchParams = {
  category?: string | null;
  endcursor?: string | null;
};

type Props = {
  searchParams: SearchParams;
};

type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

const Home = async ({ searchParams: { category, endcursor } }: Props) => {
  // const data = await fetchAllProjects(category, endcursor) as ProjectSearch

  const yourBackgroundImage = "../public/pattern-background.png";

  const data = {
    projectSearch: {
      edges: [
        {
          node: {
            id: "1",
            title: "Saas Landing Page",
            image: projectDefault4,
            createdBy: {
              id: "1",
              name: "Saas Landing Page",
              avatarUrl: localImage,
            },
          },
        },
        {
          node: {
            id: "2",
            title: "Resume Template",
            image: projectDefault2,
            createdBy: {
              id: "2",
              name: "Resume Template",
              avatarUrl: localImage,
            },
          },
        },
        {
          node: {
            id: "2",
            title: "Fintech",
            image: projectDefault7,
            createdBy: { id: "2", name: "Fintech", avatarUrl: localImage },
          },
        },
        {
          node: {
            id: "2",
            title: "Job Board",
            image: projectDefault10,
            createdBy: { id: "2", name: "Job Board", avatarUrl: localImage },
          },
        },
        {
          node: {
            id: "2",
            title: "Law Firm",
            image: projectDefault5,
            createdBy: { id: "2", name: "Law Firm", avatarUrl: localImage },
          },
        },
        {
          node: {
            id: "2",
            title: "Software Agency",
            image: projectDefault8,
            createdBy: {
              id: "2",
              name: "Software Agency",
              avatarUrl: localImage,
            },
          },
        },
        {
          node: {
            id: "2",
            title: "Dentist Template",
            image: projectDefault3,
            createdBy: {
              id: "2",
              name: "Dentist Template",
              avatarUrl: localImage,
            },
          },
        },
        {
          node: {
            id: "2",
            title: "Fashion Blog",
            image: projectDefault11,
            createdBy: { id: "2", name: "Fashion Blog", avatarUrl: localImage },
          },
        },
      ],
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: true,
        startCursor: "test",
        endCursor: "test",
      },
    },
  };

  const faqData = [
    {
      question: "What is the purpose of this service?",
      answer:
        "Our service helps automate job applications to save you time and increase your chances of getting hired.",
    },
    {
      question: "How do I upload my resume?",
      answer:
        "You can upload your resume using the upload button provided on the homepage.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for new users to explore our features.",
    },
    {
      question: "What types of jobs can I apply for?",
      answer:
        "You can apply for a wide range of jobs across various industries using our platform.",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      feedback: "This service saved me so much time! I landed a job within weeks.",
    },
    {
      name: "Jane Smith",
      feedback: "I love how easy it is to apply for multiple jobs at once!",
    },
  ];

  const projectsToDisplay = data?.projectSearch?.edges || [];

  if (projectsToDisplay.length === 0) {
    return (
      <section className="flexStart flex-col paddings">
        <Categories />

        <p className="no-result-text text-center">
          No projects found, go create some first.
        </p>
      </section>
    );
  }

  return (
    <section
      className="flexStart flex-col paddings mb-16"
      style={{
        backgroundImage: `url(${yourBackgroundImage})`,
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <h1 className="text-headline font-headline mt-40 mb-50 font-bold">
        You Upload The Resume, We Do The Rest
      </h1>
      <p className="text-subheadline font-subheadline mt-2">
        Auto apply to hundreds of jobs across the web and get interview invites.{" "}
      </p>
      <ResumeUpload />

      {/* New Section for Users Hired By */}
      <section className="flexStart flex-col paddings mb-16">
        <p className="text-subheadline font-subheadline mt-40 mb-5">
        Our customers had interviews with leading companies around the world.
        </p>
        <div className="flex justify-center items-center mt-4 space-x-8">
          <Image src={uber} alt="Uber" width={60} height={30} />
          <Image src={adobe} alt="Adobe" width={40} height={30} />
          <Image src={airbnb} alt="Airbnb" width={100} height={30} />
          <Image src={pg} alt="Procter and Gamble" width={60} height={30} />
          <Image src={wordpress} alt="Wordpress" width={40} height={30} />
          <Image src={grab} alt="Grab" width={80} height={30} />
          {/* <Image src={rb} alt="Red Bull" width={80} height={30} /> */}
        </div>
      </section>

      <div className="mb-30"></div>
      <section className="flexStart flex-col paddings mb-16">
        <h2 className="text-headline font-headline mt-10">How it works</h2>
        <p className="text-subheadline font-subheadline mt-2">
          Automate the way you apply to jobs.
        </p>
        <div className="flex justify-between mt-10">
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Step 1</h3>
            <p>Upload your resume</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Step 2</h3>
            <p>We apply to jobs across the web.</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Step 3</h3>
            <p>Schedule interviews and get weekly reports</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Step 4</h3>
            <p>Get Hired.</p>
          </div>
        </div>
      </section>
      <section className="flexStart flex-col paddings mb-16">
        <h2 className="text-headline font-headline mt-10">Benefits</h2>
        <p className="text-subheadline font-subheadline mt-2">
          Automate the way you apply to jobs.
        </p>
        <div className="flex justify-between mt-10">
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Benefit 1</h3>
            <p>Get more job opportunities.</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Benefit 2</h3>
            <p>Save time on applications.</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Benefit 3</h3>
            <p>Receive personalized job matches.</p>
          </div>
          <div className="border p-4 m-2 rounded-md shadow-md w-1/4">
            <h3 className="font-bold">Benefit 4</h3>
            <p>Track your application progress.</p>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Pricing
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at Applyinbox we focus on markets where technology and
              inovation can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold text-zinc-800">
                Normal
              </h3>
              <p className="font-light text-zinc-800 sm:text-lg dark:text-gray-400">
                Relevant for multiple users, extended & premium support.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-zinc-800">
                  $25
                </span>
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-zinc-600">
                    Individual configuration
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
                  <span className="text-zinc-600">
                    No setup, or hidden fees
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
                  <span className="text-zinc-600">
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
                  <span className="text-zinc-600">
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
                  <span className="text-zinc-600">
                    Free updates:{" "}
                    <span className="font-semibold">24 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-blue-300 text-teal-900 px-10 py-3 rounded-md hover:bg-blue-200 hover:text-teal-900 font-medium"
              >
                Get started
              </a>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold text-zinc-800">
                Intensive
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-zinc-800">
                Best for large scale uses and extended redistribution rights.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-zinc-800">
                  $49
                </span>
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
                  <span className="text-zinc-600">
                    Individual configuration
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
                  <span className="text-zinc-600">
                    No setup, or hidden fees
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
                  <span className="text-zinc-600">
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
                  <span className="text-zinc-600">
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
                  <span className="text-zinc-600">
                    Free updates:{" "}
                    <span className="font-semibold">36 months</span>
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="bg-blue-300 text-teal-900 px-10 py-3 rounded-md hover:bg-blue-200 hover:text-teal-900 font-medium"
              >
                Get started
              </a>
            </div>

            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold text-zinc-800">
                One-Time Add-On
              </h3>
              <p className="font-light text-zinc-800 sm:text-lg dark:text-gray-400">
                One-time payment for resume redesign.
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold text-zinc-800">
                  $99
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  /one-time
                </span>
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
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-zinc-600">Lifetime access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-zinc-600">No recurring fees</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-zinc-600">
                    All future updates included
                  </span>
                </li>
              </ul>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2" />
                <label htmlFor="terms" className="text-teal-900">
                  Include resume redesign
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Testimonials Section */}
      <section className="flexStart flex-col paddings mb-16">
        <h2 className="text-headline font-headline mt-10">What our users are saying</h2>
        <div className="flex flex-col mt-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border p-4 m-2 rounded-md shadow-md">
              <p className="font-bold">{testimonial.name}</p>
              <p>{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      <Faq faqData={faqData} />
    </section>
  );
};

export default Home;
