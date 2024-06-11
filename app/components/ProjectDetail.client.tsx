import { useState } from 'react';
import Image from "next/image";
import Modal from "@/app/components/Modal";

//use client
const ProjectDetail = ({ projectDetails }: { projectDetails: any }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = projectDetails.images;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Modal>
      <div className="relative w-full max-w-6xl h-auto">
        <Image
          src={images[currentImage]}
          alt="Design Template"
          width={800}
          height={600}
          className="rounded-lg"
        />
        {/* Navigation buttons */}
      </div>
      {/* Other UI elements */}
    </Modal>
  );
};

export default ProjectDetail;