import Link from "next/link";
import React from "react";
import Chip from "./Chip";

type Tag = {
  text: string;
  variant?: "primary" | "secondary" | "tertiary";
};

type CardProps = {
  title?: string;
  description: string;
  link: string;
  image: string;
  tags: Tag[];
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  link,
  image,
  tags,
}) => {
  return (
    <div className="w-full flex-1 rounded-3xl shadow-[0_4px_32px_rgba(167,188,255,0.16)]">
      <Link href={link}>
        <a>
          <div className="flex h-60 overflow-hidden rounded-tl-3xl rounded-tr-3xl">
            <img src={image} className="w-full object-cover" alt={title} />
          </div>
          <div className="flex h-[272px] w-full flex-col justify-between overflow-hidden rounded-bl-3xl rounded-br-3xl bg-[#FAFBFF]/50 py-6 px-4">
            <div className="flex flex-col">
              {title ? (
                <span className="mb-4 font-title text-sm uppercase">
                  {title}
                </span>
              ) : null}
              <span className="font-title-bold text-2xl">{description}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <Chip key={index} variant={tag?.variant}>
                  {tag.text}
                </Chip>
              ))}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
