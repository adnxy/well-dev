"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  id: string;
  image: string;
  title: string;
  name: string;
  avatarUrl: string;
  userId: string;
};

const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
  const [randomLikes, setRandomLikes] = useState(0);
  const [randomViews, setRandomViews] = useState("");

  useEffect(() => {
    setRandomLikes(Math.floor(Math.random() * 10000));
    setRandomViews(
      String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + "k")
    );
  }, []);

  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card transition-transform duration-300 hover:scale-105">
      <Link
        href={`/project/${id}`}
        className="flexCenter group relative w-full h-full"
      >
        <Image
          src={image}
          width={414}
          height={314}
          className="w-full h-full object-cover rounded-2xl"
          alt="project image"
        />

        <div className="hidden group-hover:flex profile_card-title">
          <p className="w-full">
            {" "}
            {9}/{20} available
          </p>
        </div>
      </Link>

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-sm pt-2">
        <Link href={`/profile/${userId}`}>
          <div className="flexCenter gap-2 ">
            {/* <Image
                                src={avatarUrl}
                                width={24}
                                height={24}
                                className="rounded-full"
                                alt="profile image"
                            /> */}
            <p className="text-base font-medium text-zinc-600">{name}</p>
          </div>
        </Link>

        <div className="flexCenter gap-3">
          <div className="flexCenter gap-2">
            {/* <Image src="/hearth.svg" width={13} height={12} alt="heart" /> */}
            {/* <p className="text-base text-slate-600">
              {7}/{10} left
            </p> */}
          </div>
          <div className="flexCenter gap-2">
            {/* <Image src="/eye.svg" width={12} height={9} alt="eye" /> */}
            <p className="text-base text-zinc-600 px-2 py-1 rounded-md">{`$${95}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
