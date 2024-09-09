"use client"
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
import { FaCheck, FaCode, FaCube, FaFacebook, FaImage, FaPen, FaSearch, FaVideo } from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { CiDatabase, CiDesktop } from "react-icons/ci";
import { FaUpload, FaSearch as FaSearchIcon, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';
import { FaCheckSquare } from 'react-icons/fa'; // Import the checkbox icon

import Button from "./components/Button";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import Image from "next/image";
import Framer from "../public/framer-logo.svg";
import Faq from "./components/FAQ";
import ResumeUpload from "./components/ResumeUpload";
import { useEffect, useState, useRef } from 'react';
import styles from './page.module.css'; // Add this import

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
// export const revalidate = 60;

const Home = ({ searchParams: { category, endcursor } }: Props) => {
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

  const [visibleItems, setVisibleItems] = useState(1); // Start with one visible item
  const sectionRef = useRef<HTMLDivElement>(null);

  const jobApplications = [
    { title: "Software Engineer", company: "TechCorp", status: "Application Submitted", logo: pg },
    { title: "Software Engineer", company: "TechCorp", status: "Pending Application", logo: pg },
    { title: "Software Engineer", company: "TechCorp", status: "Interview Scheduled", logo: pg },
    // Add more items as needed
  ];

  useEffect(() => {
    const handleScroll = () => {
        if (sectionRef.current) {
            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight * 0.8) {
                setTimeout(() => {
                    setVisibleItems(prev => Math.min(prev + 1, jobApplications.length));
                }, 1000); // Delay of 1000ms (1 second) for a slower transition
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <div className="mt-60 text-center"> 
        <h1 className="text-4xl font-bold mb-6">Upload Your Resume, We Handle the Rest</h1>
        <p className="text-lg text-gray-600 mb-8"> 
          Auto-apply to hundreds of jobs and receive interview invites.
        </p>
        <ResumeUpload />
        
        {/* Updated Horizontal Scrolling Job Types Section */}
        <div className={styles.scrollContainer}>
          <div className={styles.scrollContent}>
            {[
              { type: "Software Developer", icon: <FaCode size={18} /> },
              { type: "Marketing", icon: <SiGooglemarketingplatform size={18} /> },
              { type: "SEO", icon: <FaSearch size={18} /> },
              { type: "UI/UX Design", icon: <MdDesignServices size={18} /> },
              { type: "Data Analyst", icon: <CiDatabase size={18} /> },
              { type: "Product Manager", icon: <CiDesktop size={18} /> },
              { type: "Content Writer", icon: <FaPen size={18} /> },
                { type: "3D Modelling", icon: <FaCube size={18} /> },
              { type: "Video Editing", icon: <FaVideo size={18} /> },
              { type: "Graphic Design", icon: <FaImage size={18} /> },
              { type: "Copywriting", icon: <FaPen size={18} /> },
              { type: "Social Media Manager", icon: <FaFacebook size={18} /> },
              // Duplicate items to create a seamless loop
              { type: "Software Developer", icon: <FaCode size={18} /> },
              { type: "Marketing", icon: <SiGooglemarketingplatform size={18} /> },
              { type: "SEO", icon: <FaSearch size={18} /> },
              { type: "UI/UX Design", icon: <MdDesignServices size={18} /> },
            ].map((job, index) => (
              <div key={index} className={`${styles.scrollItem} bg-slate-50 p-4 rounded-md flex items-center mx-2 shadow-sm`}>
                <span className="mr-2">{job.icon}</span>
                {job.type}
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="flexStart flex-col paddings mb-16">
        <p className="text-gray-500 mt-5 mb-5">
          Our customers have interviewed with leading companies worldwide.
        </p>
        <div className="flex justify-start items-center mt-4 space-x-8">
          <Image src={uber} alt="Uber" width={60} height={30} />
          <Image src={adobe} alt="Adobe" width={40} height={30} />
          <Image src={airbnb} alt="Airbnb" width={100} height={30} />
          <Image src={wordpress} alt="Wordpress" width={40} height={30} />
          <Image src={pg} alt="Procter and Gamble" width={60} height={30} />
          {/* <Image src={grab} alt="Grab" width={80} height={30} /> */}
          {/* <Image src={rb} alt="Red Bull" width={80} height={30} /> */}
        </div>
      </section>
      <section ref={sectionRef} className="flexStart flex-col paddings mb-16 w-full max-w-4xl mx-auto mt-20">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Applications</h2>
        <p className="text-lg text-gray-500">Effortlessly track your applications.</p>
        <div className="flex flex-col w-full">
          {jobApplications.map((application, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md transition-all duration-1000 ${
                index < visibleItems ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center">
                {/* <img src={application.logo} alt={`${application.company} logo`} className="w-12 h-12 mr-4 rounded-full" /> */}
                <div>
                  <h3 className="font-semibold text-lg">{application.title}</h3>
                  <p className="text-gray-600">{application.company}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                  application.status === "Application Submitted" ? "text-orange-800 bg-orange-200" :
                  application.status === "Pending Application" ? "text-yellow-800 bg-yellow-200" :
                  application.status === "Interview Scheduled" ? "text-green-800 bg-green-200" :
                  "text-gray-800 bg-gray-200"
                }`}>
                  {application.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      <div className="mb-30"></div>
      <section className="flex flex-col paddings mb-16 max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <p className="text-lg text-gray-500">Streamline your job application process.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaUpload className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={18} /> {/* Added icon */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Step 1</h3>
              <p>Upload your resume</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCheck className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={18} /> {/* Added icon */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Step 2</h3>
              <p>We apply to jobs across the web.</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCalendarAlt className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={18} /> {/* Added icon */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Step 3</h3>
              <p>Schedule interviews and get weekly reports</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaBriefcase className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={18} /> {/* Added icon */}
            <div>
              <h3 className="font-semibold text-xl mb-2">Step 4</h3>
              <p>Track your application progress and get hired.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col paddings mb-16 max-w-6xl mx-auto w-full">
        <div className="">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Benefits</h2>
          <p className="text-lg text-gray-500">Why choose our platform?</p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10">
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCheck className="text-green-500 mr-4 mt-1 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-semibold text-xl mb-2">Get more job opportunities</h3>
              <p className="text-gray-600">Access a wider range of job listings across multiple platforms.</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCheck className="text-green-500 mr-4 mt-1 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-semibold text-xl mb-2">Save time on applications</h3>
              <p className="text-gray-600">Streamline your application process and apply to multiple jobs efficiently.</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCheck className="text-green-500 mr-4 mt-1 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-semibold text-xl mb-2">Apply to jobs using over 70+ job sites</h3>
              <p className="text-gray-600">Get tailored job recommendations based on your skills and preferences.</p>
            </div>
          </div>
          <div className="p-6 rounded-md shadow-lg bg-white flex items-start">
            <FaCheck className="text-green-500 mr-4 mt-1 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-semibold text-xl mb-2">Track your application progress</h3>
              <p className="text-gray-600">Stay organized with real-time updates on your job applications.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 max-w-5xl mx-auto w-full">
        <div className="py-8 px-30 mx-auto lg:py-100 lg:px-0">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-500">Choose the perfect plan for your needs.</p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:space-y-0">
            {[
              {
                title: "Normal",
                price: <span className="text-2xl font-bold text-blue-600">28 USD</span>,
                features: [
                  "Up to 50 job applications per month.",
                  "Dedicated hiring manager",
                  "Applications status",
                  "Weekly reports in email inbox.",
                  "Customer support",
                ],
              },
              {
                title: "Intense",
                price: <span className="text-2xl font-bold text-blue-600">47 USD</span>,
                features: [
                  "100+ job applications per month.",
                  "Dedicated hiring manager",
                  "Applications status",
                  "Weekly reports in email inbox.",
                  "Customer support",
                ],
              },
            ].map((plan, index) => (
              <div key={index} className="flex flex-col p-3 mx-auto w-full max-w-md text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white h-full justify-between">
                <div>
                  <h3 className="mb-2 text-2xl font-semibold text-zinc-800">{plan.title}</h3>
                  <p className="font-light text-zinc-800 sm:text-lg dark:text-gray-400 mb-4">{plan.price}</p>
                  <ul role="list" className="mb-8 space-y-4 text-left mt-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-black">
                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  <a
                    href="#"
                    className="bg-blue-500 text-white px-10 py-3 rounded-md hover:bg-blue-600 font-medium block w-full"
                  >
                    Get started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col paddings mb-16 max-w-6xl mx-auto w-full">
        <div className="mb-10">
          {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">Testimonials</h2>
          <p className="text-lg text-gray-500">What our users are saying.</p> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col paddings mb-16 max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">FAQ</h2>
          <p className="text-lg text-gray-500">Frequently asked questions.</p>
        </div>
        <Faq faqData={faqData} />
      </section>
    </section>
  );
};

export default Home;

