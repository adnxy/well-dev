"use client";
import { ProjectInterface } from "@/common.types";
import Categories from "./components/Categories";
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
import {
  FaCheck,
  FaCode,
  FaCube,
  FaFacebook,
  FaImage,
  FaPen,
  FaSearch,
  FaVideo,
} from "react-icons/fa";
import { SiGooglemarketingplatform } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { CiDatabase, CiDesktop } from "react-icons/ci";
import {
  FaUpload,
  FaSearch as FaSearchIcon,
  FaCalendarAlt,
  FaBriefcase,
} from "react-icons/fa";
import { FaCheckSquare } from "react-icons/fa"; // Import the checkbox icon
import TrendingJobCategories from "./components/TrendingJobCategories";

import Button from "./components/Button";
import "@fontsource/space-grotesk"; // Defaults to weight 400
import Image from "next/image";
import Framer from "../public/framer-logo.svg";
import Faq from "./components/FAQ";
import ResumeUpload from "./components/ResumeUpload";
import { useEffect, useState, useRef } from "react";
import styles from "./page.module.css"; // Add this import

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

  const projectsToDisplay = data?.projectSearch?.edges || [];

  const [visibleItems, setVisibleItems] = useState(1);
  const sectionRef = useRef<HTMLDivElement>(null);

  const jobApplications = [
    {
      title: "Software Engineer",
      company: "TechCorp",
      status: "Application Submitted",
      salary: "120.000",
      logo: pg,
    },
    {
      title: "Data Scientist",
      company: "Data Inc.",
      status: "Pending Application",
      salary: "110.000",
      logo: uber,
    },
    {
      title: "Senior Product Manager",
      company: "Product Co.",
      status: "Interview Scheduled",
      salary: "140.000",
      logo: adobe,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Check if the user has scrolled past the first job application
        if (sectionTop < windowHeight) {
          setTimeout(() => {
            setVisibleItems((prev) =>
              Math.min(prev + 1, jobApplications.length)
            );
          }, 1000); // Delay of 1000ms (1 second) for a slower transition
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <section className="mb-16">
      <div
        className="pt-40 text-center"
        style={{
          backgroundColor: "#151f2a",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">
          You Upload the Resume, We Apply to the Jobs
        </h1>
        <p className="text-lg text-slate-200 mb-5 mt-5">
          Auto-apply to hundreds of jobs across the web and get interview
          invites.
        </p>
        <ResumeUpload />
        <section
          className="flexCenter flex-col mt-10 bg-center bg-no-repeat bg-contain h-[800px] w-[80%] mx-auto"
          style={{
            backgroundImage: "url(/dashboard-desktop.png)",
          }}
        />
      </div>
      <section className="flexStart flex-col paddings mt-20 ">
        <p className="text-black mt-0 mb-5 text-lg text-center">
          Our customers got interviewes with leading companies worldwide
        </p>
        <div className="flex justify-start items-center mt-4 space-x-8">
          <Image
            src={adobe}
            alt="Adobe"
            width={40}
            height={30}
            className="filter grayscale"
          />
          <Image
            src={airbnb}
            alt="Airbnb"
            width={100}
            height={30}
            className="filter grayscale"
          />
          <Image
            src={wordpress}
            alt="Wordpress"
            width={40}
            height={30}
            className="filter grayscale hidden md:block"
          />{" "}
          <Image
            src={pg}
            alt="Procter and Gamble"
            width={60}
            height={30}
            className="filter grayscale"
          />
          <Image src={grab} alt="Grab" width={80} height={30} />
        </div>
        <div className="mb-20" />
      </section>
      <section
        ref={sectionRef}
        className="flexStart flex-col paddings mb-20 mt-20 w-full max-w-6xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Recent Applications
        </h2>
        <p className="text-lg text-gray-500 mb-5">
          Real-time tracking of applications.
        </p>
        <div className="flex flex-col w-full">
          {jobApplications.map((application, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 mt-1 mb-4 bg-white rounded-lg shadow-md border border-slate-200 transition-all duration-1000 cursor-pointer hover:bg-slate-100 ${
                index < visibleItems
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              // onClick={() => handleApplicationClick(application)} // Add click handler
            >
              <div className="flex items-center">
                <Image
                  src={application.logo} // Use the logo from the application object
                  alt={`${application.company} logo`}
                  width={40} // Adjust size as needed
                  height={40} // Adjust size as needed
                  className="mr-3 rounded-full" // Add margin and make it round
                />
                <div>
                  <h3 className="font-semibold text-lg">{application.title}</h3>
                  <p className="text-gray-600">{application.company}</p>{" "}
                  {/* Removed name */}
                  <p className="text-gray-500">{`$${application.salary}`}</p>
                </div>
              </div>
              <div className="flex items-center">
                <span
                  className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    application.status === "Application Submitted"
                      ? "text-orange-800 bg-orange-200"
                      : application.status === "Pending Application"
                      ? "text-yellow-800 bg-yellow-200"
                      : application.status === "Interview Scheduled"
                      ? "text-green-800 bg-green-200"
                      : "text-gray-800 bg-gray-200"
                  }`}
                >
                  {application.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-4">
          <div>
            <Image
              src="/job-application.png"
              alt="Job Application"
              width={300}
              height={150}
              className="rounded-md"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex flex-col justify">
            {" "}
            {/* Added flex and justify-center to align text vertically */}
            <h2 className="text-4xl font-bold mb-4 tracking-wide leading-tight">
              Get notified with the new application updates
            </h2>
            <p className="mb-6 text-lg leading-relaxed">
              Stay up-to-date with the latest application updates. Join our
              network and sit back while we apply to jobs for you.
            </p>
            <button className="bg-emerald-600 hover:bg-emerald-500 py-3 px-6 rounded-lg text-white font-medium">
              Create New Account
            </button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      {/* <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">No Spam, Just Awesome Chances</h3>
        <p className="mb-6">Discover exclusive job listings with top companies.</p>
        <div className="flex justify-center space-x-8">
          <img src="company_logo_1" alt="Company 1" className="h-12" />
          <img src="company_logo_2" alt="Company 2" className="h-12" />
          <img src="company_logo_3" alt="Company 3" className="h-12" />
          <img src="company_logo_4" alt="Company 4" className="h-12" />
        </div>
      </div>
    </section> */}

      <section className="flexStart flex-col paddings mb-16 w-full max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mt-40">
          Trending Job Categories
        </h1>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollContent}>
            {[
              { type: "Software Developer", icon: <FaCode size={18} /> },
              {
                type: "Marketing",
                icon: <SiGooglemarketingplatform size={18} />,
              },
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
              {
                type: "Marketing",
                icon: <SiGooglemarketingplatform size={18} />,
              },
              { type: "SEO", icon: <FaSearch size={18} /> },
              { type: "UI/UX Design", icon: <MdDesignServices size={18} /> },
            ].map((job, index) => (
              <div
                key={index}
                className={`${styles.scrollItem} bg-slate-50 p-4 rounded-md flex items-center mx-2 shadow-sm`}
              >
                <span className="mr-2">{job.icon}</span>
                {job.type}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="bg-slate-50 hover:bg-slate-200 py-3 px-6 rounded-lg text-black font-medium mt-10">
              Explore All Categories
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col paddings mb-16 max-w-6xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            FAQ
          </h1>
          <p className="text-lg text-gray-500">Frequently asked questions.</p>
        </div>
        <Faq faqData={faqData} />
      </section>
      <div className="mb-40" />
    </section>
  );
};

export default Home;