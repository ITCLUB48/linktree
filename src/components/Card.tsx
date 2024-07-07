import {
  Card,
  CardBody,
  Typography,
  IconButton,
  CardHeader,
} from "@material-tailwind/react";
import { Check, Copy, Github, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";
import Discord from "@assets/discord.png";
import Insta from "@assets/instagram.webp";
import Git from "@assets/github.png";
import Yt from "@assets/youtube.jpg";
import type { CardProps } from "@lib/types";

const props: CardProps[] = [
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    img: Insta.src,
    url: "https://instagram.com/itclub48",
    desc: "Explore our extracurricular activities on Instagram.",
  },
  {
    name: "Discord",
    icon: "fa-brands fa-discord",
    img: Discord.src,
    url: "https://dsc.gg/terr48yte",
    desc: "Join our tech community on Discord.",
  },

  {
    name: "Github",
    icon: "fa-brands fa-github",
    img: Git.src,
    url: "https://github.com/terr48yte",
    desc: "Discover our creative projects on GitHub.",
  },
  {
    name: "Youtube",
    icon: "fa-brands fa-youtube",
    img: Yt.src,
    url: "https://youtube.com/@terr48yte",
    desc: "Watch our latest video on YouTube.",
  },
];

export default function CardWithLink() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<number | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-12 items-center justify-center w-full container">
      {props?.map((item, i) => (
        <Card
          key={i}
          className="w-full bg-[#15101a] border border-gray-800 "
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <CardHeader
            className="relative"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <img
              src={item.img}
              className="aspect-[6/3] object-cover"
              alt="banner"
            />
          </CardHeader>
          <CardBody
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <div className="flex items-center gap-4">
              <i className={`${item.icon} fa-2xl text-content`}></i>
              <a
                href={item.url}
                target="_blank"
                className="text-content text-lg font-bold cursor-pointer hover:underline"
              >
                {item.name}
              </a>
              <IconButton
                onClick={() => {
                  copy(item.url);
                  setCopied(i);
                }}
                onMouseLeave={() => setCopied(null)}
                variant="text"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                className="ml-auto"
              >
                {copied === i ? (
                  <Check color="#FCFEFF" />
                ) : (
                  <Copy color="#FCFEFF" />
                )}
              </IconButton>
            </div>
            <p className="text-content/60 mt-2 h-12 line-clamp-2 leading-relaxed">
              {item.desc}
            </p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
