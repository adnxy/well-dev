import Link from "next/link";

import { getUserProjects } from "@/lib/actions";
import { ProjectInterface, UserProfile } from "@/common.types";
import Image from "next/image";

import projectDefault2 from "../../public/project2.jpg";
import projectDefault3 from "../../public/project3.jpg";
import projectDefault4 from "../../public/project-dribble1.png";
import projectDefault5 from "../../public/project-dribble2.png";
import projectDefault7 from "../../public/project7.jpg";
import projectDefault8 from "../../public/project-dribble3.png";
import projectDefault10 from "../../public/project-dribble5.png";
import projectDefault11 from "../../public/project-dribble6.png";
import localImage from "../../public/logo.svg"; // Adjust the path according to your project structure

type Props = {
  userId: string;
  projectId: string;
};

const RelatedProjects = async ({ userId, projectId }: Props) => {
  // const result = await getUserProjects(userId) as { user?: UserProfile}

  const filteredProjects = {
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

  // const filteredProjects = result?.user?.projects?.edges
  //     ?.filter(({ node }: { node: ProjectInterface }) => node?.id !== projectId)

  // if (filteredProjects?.length === 0) return null;

  return (
    <section className="flex flex-col mt-32 w-full">
      <div className="flexBetween">
        <h1 className="text-3xl font-bold mt-4">Related Products</h1>
      </div>
      <div className="related_projects-grid">
        {filteredProjects?.projectSearch.edges.map(
          ({ node }: { node: ProjectInterface }) => (
            <div className="flexCenter related_project-card drop-shadow-card">
              <Link
                href={`/project/${node?.id}`}
                className="flexCenter group relative w-full h-full"
              >
                <Image
                  src={node?.image}
                  width={414}
                  height={314}
                  className="w-full h-full object-cover rounded-2xl"
                  alt={`${node?.title} project image`}
                />
                <div className="hidden group-hover:flex related_project-card_title">
                  <p className="w-full">{node?.title}</p>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default RelatedProjects;
