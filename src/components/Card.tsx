import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import {
  Check,
  CircleAlert,
  Copy,
  ExternalLink,
  Github,
  Globe,
  Instagram,
  Youtube,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { useCopyToClipboard } from "usehooks-ts";

type Props = {
  name: string;
  icon: ReactNode;
  url: string;
}[];

const props: Props = [
  {
    name: "Website",
    icon: <Globe size={40} color="#000100" />,
    url: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram size={40} color="#000100" />,
    url: "https://instagram.com/itclub48",
  },
  {
    name: "Discord",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width={40}>
        <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
      </svg>
    ),
    url: "https://dsc.gg/terr48yte",
  },

  {
    name: "Github",
    icon: <Github size={40} color="#000100" />,
    url: "https://github.com/ITCLUB48",
  },
  {
    name: "Youtube",
    icon: <Youtube size={40} color="#000100" />,
    url: "https://youtube.com/@terr48yte",
  },
  {
    name: "",
    icon: <CircleAlert size={40} color="#000100" />,
    url: "#",
  },
];

export default function CardWithLink() {
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<number | null>(null);

  return (
    <div className="md:grid md:flex-col md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8 items-center justify-center w-full flex flex-col">
      {props &&
        props.map((link, i) => (
          <Card
            key={i}
            className="w-full"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <CardBody
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex items-center gap-4">
                {link.icon}
                <Typography
                  variant="h5"
                  color="blue-gray"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {link.name}
                </Typography>
              </div>
              <Typography
                id="link"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
                variant="paragraph"
                className="mt-4"
              >
                {link.url}
              </Typography>
            </CardBody>
            <CardFooter
              className="pt-0"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <div className="flex items-center justify-end">
                <IconButton
                  onClick={() => {
                    copy(link.url);
                    setCopied(i);
                  }}
                  onMouseLeave={() => setCopied(null)}
                  variant="text"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {copied === i ? <Check /> : <Copy />}
                </IconButton>
                <a
                  href={link.url}
                  target="_blank"
                  aria-label="Visit external link"
                >
                  <IconButton
                    variant="text"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    <ExternalLink />
                  </IconButton>
                </a>
              </div>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
