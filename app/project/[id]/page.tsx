import Image from "next/image";
import Link from "next/link";

import { getCurrentUser } from "@/lib/session";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";
import ProjectActions from "../../components/ProjectActions";
import RelatedProjects from "../../components/RelatedProjects";
import Modal from "@/app/components/Modal";
import Carousel from "@/app/components/Carousel";

const Project = async ({ params: { id } }: { params: { id: string } }) => {
  const projectDetails = {
    title: "E-commerce Web App",
    description:
      "Escrow is a web app that allows users to buy and sell digital assets.",
    images: [
      "/project-dribble1.png",
      "/project-dribble2.png",
      "/project-dribble3.png",
    ],
    availableCount: 10,
    category: "Web App",
    createdBy: {
      name: "John Doe",
      avatarUrl: "/avatar.png",
    },
  };
  const images = projectDetails.images; // Assuming projectDetails.images is an array of image URLs

  const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`;

  return (
    <Modal>
      <section className="flex flex-col items-center p-8">
        <h1 className="text-3xl font-bold mt-4">{projectDetails.title}</h1>
        <p className="text-gray-600 mt-2">{projectDetails.description}</p>
        <div className="mt-4 flex space-x-4">
          <button className="bg-transparent hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-500 rounded">
            Preview
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-4 rounded">
            Buy Now $90
          </button>
        </div>
        <p className="text-lg mt-10">
          <strong>Availability:</strong> {projectDetails.availableCount}/20{" "}
        </p>

        {/* <span className="text-gray-400 text-sm mt-5 text-green-600">(25% off)</span> */}

        <Carousel images={images} />

        <div className="mt-20 text-center">
          
          <p className="text-xl text-gray-600 leading-relaxed mb-4 text-center">
            Hi! 👋 Some time ago I was working on a concept for beginners,
            experienced and would-be designers from the interior design
            industry. The application allows the community to gather in one
            place to share knowledge, ideas, inspiration and work together on
            non-commercial and commercial projects at the same time. Enjoy! 🙌
            We're available for new projects! Drop us a line at ux@netguru.com -
            Show us love! Press "L". Want to see more projects? Visit our
            profile and remember to follow us!
          </p>
        </div>
      </section>
      <RelatedProjects userId="1" projectId="1" />
    </Modal>
  );
};

export default Project;
