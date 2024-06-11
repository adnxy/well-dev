import Image from "next/image";
import Link from "next/link";

import Modal from "@/app/components/Modal";

const Hire = async ({ params: { id } }: { params: { id: string } }) => {
  // const session = await getCurrentUser()
  // const result = await getProjectDetails(id) as { project?: ProjectInterface}

  // if (!result?.project) return (
  //     <p className="no-result-text">Failed to fetch project info</p>
  // )

  // const projectDetails = result?.project
  const projectDetails = {
    title: "Project Title",
    description: "Project Description",
    image: "/project-dribble1.png",
    createdBy: {
      name: "John Doe",
      avatarUrl: "/avatar.png",
    },
  };

  const renderLink = () => `/profile/${projectDetails?.createdBy?.id}`;

  return (
    <Modal>
 <section className="flexBetween gap-y-5 max-w-4xl max-xs:flex-col w-full">
        <div className="flex-1 flex flex-col items-start gap-5 w-full max-xs:flex-col">
          <h1 className="text-2xl font-medium text-center text-gray-700">Framer and Weblflow design and development service</h1>
          <div className="flex flex-col items-center">
            <ul className="list-inside list-disc flex flex-row items-center gap-5">
              <li>Unlimited revisions</li>
              <li>Fixed pricing</li>
              <li>Money-back guarantee</li>
            </ul>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default Hire;
