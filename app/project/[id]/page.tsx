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
    description: "Escrow is a web app that allows users to buy and sell digital assets.",
    images: ["/project-dribble1.png", "/project-dribble2.png", "/project-dribble3.png"],
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now $90 
        </button>
    

        
      </div>
      <span className="text-gray-400 text-sm mt-5 text-green-600">(25% off)</span>

      <Carousel images={images} />

      <div className="mt-10">
        <p className="text-lg"><strong>Availability:</strong> {projectDetails.availableCount}/20 </p>
      </div>
    </section>
  </Modal>
  );
};

export default Project;
